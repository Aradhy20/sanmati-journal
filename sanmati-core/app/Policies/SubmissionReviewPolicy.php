<?php

namespace App\Policies;

use App\Models\SubmissionReview;
use App\Models\User;

class SubmissionReviewPolicy
{
    /**
     * Determine whether the user can view the review assignment.
     */
    public function view(User $user, SubmissionReview $review): bool
    {
        // Admin can view any review assignment
        if ($user->role === 'admin') {
            return true;
        }

        // Reviewer can view ONLY their own review assignment
        if ((int) $user->id === (int) $review->reviewer_id) {
            return true;
        }

        // Assigned Editor on the submission can view the review assignment
        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can update the review assignment.
     */
    public function update(User $user, SubmissionReview $review): bool
    {
        // Admin can update
        if ($user->role === 'admin') {
            return true;
        }

        // Assigned Editor on the submission can manage/update review assignments
        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        // Assigned Reviewer can update status on their own assignment
        if ((int) $user->id === (int) $review->reviewer_id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can download the manuscript associated with a review assignment.
     * Enforces strict Reviewer Ownership isolation.
     */
    public function downloadManuscript(User $user, SubmissionReview $review): bool
    {
        // Admin can access manuscript files via policy
        if ($user->role === 'admin') {
            return true;
        }

        // Reviewer who owns this review assignment can access the manuscript
        if ($user->role === 'reviewer' && (int) $review->reviewer_id === (int) $user->id) {
            return true;
        }

        // DENY for Editors through the reviewer endpoint, Authors, unrelated Reviewers, and Guests
        return false;
    }

    /**
     * Determine whether the user can view the review evaluation page/payload.
     */
    public function viewEvaluation(User $user, SubmissionReview $review): bool
    {
        // Admin can view evaluation
        if ($user->role === 'admin') {
            return true;
        }

        // Reviewer owner can view own evaluation
        if ($user->role === 'reviewer' && (int) $review->reviewer_id === (int) $user->id) {
            return true;
        }

        // Assigned Editor on submission can view evaluation
        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        // Deny Authors, Unrelated Reviewers, Unrelated Editors, Guests
        return false;
    }

    /**
     * Determine whether the reviewer can save a draft evaluation.
     */
    public function saveDraft(User $user, SubmissionReview $review): bool
    {
        // Reviewer owner ONLY, provided the review is still a draft and not finalized
        return $user->role === 'reviewer' &&
               (int) $review->reviewer_id === (int) $user->id &&
               $review->is_draft === true &&
               $review->submitted_at === null;
    }

    /**
     * Determine whether the reviewer can finalize and submit the evaluation.
     */
    public function submitEvaluation(User $user, SubmissionReview $review): bool
    {
        // Reviewer owner ONLY, provided the review is still a draft and not finalized
        return $user->role === 'reviewer' &&
               (int) $review->reviewer_id === (int) $user->id &&
               $review->is_draft === true &&
               $review->submitted_at === null;
    }

    /**
     * Determine whether the user can read confidential editor comments.
     */
    public function viewConfidentialComments(User $user, SubmissionReview $review): bool
    {
        // Admin can view confidential editor comments
        if ($user->role === 'admin') {
            return true;
        }

        // Assigned Editor can view confidential editor comments
        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        // DENY Reviewer (even owner), Author, Unrelated Editor, Guest
        return false;
    }

    /**
     * Determine whether the user can view the review lifecycle.
     */
    public function viewLifecycle(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ((int) $user->id === (int) $review->reviewer_id) {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the reviewer owner can accept the review invitation.
     */
    public function acceptInvitation(User $user, SubmissionReview $review): bool
    {
        // Reviewer owner ONLY (Admin cannot impersonate reviewer acceptance)
        return $user->role === 'reviewer' &&
               (int) $user->id === (int) $review->reviewer_id;
    }

    /**
     * Determine whether the reviewer owner can decline the review invitation.
     */
    public function declineInvitation(User $user, SubmissionReview $review): bool
    {
        // Reviewer owner ONLY (Admin cannot impersonate reviewer decline)
        return $user->role === 'reviewer' &&
               (int) $user->id === (int) $review->reviewer_id;
    }

    /**
     * Determine whether the reviewer owner can declare a Conflict of Interest.
     */
    public function declareConflict(User $user, SubmissionReview $review): bool
    {
        // Reviewer owner ONLY (Admin cannot impersonate reviewer COI declaration)
        return $user->role === 'reviewer' &&
               (int) $user->id === (int) $review->reviewer_id;
    }

    /**
     * Determine whether the user can view COI details.
     */
    public function viewConflict(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'reviewer' && (int) $user->id === (int) $review->reviewer_id) {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can resolve a declared COI.
     */
    public function resolveConflict(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can update the review due date.
     */
    public function updateDueDate(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can cancel a review assignment.
     */
    public function cancelReview(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can send a due date reminder.
     */
    public function sendReminder(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can view notification logs.
     */
    public function viewNotificationLogs(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the assigned editor or admin can retry a failed notification.
     */
    public function retryNotification(User $user, SubmissionReview $review): bool
    {
        if ($user->role === 'admin') {
            return true;
        }

        if ($user->role === 'editor' && $review->submission && (int) $review->submission->editor_id === (int) $user->id) {
            return true;
        }

        return false;
    }
}
