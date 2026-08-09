<?php

namespace App\Http\Controllers;

use App\Exceptions\InvalidStatusTransitionException;
use App\Models\Submission;
use App\Models\SubmissionEditorialNote;
use App\Models\SubmissionReview;
use App\Models\SubmissionReviewNotificationLog;
use App\Models\User;
use App\Services\ReviewerNotificationService;
use App\Services\SubmissionStatusTransitionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EditorController extends Controller
{
    protected SubmissionStatusTransitionService $transitionService;
    protected ReviewerNotificationService $notificationService;

    public function __construct(
        SubmissionStatusTransitionService $transitionService,
        ReviewerNotificationService $notificationService
    ) {
        $this->transitionService   = $transitionService;
        $this->notificationService = $notificationService;
    }

    /**
     * Display the Editor Dashboard & Editorial Workqueue.
     */
    public function dashboard(Request $request)
    {
        $user = Auth::user();

        // Scope query: Admin sees all; Editor sees assigned to self OR unassigned (available to claim)
        if ($user->role === 'admin') {
            $baseQuery = Submission::query();
        } else {
            $baseQuery = Submission::query()->where(function ($q) use ($user) {
                $q->where('editor_id', $user->id)
                  ->orWhereNull('editor_id');
            });
        }

        // 1. Calculate scoped editorial metrics including under_editorial_screening
        $counts = [
            'total'                     => (clone $baseQuery)->count(),
            'assigned_to_me'            => $user->role === 'admin' ? 0 : Submission::where('editor_id', $user->id)->count(),
            'unassigned'                => Submission::whereNull('editor_id')->count(),
            'submitted'                 => (clone $baseQuery)->where('status', 'submitted')->count(),
            'under_editorial_screening' => (clone $baseQuery)->where('status', 'under_editorial_screening')->count(),
            'under_review'              => (clone $baseQuery)->where('status', 'under_review')->count(),
            'revisions_requested'       => (clone $baseQuery)->where('status', 'revisions_requested')->count(),
            'accepted'                  => (clone $baseQuery)->where('status', 'accepted')->count(),
            'rejected'                  => (clone $baseQuery)->where('status', 'rejected')->count(),
        ];

        // 2. Scoped workqueue query with search & status filtering applied AFTER ownership scoping
        $query = (clone $baseQuery)->with(['editor:id,full_name,email']);

        if ($request->filled('search')) {
            $search = trim($request->input('search'));
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('tracking_id', 'like', "%{$search}%")
                  ->orWhere('author_name', 'like', "%{$search}%")
                  ->orWhere('author_email', 'like', "%{$search}%");
            });
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        // 3. Paginate server-side (10 items per page) preserving query parameters
        $submissions = $query->orderBy('created_at', 'desc')
                             ->paginate(10)
                             ->withQueryString();

        return Inertia::render('Editor/Dashboard', [
            'counts'      => $counts,
            'submissions' => $submissions,
            'filters'     => $request->only(['search', 'status']),
            'auth_user'   => [
                'id'   => $user->id,
                'name' => $user->full_name,
                'role' => $user->role,
            ],
        ]);
    }

    /**
     * Display detailed editor manuscript tracking page.
     */
    public function show(Request $request, Submission $submission)
    {
        $user = Auth::user();

        // Policy Check: View authorization required
        if (! $user->can('view', $submission)) {
            abort(403, 'Unauthorized access to this manuscript record.');
        }

        $submission->load([
            'author:id,full_name,email',
            'editor:id,full_name,email',
            'statusHistories.user:id,full_name,role',
            'editorialNotes.editor:id,full_name,email',
            'reviews.reviewer:id,full_name,email',
        ]);

        $allowedTransitions = $this->transitionService->getAllowedNextStatuses($submission->status);

        $candidateReviewers = User::where('role', 'reviewer')
            ->select('id', 'full_name', 'email')
            ->withCount(['assignedReviews as active_reviews_count' => function ($q) {
                $q->whereIn('status', ['accepted', 'assigned'])->whereNull('completed_at');
            }])
            ->get()
            ->map(function ($rev) {
                return [
                    'id'                   => $rev->id,
                    'full_name'            => $rev->full_name,
                    'email'                => $rev->email,
                    'active_reviews_count' => (int) ($rev->active_reviews_count ?? 0),
                ];
            });

        return Inertia::render('Editor/SubmissionDetail', [
            'submission' => [
                'id'                    => $submission->id,
                'tracking_id'           => $submission->tracking_id,
                'title'                 => $submission->title,
                'abstract'              => $submission->abstract,
                'keywords'              => $submission->keywords,
                'article_type'          => $submission->article_type,
                'subject_area'          => $submission->subject_area,
                'author_name'           => $submission->author_name,
                'author_email'          => $submission->author_email,
                'author_phone'          => $submission->author_phone,
                'institution'           => $submission->institution,
                'country'               => $submission->country,
                'authors_json'          => $submission->authors_json,
                'status'                => $submission->status,
                'created_at'            => $submission->created_at->toISOString(),
                'editor_id'             => $submission->editor_id,
                'editor'                => $submission->editor ? [
                    'id'        => $submission->editor->id,
                    'full_name' => $submission->editor->full_name,
                    'email'     => $submission->editor->email,
                ] : null,
                'status_history'        => $submission->statusHistories->map(function ($history) {
                    return [
                        'id'          => $history->id,
                        'from_status' => $history->from_status,
                        'to_status'   => $history->to_status,
                        'note'        => $history->note,
                        'created_at'  => $history->created_at->toISOString(),
                        'changed_by'  => $history->user ? $history->user->full_name : 'System',
                    ];
                }),
                'editorial_notes'       => $submission->editorialNotes->map(function ($note) {
                    return [
                        'id'         => $note->id,
                        'note'       => $note->note,
                        'created_at' => $note->created_at->toISOString(),
                        'editor'     => $note->editor ? [
                            'id'        => $note->editor->id,
                            'full_name' => $note->editor->full_name,
                            'email'     => $note->editor->email,
                        ] : null,
                    ];
                }),
                'assigned_reviews'      => $submission->reviews->map(function ($review) {
                    return [
                        'id'               => $review->id,
                        'reviewer_id'      => $review->reviewer_id,
                        'status'           => $review->status,
                        'is_overdue'       => $review->is_overdue,
                        'days_overdue'     => $review->days_overdue,
                        'invited_at'       => $review->invited_at?->toISOString(),
                        'due_at'           => $review->due_at?->toISOString(),
                        'reminder_sent_at' => $review->reminder_sent_at?->toISOString(),
                        'reminder_count'   => $review->reminder_count ?? 0,
                        'reviewer'         => $review->reviewer ? [
                            'id'        => $review->reviewer->id,
                            'full_name' => $review->reviewer->full_name,
                            'email'     => $review->reviewer->email,
                        ] : null,
                        'notification_logs' => $review->notificationLogs->map(function ($log) {
                            $parts = explode('@', $log->recipient_email);
                            $name = $parts[0];
                            $domain = $parts[1] ?? '';
                            $maskedEmail = (strlen($name) > 2)
                                ? substr($name, 0, 1) . '***' . substr($name, -1) . '@' . $domain
                                : '***@' . $domain;

                            return [
                                'id'                => $log->id,
                                'notification_type' => $log->notification_type,
                                'recipient_email'   => $maskedEmail,
                                'recipient_role'    => $log->recipient_role,
                                'status'            => $log->status,
                                'error_message'     => $log->error_message,
                                'queued_at'         => $log->queued_at?->toISOString(),
                                'sent_at'           => $log->sent_at?->toISOString(),
                                'failed_at'         => $log->failed_at?->toISOString(),
                                'retry_of_id'       => $log->retry_of_id,
                                'created_at'        => $log->created_at?->toISOString(),
                            ];
                        }),
                    ];
                }),
            ],
            'candidate_reviewers' => $candidateReviewers,
            'allowed_transitions' => $allowedTransitions,
            'can_update_status'   => $user->can('update', $submission),
            'auth_user'           => [
                'id'   => $user->id,
                'name' => $user->full_name,
                'role' => $user->role,
            ],
        ]);
    }

    /**
     * Claim an unassigned submission for the authenticated editor.
     */
    public function claim(Request $request, Submission $submission)
    {
        $user = Auth::user();

        DB::transaction(function () use ($submission, $user) {
            $sub = Submission::where('id', $submission->id)->lockForUpdate()->firstOrFail();

            if ($sub->editor_id !== null) {
                if ($sub->editor_id === $user->id) {
                    throw new \Exception('Submission is already assigned to you.');
                }
                abort(403, 'Conflict: Submission has already been claimed by another editor.');
            }

            $sub->update(['editor_id' => $user->id]);
        });

        if ($request->header('X-Inertia')) {
            return redirect()->back()->with('success', "Submission {$submission->tracking_id} successfully claimed.");
        }

        return response()->json([
            'message'     => "Submission {$submission->tracking_id} successfully claimed.",
            'editor_id'   => $user->id,
            'tracking_id' => $submission->tracking_id,
        ]);
    }

    /**
     * Transition editorial status via state machine service.
     */
    public function transitionStatus(Request $request, Submission $submission)
    {
        $user = Auth::user();

        if (! $user->can('update', $submission)) {
            abort(403, 'Unauthorized. Only the assigned editor or administrator can update status.');
        }

        $request->validate([
            'target_status' => 'required|string',
            'note'          => 'nullable|string|max:1000',
        ]);

        $targetStatus = trim($request->input('target_status'));
        $note = $request->input('note');

        try {
            $updatedSubmission = $this->transitionService->transition($submission, $targetStatus, $user, $note);
        } catch (InvalidStatusTransitionException $e) {
            if ($request->expectsJson() || $request->header('X-Inertia')) {
                return redirect()->back()->withErrors([
                    'target_status' => $e->getMessage(),
                ]);
            }
            throw $e;
        }

        if ($request->header('X-Inertia')) {
            return redirect()->back()->with('success', "Status updated to '{$targetStatus}' successfully.");
        }

        return response()->json([
            'message'     => "Status updated to '{$targetStatus}' successfully.",
            'status'      => $updatedSubmission->status,
            'tracking_id' => $updatedSubmission->tracking_id,
        ]);
    }

    /**
     * Store a private internal editorial note on a submission.
     * IDOR Protected: Only assigned editor or admin can add notes.
     */
    public function storeEditorialNote(Request $request, Submission $submission)
    {
        $user = Auth::user();

        // 1. Authorization: Only assigned editor or admin can create private notes
        if (! $user->can('update', $submission)) {
            abort(403, 'Unauthorized. Only the assigned editor or administrator can create private notes on this submission.');
        }

        // 2. Validate input: Trimmed note required, max 3000 chars
        $request->validate([
            'note' => 'required|string|min:2|max:3000',
        ]);

        $noteText = trim($request->input('note'));
        if (empty($noteText)) {
            return redirect()->back()->withErrors(['note' => 'Editorial note text cannot be empty or whitespace only.']);
        }

        // 3. Store note with strict mass assignment defense
        $createdNote = SubmissionEditorialNote::create([
            'submission_id' => $submission->id,
            'editor_id'     => $user->id,
            'note'          => $noteText,
        ]);

        if ($request->header('X-Inertia')) {
            return redirect()->back()->with('success', 'Private editorial note saved successfully.');
        }

        return response()->json([
            'message' => 'Private editorial note saved successfully.',
            'note_id' => $createdNote->id,
        ]);
    }

    /**
     * Assign a peer reviewer to a submission.
     * Protected by auth + editor middleware & explicit submission ownership check.
     */
    public function assignReviewer(Request $request, Submission $submission)
    {
        $user = Auth::user();

        // 1. Authorization check: Only Admin or Assigned Editor can assign reviewers
        if (! $user->can('update', $submission)) {
            abort(403, 'Unauthorized access to assign reviewers for this submission.');
        }

        // 2. Validate reviewer_id input
        $request->validate([
            'reviewer_id' => 'required|integer|exists:users,id',
        ]);

        $reviewerId = (int) $request->input('reviewer_id');

        // 3. Application-level check: Verify target user exists and has role === 'reviewer'
        $targetUser = \App\Models\User::find($reviewerId);
        if (! $targetUser || $targetUser->role !== 'reviewer') {
            return response()->json([
                'message' => 'The selected user is not eligible for reviewer assignment.',
                'errors'  => ['reviewer_id' => ['Target user must have reviewer role.']],
            ], 422);
        }

        // 4. Atomic transaction with lockForUpdate to prevent duplicate assignments
        try {
            $createdReview = DB::transaction(function () use ($submission, $targetUser) {
                // Lock submission
                $sub = Submission::where('id', $submission->id)->lockForUpdate()->firstOrFail();

                // Check existing assignment
                $existing = \App\Models\SubmissionReview::where('submission_id', $sub->id)
                    ->where('reviewer_id', $targetUser->id)
                    ->lockForUpdate()
                    ->first();

                if ($existing) {
                    throw new \Exception('Reviewer is already assigned to this submission.');
                }

                // Strict mass assignment defense: Explicit assignment of server-controlled values
                return \App\Models\SubmissionReview::create([
                    'submission_id' => $sub->id,
                    'reviewer_id'   => $targetUser->id,
                    'status'        => 'invited',
                    'invited_at'    => now(),
                ]);
            });
        } catch (\Exception $e) {
            if ($e->getMessage() === 'Reviewer is already assigned to this submission.') {
                return response()->json([
                    'message' => 'Reviewer is already assigned to this submission.',
                    'errors'  => ['reviewer_id' => ['Reviewer is already assigned to this submission.']],
                ], 422);
            }
            throw $e;
        }

        // Trigger double-blind safe reviewer invitation email
        $this->notificationService->sendInvitationNotification($createdReview);

        if ($request->header('X-Inertia')) {
            return redirect()->back()->with('success', "Reviewer {$targetUser->full_name} successfully assigned.");
        }

        return response()->json([
            'message'       => "Reviewer {$targetUser->full_name} successfully assigned.",
            'review_id'     => $createdReview->id,
            'submission_id' => $submission->id,
            'reviewer_id'   => $targetUser->id,
            'status'        => $createdReview->status,
        ], 201);
    }

    /**
     * Display a review evaluation for an editor or administrator.
     * Includes scores, recommendation, public reviewer comments, AND confidential editor comments (EDITOR PAYLOAD).
     */
    public function showReviewEvaluation(Request $request, \App\Models\SubmissionReview $review)
    {
        $user = Auth::user();

        $review->load(['submission', 'reviewer']);

        // Authorization check: Admin OR Editor assigned to this submission
        if ($user->role !== 'admin') {
            if ($user->role !== 'editor' || ! $review->submission || (int) $review->submission->editor_id !== (int) $user->id) {
                abort(403, 'Unauthorized access to this review evaluation.');
            }
        }

        return response()->json([
            'review' => [
                'id'                    => $review->id,
                'status'                => $review->status,
                'is_draft'              => (bool) $review->is_draft,
                'originality_score'     => $review->originality_score,
                'methodology_score'     => $review->methodology_score,
                'relevance_score'       => $review->relevance_score,
                'clarity_score'         => $review->clarity_score,
                'overall_score'         => $review->overall_score,
                'recommendation'        => $review->recommendation,
                'reviewer_comments'     => $review->reviewer_comments,
                'confidential_comments' => $review->confidential_comments,
                'submitted_at'          => $review->submitted_at?->toISOString(),
                'reviewer'              => $review->reviewer ? [
                    'id'    => $review->reviewer->id,
                    'name'  => $review->reviewer->full_name,
                    'email' => $review->reviewer->email,
                ] : null,
                'submission'            => $review->submission ? [
                    'id'          => $review->submission->id,
                    'tracking_id' => $review->submission->tracking_id,
                    'title'       => $review->submission->title,
                ] : null,
            ],
        ]);
    }

    /**
     * Update the review due date.
     * Allowed only when status is 'invited' or 'accepted'.
     */
    public function updateDueDate(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('updateDueDate', $review)) {
            abort(403, 'Unauthorized access to update review due date.');
        }

        $validated = $request->validate([
            'due_at' => 'required|date',
        ]);

        return DB::transaction(function () use ($review, $validated) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if (! in_array($locked->status, ['invited', 'accepted'], true)) {
                return response()->json(['message' => 'Due date cannot be modified for completed or declined reviews.'], 422);
            }

            $locked->update([
                'due_at' => $validated['due_at'],
            ]);

            return redirect()->back()->with('success', 'Review due date updated successfully.');
        });
    }

    /**
     * Resolve a declared Conflict of Interest (COI).
     * Accepts ONLY whitelisted actions: 'reinvite' or 'decline_assignment'.
     */
    public function resolveConflict(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('resolveConflict', $review)) {
            abort(403, 'Unauthorized access to resolve Conflict of Interest.');
        }

        $validated = $request->validate([
            'action' => 'required|string|in:reinvite,decline_assignment',
        ]);

        return DB::transaction(function () use ($review, $validated, $user) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($locked->status !== 'conflict_declared') {
                return response()->json(['message' => 'Only declared Conflicts of Interest can be resolved.'], 422);
            }

            if ($validated['action'] === 'reinvite') {
                $locked->update([
                    'status'          => 'invited',
                    'coi_resolved_at' => now(),
                    'coi_resolved_by' => $user->id,
                ]);
            } else {
                $locked->update([
                    'status'          => 'declined',
                    'declined_at'     => now(),
                    'coi_resolved_at' => now(),
                    'coi_resolved_by' => $user->id,
                ]);
            }

            return redirect()->back()->with('success', 'Conflict of Interest resolved successfully.');
        });
    }

    /**
     * Cancel a review assignment.
     * Allowed for invited, accepted, or conflict_declared reviews; forbidden for completed reviews.
     */
    public function cancelReviewAssignment(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('cancelReview', $review)) {
            abort(403, 'Unauthorized access to cancel review assignment.');
        }

        return DB::transaction(function () use ($review) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($locked->status === 'completed') {
                return response()->json(['message' => 'Completed reviews cannot be cancelled.'], 422);
            }

            $locked->delete();

            return redirect()->back()->with('success', 'Review assignment cancelled.');
        });
    }

    /**
     * Send a due date reminder to an assigned reviewer.
     * Allowed for assigned editors and admins when review status is accepted and due_at is set.
     */
    public function sendReminder(Request $request, SubmissionReview $review)
    {
        $user = Auth::user();

        if (! $user->can('sendReminder', $review)) {
            abort(403, 'Unauthorized access to send due date reminder.');
        }

        return DB::transaction(function () use ($review) {
            $locked = SubmissionReview::where('id', $review->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($locked->status !== 'accepted') {
                return response()->json(['message' => 'Due date reminders can only be sent for accepted reviews.'], 422);
            }

            if (! $locked->due_at) {
                return response()->json(['message' => 'Cannot send reminder for a review without a due date.'], 422);
            }

            // Cooldown enforcement: minimum 24 hours between reminders
            if ($locked->reminder_sent_at && $locked->reminder_sent_at->gt(now()->subHours(24))) {
                return response()->json(['message' => 'A reminder was already sent within the last 24 hours.'], 422);
            }

            $locked->reminder_sent_at = now();
            $locked->reminder_count   = $locked->reminder_count + 1;
            $locked->save();

            $this->notificationService->sendDueDateReminderNotification($locked);

            return redirect()->back()->with('success', 'Due date reminder sent successfully to reviewer.');
        });
    }

    /**
     * Safely retry a failed notification.
     * Allowed for assigned editors and admins. Creates a new notification log record referencing retry_of_id.
     */
    public function retryNotification(Request $request, SubmissionReview $review, SubmissionReviewNotificationLog $log)
    {
        $user = Auth::user();

        if (! $user->can('retryNotification', $review)) {
            abort(403, 'Unauthorized access to retry notification.');
        }

        if ((int) $log->review_id !== (int) $review->id) {
            abort(404, 'Notification log does not belong to the specified review.');
        }

        return DB::transaction(function () use ($user, $review, $log) {
            $lockedLog = SubmissionReviewNotificationLog::where('id', $log->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedLog->status !== 'failed') {
                return response()->json(['message' => 'Only failed notifications can be retried.'], 422);
            }

            $success = $this->notificationService->retryNotification($review, $lockedLog, $user->id);

            if (! $success) {
                return response()->json(['message' => 'Notification retry operation failed.'], 422);
            }

            return redirect()->back()->with('success', 'Failed notification successfully retried.');
        });
    }
}
