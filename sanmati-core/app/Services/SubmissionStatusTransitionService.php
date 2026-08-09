<?php

namespace App\Services;

use App\Exceptions\InvalidStatusTransitionException;
use App\Models\Submission;
use App\Models\SubmissionStatusHistory;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class SubmissionStatusTransitionService
{
    /**
     * Approved Editorial State Machine Transition Matrix
     */
    protected array $allowedTransitions = [
        'submitted' => [
            'under_editorial_screening',
            'rejected',
        ],
        'under_editorial_screening' => [
            'under_review',
            'rejected',
        ],
        'under_review' => [
            'revisions_requested',
            'accepted',
            'rejected',
        ],
        'revisions_requested' => [
            // Blocked in Phase 2C.4 until Phase 2E author resubmission workflow
        ],
        'accepted' => [
            // Terminal in Phase 2C (extensible for Phase 2G 'published')
        ],
        'rejected' => [
            // Terminal
        ],
    ];

    /**
     * Get allowed next statuses for a given current status.
     */
    public function getAllowedNextStatuses(string $currentStatus): array
    {
        return $this->allowedTransitions[$currentStatus] ?? [];
    }

    /**
     * Check if a transition from current status to target status is valid.
     */
    public function isValidTransition(string $currentStatus, string $targetStatus): bool
    {
        $allowed = $this->getAllowedNextStatuses($currentStatus);
        return in_array($targetStatus, $allowed, true);
    }

    /**
     * Execute an atomic status transition for a submission.
     *
     * @throws InvalidStatusTransitionException
     */
    public function transition(Submission $submission, string $targetStatus, User $user, ?string $note = null): Submission
    {
        $currentStatus = $submission->status;

        // 1. Validate state machine transition graph
        if (! $this->isValidTransition($currentStatus, $targetStatus)) {
            throw new InvalidStatusTransitionException($currentStatus, $targetStatus);
        }

        // 2. Execute atomic DB transaction
        return DB::transaction(function () use ($submission, $currentStatus, $targetStatus, $user, $note) {
            // Lock submission row for update to prevent concurrent status race conditions
            $sub = Submission::where('id', $submission->id)->lockForUpdate()->firstOrFail();

            // Re-check current status under row lock
            if ($sub->status !== $currentStatus) {
                throw new InvalidStatusTransitionException($sub->status, $targetStatus, "Concurrent status modification detected.");
            }

            // Update submission status
            $sub->update([
                'status' => $targetStatus,
            ]);

            // Log truthful status history record
            SubmissionStatusHistory::create([
                'submission_id' => $sub->id,
                'from_status'   => $currentStatus,
                'to_status'     => $targetStatus,
                'changed_by'    => $user->id,
                'note'          => $note ? trim($note) : "Status updated to '{$targetStatus}' by {$user->full_name}.",
            ]);

            return $sub->refresh();
        });
    }
}
