<?php

namespace App\Http\Controllers;

use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AuthorController extends Controller
{
    /**
     * Display the Author Dashboard & Submissions List.
     */
    public function dashboard(Request $request)
    {
        $user = Auth::user();

        // 1. Calculate user-scoped submission counts strictly for the authenticated researcher
        $baseQuery = $user->submissions();

        $counts = [
            'total'               => (clone $baseQuery)->count(),
            'submitted'           => (clone $baseQuery)->where('status', 'submitted')->count(),
            'under_review'        => (clone $baseQuery)->where('status', 'under_review')->count(),
            'revisions_requested' => (clone $baseQuery)->where('status', 'revisions_requested')->count(),
            'accepted'            => (clone $baseQuery)->where('status', 'accepted')->count(),
            'rejected'            => (clone $baseQuery)->where('status', 'rejected')->count(),
        ];

        // 2. Scoped submissions list query with optional search & status filtering
        $query = $user->submissions();

        if ($request->filled('search')) {
            $search = trim($request->input('search'));
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('tracking_id', 'like', "%{$search}%");
            });
        }

        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

        // 3. Paginate server-side (10 items per page) preserving query parameters
        $submissions = $query->orderBy('created_at', 'desc')
                             ->paginate(10)
                             ->withQueryString();

        return Inertia::render('Author/Dashboard', [
            'counts'      => $counts,
            'submissions' => $submissions,
            'filters'     => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Display a specific submission detail view.
     * Protected by SubmissionPolicy authorization.
     */
    public function show(Submission $submission)
    {
        Gate::authorize('view', $submission);

        $submission->load(['statusHistories.changedBy:id,full_name']);

        $safeSubmission = [
            'id'                  => $submission->id,
            'tracking_id'         => $submission->tracking_id,
            'title'               => $submission->title,
            'abstract'            => $submission->abstract,
            'keywords'            => $submission->keywords,
            'article_type'        => $submission->article_type,
            'subject_area'        => $submission->subject_area,
            'author_name'         => $submission->author_name,
            'author_email'        => $submission->author_email,
            'author_phone'        => $submission->author_phone,
            'institution'         => $submission->institution,
            'country'             => $submission->country,
            'authors_json'        => $submission->authors_json,
            'status'              => $submission->status,
            'created_at'          => $submission->created_at,
            'updated_at'          => $submission->updated_at,
            'has_manuscript_file' => !empty($submission->file_path),
            'has_supp_file'       => !empty($submission->supplementary_file_path),
            'status_histories'    => $submission->statusHistories->map(function ($h) {
                return [
                    'id'          => $h->id,
                    'from_status' => $h->from_status,
                    'to_status'   => $h->to_status,
                    'created_at'  => $h->created_at,
                ];
            }),
        ];

        return Inertia::render('Author/SubmissionDetail', [
            'submission' => $safeSubmission,
        ]);
    }
}
