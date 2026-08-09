<?php

namespace App\Http\Controllers;

use App\Models\SubmissionReview;
use App\Services\ReviewerNotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ReviewerController extends Controller
{
    protected ReviewerNotificationService $notificationService;

    public function __construct(ReviewerNotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    /**
     * Display the Peer Reviewer Workqueue Dashboard.
     * Enforces strict Reviewer Isolation & Double-Blind Payload Protection.
     */
    public function dashboard(Request $request)
    {
        $user = Auth::user();

        // 1. Scoped base query strictly isolated to authenticated reviewer
        $baseQuery = SubmissionReview::where('reviewer_id', $user->id);

        // 2. Calculate reviewer-specific metrics
        $counts = [
            'pending_invitations' => (clone $baseQuery)->where('status', 'invited')->count(),
            'active_reviews'      => (clone $baseQuery)->whereIn('status', ['accepted', 'assigned'])->whereNull('completed_at')->count(),
            'overdue_reviews'     => (clone $baseQuery)->overdue()->count(),
            'completed_reviews'   => (clone $baseQuery)->where('status', 'completed')->count(),
            'total_assignments'   => (clone $baseQuery)->count(),
        ];

        // 3. Workqueue query with Double-Blind Payload Scoping
        // EXCLUDES: author_name, author_email, author_phone, institution, country, user_id
        $query = (clone $baseQuery)->with(['submission' => function ($q) {
            $q->select('id', 'tracking_id', 'title', 'article_type', 'subject_area', 'created_at');
        }]);

        if ($request->filled('status')) {
            $status = $request->input('status');
            if ($status === 'overdue') {
                $query->overdue();
            } else {
                $query->where('status', $status);
            }
        }

        if ($request->filled('search')) {
            $search = trim($request->input('search'));
            $query->whereHas('submission', function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('tracking_id', 'like', "%{$search}%");
            });
        }

        $reviews = $query->orderBy('created_at', 'desc')
                         ->paginate(10)
                         ->withQueryString();

        // Transform paginated items to guarantee double-blind payload protection
        $reviews->through(function ($review) {
            return [
                'id'           => $review->id,
                'status'       => $review->status,
                'is_draft'     => $review->is_draft,
                'is_overdue'   => $review->is_overdue,
                'days_overdue' => $review->days_overdue,
                'submitted_at' => $review->submitted_at?->toISOString(),
                'invited_at'   => $review->invited_at?->toISOString(),
                'due_at'       => $review->due_at?->toISOString(),
                'submission'   => $review->submission ? [
                    'id'           => $review->submission->id,
                    'tracking_id'  => $review->submission->tracking_id,
                    'title'        => $review->submission->title,
                    'article_type' => $review->submission->article_type,
                    'subject_area' => $review->submission->subject_area,
                    'created_at'   => $review->submission->created_at?->toISOString(),
                ] : null,
            ];
        });

        return Inertia::render('Reviewer/Dashboard', [
            'counts'      => $counts,
            'reviews'     => $reviews,
            'filters'     => $request->only(['search', 'status']),
            'auth_user'   => [
                'id'        => $user->id,
                'name'      => $user->full_name,
                'email'     => $user->email,
                'role'      => $user->role,
            ],
        ]);
    }

    /**
     * Display a specific assigned review for the reviewer (IDOR Protected & Double-Blind Scoped).
     */
    public function show(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        // Direct IDOR Protection: Reviewer can ONLY view their own review assignment
        if ((int) $review->reviewer_id !== (int) $user->id && $user->role !== 'admin') {
            abort(403, 'Unauthorized access to this review assignment.');
        }

        // Double-Blind Payload Scoping: Load submission without author identity
        $review->load(['submission' => function ($q) {
            $q->select('id', 'tracking_id', 'title', 'article_type', 'subject_area', 'created_at');
        }]);

        return Inertia::render('Reviewer/Dashboard', [
            'review' => [
                'id'            => $review->id,
                'status'        => $review->status,
                'is_draft'      => $review->is_draft,
                'is_overdue'    => $review->is_overdue,
                'days_overdue'  => $review->days_overdue,
                'submitted_at'  => $review->submitted_at?->toISOString(),
                'invited_at'    => $review->invited_at?->toISOString(),
                'due_at'        => $review->due_at?->toISOString(),
                'submission'    => $review->submission ? [
                    'id'           => $review->submission->id,
                    'tracking_id'  => $review->submission->tracking_id,
                    'title'        => $review->submission->title,
                    'article_type' => $review->submission->article_type,
                    'subject_area' => $review->submission->subject_area,
                    'created_at'   => $review->submission->created_at?->toISOString(),
                ] : null,
            ],
            'auth_user' => [
                'id'   => $user->id,
                'name' => $user->full_name,
                'role' => $user->role,
            ],
        ]);
    }

    /**
     * Download or stream the assigned manuscript file securely for an authorized reviewer.
     * Enforces Policy Authorization, Path Traversal Defense, MIME Validation, and Double-Blind Anonymization.
     */
    public function downloadManuscript(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        // 1. Authorization Policy Check: Only Admin or Assigned Reviewer owner can access manuscript
        if (! $user->can('downloadManuscript', $review)) {
            abort(403, 'Unauthorized access to this manuscript file.');
        }

        // 2. Load submission through server-side relationship
        $review->load('submission');
        $submission = $review->submission;

        if (! $submission || empty($submission->file_path)) {
            abort(404, 'Manuscript record or file path not found.');
        }

        $path = $submission->file_path;

        // 3. Path Traversal & Path Normalization Defense
        if (
            str_contains($path, '..') ||
            str_contains($path, '\\') ||
            str_contains($path, "\0") ||
            str_starts_with($path, '/') ||
            filter_var($path, FILTER_VALIDATE_URL)
        ) {
            abort(404, 'Invalid or unsafe file path.');
        }

        // 4. Verify file physically exists on private storage disk 'local'
        if (! Storage::disk('local')->exists($path)) {
            abort(404, 'Manuscript file not found on private storage.');
        }

        // 5. File Format & Extension Validation
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        $allowedExtensions = ['pdf', 'doc', 'docx'];
        if (! in_array($extension, $allowedExtensions, true)) {
            abort(404, 'Unsupported manuscript file format.');
        }

        // 6. MIME Type Resolution
        $mimeType = Storage::disk('local')->mimeType($path) ?: 'application/octet-stream';

        // 7. Double-Blind Safe Filename Generation (Sanmati-Manuscript-{TRACKING_ID}.ext)
        // EXCLUDES author name, email, or institution
        $safeFilename = "Sanmati-Manuscript-{$submission->tracking_id}.{$extension}";

        // 8. Secure Private File Stream / Download Response
        return Storage::disk('local')->download($path, $safeFilename, [
            'Content-Type' => $mimeType,
            'Content-Disposition' => 'inline; filename="' . $safeFilename . '"',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    /**
     * Render the Review Evaluation & Scoring Page (Reviewer Payload Context).
     * Strictly omits author identity and confidential comments from readable payload.
     */
    public function editEvaluation(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('viewEvaluation', $review)) {
            abort(403, 'Unauthorized access to this review evaluation.');
        }

        // Double-Blind Scoped Manuscript Metadata
        $review->load(['submission' => function ($q) {
            $q->select('id', 'tracking_id', 'title', 'article_type', 'subject_area', 'created_at');
        }]);

        return Inertia::render('Reviewer/Evaluation', [
            'review' => [
                'id'                => $review->id,
                'status'            => $review->status,
                'is_draft'          => (bool) $review->is_draft,
                'originality_score' => $review->originality_score,
                'methodology_score' => $review->methodology_score,
                'relevance_score'   => $review->relevance_score,
                'clarity_score'     => $review->clarity_score,
                'overall_score'     => $review->overall_score,
                'recommendation'    => $review->recommendation,
                'reviewer_comments' => $review->reviewer_comments,
                'submitted_at'      => $review->submitted_at?->toISOString(),
                'submission'        => $review->submission ? [
                    'id'           => $review->submission->id,
                    'tracking_id'  => $review->submission->tracking_id,
                    'title'        => $review->submission->title,
                    'article_type' => $review->submission->article_type,
                    'subject_area' => $review->submission->subject_area,
                    'created_at'   => $review->submission->created_at?->toISOString(),
                ] : null,
            ],
            'auth_user' => [
                'id'   => $user->id,
                'name' => $user->full_name,
                'role' => $user->role,
            ],
        ]);
    }

    /**
     * Save a Review Evaluation Draft.
     * Editable only when is_draft === true and submitted_at === null.
     */
    public function storeDraft(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('saveDraft', $review)) {
            if (! $review->is_draft || $review->submitted_at !== null) {
                return response()->json(['message' => 'This review evaluation has already been finalized.'], 422);
            }
            abort(403, 'Unauthorized access to save draft.');
        }

        $validated = $request->validate([
            'originality_score'     => 'nullable|integer|between:1,5',
            'methodology_score'     => 'nullable|integer|between:1,5',
            'relevance_score'       => 'nullable|integer|between:1,5',
            'clarity_score'         => 'nullable|integer|between:1,5',
            'overall_score'         => 'nullable|integer|between:1,5',
            'recommendation'        => 'nullable|string|in:accept,minor_revision,major_revision,reject',
            'reviewer_comments'     => 'nullable|string|max:10000',
            'confidential_comments' => 'nullable|string|max:10000',
        ]);

        $review->update([
            'originality_score'     => $validated['originality_score'] ?? null,
            'methodology_score'     => $validated['methodology_score'] ?? null,
            'relevance_score'       => $validated['relevance_score'] ?? null,
            'clarity_score'         => $validated['clarity_score'] ?? null,
            'overall_score'         => $validated['overall_score'] ?? null,
            'recommendation'        => $validated['recommendation'] ?? null,
            'reviewer_comments'     => $validated['reviewer_comments'] ?? null,
            'confidential_comments' => $validated['confidential_comments'] ?? null,
            'is_draft'              => true,
        ]);

        return redirect()->back()->with('success', 'Review draft saved successfully.');
    }

    /**
     * Finalize and Submit Review Evaluation.
     * Uses DB::transaction() & lockForUpdate().
     * Locks review evaluation (is_draft = false, submitted_at = now()).
     * DOES NOT modify review status or completed_at (deferred to 2D.6).
     */
    public function submitEvaluation(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('submitEvaluation', $review)) {
            if (! $review->is_draft || $review->submitted_at !== null) {
                return response()->json(['message' => 'This review evaluation has already been finalized.'], 422);
            }
            abort(403, 'Unauthorized access to submit evaluation.');
        }

        $validated = $request->validate([
            'originality_score'     => 'required|integer|between:1,5',
            'methodology_score'     => 'required|integer|between:1,5',
            'relevance_score'       => 'required|integer|between:1,5',
            'clarity_score'         => 'required|integer|between:1,5',
            'overall_score'         => 'required|integer|between:1,5',
            'recommendation'        => 'required|string|in:accept,minor_revision,major_revision,reject',
            'reviewer_comments'     => 'required|string|min:20|max:10000',
            'confidential_comments' => 'nullable|string|max:10000',
        ]);

        return DB::transaction(function () use ($review, $validated) {
            $lockedReview = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedReview->status !== 'accepted') {
                return response()->json(['message' => 'Review invitation must be accepted before submitting evaluation.'], 422);
            }

            if ($lockedReview->coi_declared && $lockedReview->coi_resolved_at === null) {
                return response()->json(['message' => 'An active Conflict of Interest blocks final review submission.'], 422);
            }

            if (! $lockedReview->is_draft || $lockedReview->submitted_at !== null || $lockedReview->status === 'completed') {
                return response()->json(['message' => 'This review evaluation has already been completed.'], 422);
            }

            // Atomically set evaluation attributes AND review lifecycle status
            $lockedReview->update([
                'originality_score'     => $validated['originality_score'],
                'methodology_score'     => $validated['methodology_score'],
                'relevance_score'       => $validated['relevance_score'],
                'clarity_score'         => $validated['clarity_score'],
                'overall_score'         => $validated['overall_score'],
                'recommendation'        => $validated['recommendation'],
                'reviewer_comments'     => $validated['reviewer_comments'],
                'confidential_comments' => $validated['confidential_comments'] ?? null,
                'is_draft'              => false,
                'submitted_at'          => now(),
                'status'                => 'completed',
                'completed_at'          => now(),
            ]);

            $this->notificationService->sendCompletionNotification($lockedReview);

            return redirect()->route('reviewer.dashboard')->with('success', 'Review evaluation finalized and submitted successfully.');
        });
    }

    /**
     * Accept a review invitation.
     */
    public function acceptInvitation(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('acceptInvitation', $review)) {
            abort(403, 'Unauthorized access to accept review invitation.');
        }

        return DB::transaction(function () use ($review) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($locked->status !== 'invited') {
                return response()->json(['message' => 'Review invitation cannot be accepted in its current state.'], 422);
            }

            if ($locked->coi_declared && $locked->coi_resolved_at === null) {
                return response()->json(['message' => 'An active Conflict of Interest blocks invitation acceptance.'], 422);
            }

            $locked->update([
                'status'      => 'accepted',
                'accepted_at' => now(),
            ]);

            return redirect()->back()->with('success', 'Review invitation accepted.');
        });
    }

    /**
     * Decline a review invitation.
     */
    public function declineInvitation(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('declineInvitation', $review)) {
            abort(403, 'Unauthorized access to decline review invitation.');
        }

        return DB::transaction(function () use ($review) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($locked->status !== 'invited') {
                return response()->json(['message' => 'Review invitation cannot be declined in its current state.'], 422);
            }

            $locked->update([
                'status'      => 'declined',
                'declined_at' => now(),
            ]);

            return redirect()->back()->with('success', 'Review invitation declined.');
        });
    }

    /**
     * Declare a Conflict of Interest (COI).
     */
    public function declareConflict(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('declareConflict', $review)) {
            abort(403, 'Unauthorized access to declare Conflict of Interest.');
        }

        $validated = $request->validate([
            'coi_reason' => 'required|string|min:5|max:2000',
        ]);

        return DB::transaction(function () use ($review, $validated) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if (! in_array($locked->status, ['invited', 'accepted'], true)) {
                return response()->json(['message' => 'Completed or declined reviews cannot be marked with a Conflict of Interest.'], 422);
            }

            $locked->update([
                'coi_declared'    => true,
                'coi_reason'      => $validated['coi_reason'],
                'coi_declared_at' => now(),
                'status'          => 'conflict_declared',
            ]);

            $this->notificationService->sendCoiDeclaredNotification($locked);

            return redirect()->back()->with('success', 'Conflict of Interest declared successfully.');
        });
    }
}
