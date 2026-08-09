<?php

namespace App\Policies;

use App\Models\Submission;
use App\Models\User;

class SubmissionPolicy
{
    /**
     * Determine whether the user can view the submission details.
     */
    public function view(User $user, Submission $submission): bool
    {
        // Admin has full viewing access
        if ($user->role === 'admin') {
            return true;
        }

        // Editor can view if assigned OR if unassigned (available to claim)
        if ($user->role === 'editor') {
            return $submission->editor_id === null || $user->id === (int) $submission->editor_id;
        }

        // Author can view ONLY if they are the primary submission owner
        return $submission->user_id !== null && $user->id === (int) $submission->user_id;
    }

    /**
     * Determine whether the user can download manuscript files from the submission.
     */
    public function download(User $user, Submission $submission): bool
    {
        // Admin can download any manuscript
        if ($user->role === 'admin') {
            return true;
        }

        // Assigned Editor can download assigned manuscript
        if ($user->role === 'editor') {
            return $submission->editor_id !== null && $user->id === (int) $submission->editor_id;
        }

        // Author can download ONLY if they are the primary submission owner
        return $submission->user_id !== null && $user->id === (int) $submission->user_id;
    }

    /**
     * Determine whether the user can update the submission.
     * Only Admin or Assigned Editor can update editorial actions.
     */
    public function update(User $user, Submission $submission): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor') {
            return $submission->editor_id !== null && $user->id === (int) $submission->editor_id;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the submission.
     * Only Admin users can delete submission records.
     */
    public function delete(User $user, Submission $submission): bool
    {
        return $user->role === 'admin';
    }
}
