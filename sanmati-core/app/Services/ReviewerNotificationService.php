<?php

namespace App\Services;

use App\Mail\ReviewEvaluationCompletedMail;
use App\Mail\ReviewerCoiDeclaredMail;
use App\Mail\ReviewerDueDateReminderMail;
use App\Mail\ReviewerInvitedMail;
use App\Models\SubmissionReview;
use App\Models\SubmissionReviewNotificationLog;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ReviewerNotificationService
{
    /**
     * Sanitize exception error messages to prevent exposing system paths, keys, or credentials.
     */
    protected function sanitizeErrorMessage(\Throwable $e): string
    {
        $message = $e->getMessage();
        $message = preg_replace('/\/[^\s:]+/', '[sanitized_path]', $message);
        $message = preg_replace('/(password|key|secret|token)=[^&\s]+/i', '$1=[redacted]', $message);
        return substr($message, 0, 500);
    }

    /**
     * Create an immutable audit log record.
     */
    protected function createAuditLog(
        SubmissionReview $review,
        string $type,
        string $email,
        string $role,
        ?int $triggeredBy = null,
        ?int $retryOfId = null
    ): SubmissionReviewNotificationLog {
        return SubmissionReviewNotificationLog::create([
            'review_id'         => $review->id,
            'triggered_by'      => $triggeredBy ?? Auth::id(),
            'retry_of_id'       => $retryOfId,
            'notification_type' => $type,
            'recipient_email'   => $email,
            'recipient_role'    => $role,
            'status'            => 'queued',
            'queued_at'         => now(),
        ]);
    }

    /**
     * Send invitation email to assigned reviewer (Double-Blind Safe).
     */
    public function sendInvitationNotification(SubmissionReview $review, ?int $triggeredBy = null, ?int $retryOfId = null): bool
    {
        $review->loadMissing(['reviewer', 'submission']);

        $reviewer = $review->reviewer;
        $submission = $review->submission;

        if (! $reviewer || ! $submission || ! $reviewer->email) {
            return false;
        }

        $log = $this->createAuditLog($review, 'invitation', $reviewer->email, 'reviewer', $triggeredBy, $retryOfId);

        try {
            $reviewerName = $reviewer->name ?? 'Reviewer';
            $trackingId   = (string) ($submission->tracking_id ?? 'N/A');
            $paperTitle   = (string) ($submission->title ?? 'Untitled Manuscript');
            $articleType  = (string) ($submission->article_type ?? 'Research Paper');
            $subjectArea  = (string) ($submission->subject_area ?? 'General');
            $dueAt        = $review->due_at ? $review->due_at->format('d M Y') : 'Not specified';
            $portalUrl    = route('reviewer.reviews.show', ['review' => $review->id]);

            Mail::to($reviewer->email)->send(new ReviewerInvitedMail(
                reviewerName: $reviewerName,
                trackingId: $trackingId,
                paperTitle: $paperTitle,
                articleType: $articleType,
                subjectArea: $subjectArea,
                dueAt: $dueAt,
                portalUrl: $portalUrl
            ));

            $log->update([
                'status'  => 'sent',
                'sent_at' => now(),
            ]);

            return true;
        } catch (\Throwable $e) {
            $log->update([
                'status'        => 'failed',
                'failed_at'     => now(),
                'error_message' => $this->sanitizeErrorMessage($e),
            ]);

            return false;
        }
    }

    /**
     * Send COI declared alert to assigned editor and administrators.
     */
    public function sendCoiDeclaredNotification(SubmissionReview $review, ?int $triggeredBy = null, ?int $retryOfId = null): bool
    {
        $review->loadMissing(['reviewer', 'submission', 'submission.editor']);

        $reviewer   = $review->reviewer;
        $submission = $review->submission;

        if (! $reviewer || ! $submission) {
            return false;
        }

        $editor = $submission->editor;
        $trackingId = (string) ($submission->tracking_id ?? 'N/A');
        $paperTitle = (string) ($submission->title ?? 'Untitled Manuscript');
        $coiReason  = (string) ($review->coi_reason ?? 'No reason specified');
        $declaredAt = $review->coi_declared_at ? $review->coi_declared_at->format('d M Y, h:i A') : now()->format('d M Y, h:i A');
        $editorUrl  = route('editor.submissions.show', ['submission' => $submission->id]);

        $success = false;

        // Send to Assigned Editor
        if ($editor && $editor->email) {
            $log = $this->createAuditLog($review, 'coi_alert', $editor->email, 'editor', $triggeredBy, $retryOfId);
            try {
                Mail::to($editor->email)->send(new ReviewerCoiDeclaredMail(
                    editorName: $editor->name ?? 'Editor',
                    reviewerName: $reviewer->name ?? 'Reviewer',
                    trackingId: $trackingId,
                    paperTitle: $paperTitle,
                    coiReason: $coiReason,
                    declaredAt: $declaredAt,
                    editorUrl: $editorUrl
                ));
                $log->update(['status' => 'sent', 'sent_at' => now()]);
                $success = true;
            } catch (\Throwable $e) {
                $log->update(['status' => 'failed', 'failed_at' => now(), 'error_message' => $this->sanitizeErrorMessage($e)]);
            }
        }

        // Also notify Administrators
        $admins = User::where('role', 'admin')->whereNotNull('email')->get();
        foreach ($admins as $admin) {
            if (! $editor || (int) $admin->id !== (int) $editor->id) {
                $log = $this->createAuditLog($review, 'coi_alert', $admin->email, 'admin', $triggeredBy, $retryOfId);
                try {
                    Mail::to($admin->email)->send(new ReviewerCoiDeclaredMail(
                        editorName: $admin->name ?? 'Administrator',
                        reviewerName: $reviewer->name ?? 'Reviewer',
                        trackingId: $trackingId,
                        paperTitle: $paperTitle,
                        coiReason: $coiReason,
                        declaredAt: $declaredAt,
                        editorUrl: $editorUrl
                    ));
                    $log->update(['status' => 'sent', 'sent_at' => now()]);
                    $success = true;
                } catch (\Throwable $e) {
                    $log->update(['status' => 'failed', 'failed_at' => now(), 'error_message' => $this->sanitizeErrorMessage($e)]);
                }
            }
        }

        return $success;
    }

    /**
     * Send evaluation completion email to assigned editor and administrators.
     */
    public function sendCompletionNotification(SubmissionReview $review, ?int $triggeredBy = null, ?int $retryOfId = null): bool
    {
        $review->loadMissing(['reviewer', 'submission', 'submission.editor']);

        $reviewer   = $review->reviewer;
        $submission = $review->submission;

        if (! $reviewer || ! $submission) {
            return false;
        }

        $editor = $submission->editor;
        $trackingId     = (string) ($submission->tracking_id ?? 'N/A');
        $paperTitle     = (string) ($submission->title ?? 'Untitled Manuscript');
        $recommendation = (string) ($review->recommendation ?? 'N/A');
        $completedAt    = $review->completed_at ? $review->completed_at->format('d M Y, h:i A') : now()->format('d M Y, h:i A');
        $editorUrl      = route('editor.reviews.evaluation', ['review' => $review->id]);

        $success = false;

        if ($editor && $editor->email) {
            $log = $this->createAuditLog($review, 'completion_notice', $editor->email, 'editor', $triggeredBy, $retryOfId);
            try {
                Mail::to($editor->email)->send(new ReviewEvaluationCompletedMail(
                    editorName: $editor->name ?? 'Editor',
                    reviewerName: $reviewer->name ?? 'Reviewer',
                    trackingId: $trackingId,
                    paperTitle: $paperTitle,
                    recommendation: $recommendation,
                    completedAt: $completedAt,
                    editorUrl: $editorUrl
                ));
                $log->update(['status' => 'sent', 'sent_at' => now()]);
                $success = true;
            } catch (\Throwable $e) {
                $log->update(['status' => 'failed', 'failed_at' => now(), 'error_message' => $this->sanitizeErrorMessage($e)]);
            }
        }

        $admins = User::where('role', 'admin')->whereNotNull('email')->get();
        foreach ($admins as $admin) {
            if (! $editor || (int) $admin->id !== (int) $editor->id) {
                $log = $this->createAuditLog($review, 'completion_notice', $admin->email, 'admin', $triggeredBy, $retryOfId);
                try {
                    Mail::to($admin->email)->send(new ReviewEvaluationCompletedMail(
                        editorName: $admin->name ?? 'Administrator',
                        reviewerName: $reviewer->name ?? 'Reviewer',
                        trackingId: $trackingId,
                        paperTitle: $paperTitle,
                        recommendation: $recommendation,
                        completedAt: $completedAt,
                        editorUrl: $editorUrl
                    ));
                    $log->update(['status' => 'sent', 'sent_at' => now()]);
                    $success = true;
                } catch (\Throwable $e) {
                    $log->update(['status' => 'failed', 'failed_at' => now(), 'error_message' => $this->sanitizeErrorMessage($e)]);
                }
            }
        }

        return $success;
    }

    /**
     * Send due date reminder email to assigned reviewer (Double-Blind Safe).
     */
    public function sendDueDateReminderNotification(SubmissionReview $review, ?int $triggeredBy = null, ?int $retryOfId = null): bool
    {
        $review->loadMissing(['reviewer', 'submission']);

        $reviewer   = $review->reviewer;
        $submission = $review->submission;

        if (! $reviewer || ! $submission || ! $reviewer->email) {
            return false;
        }

        $log = $this->createAuditLog($review, 'due_reminder', $reviewer->email, 'reviewer', $triggeredBy, $retryOfId);

        try {
            $reviewerName = $reviewer->name ?? 'Reviewer';
            $trackingId   = (string) ($submission->tracking_id ?? 'N/A');
            $paperTitle   = (string) ($submission->title ?? 'Untitled Manuscript');
            $dueAt        = $review->due_at ? $review->due_at->format('d M Y') : 'Not specified';
            $portalUrl    = route('reviewer.reviews.show', ['review' => $review->id]);

            Mail::to($reviewer->email)->send(new ReviewerDueDateReminderMail(
                reviewerName: $reviewerName,
                trackingId: $trackingId,
                paperTitle: $paperTitle,
                dueAt: $dueAt,
                portalUrl: $portalUrl
            ));

            $log->update([
                'status'  => 'sent',
                'sent_at' => now(),
            ]);

            return true;
        } catch (\Throwable $e) {
            $log->update([
                'status'        => 'failed',
                'failed_at'     => now(),
                'error_message' => $this->sanitizeErrorMessage($e),
            ]);

            return false;
        }
    }

    /**
     * Safely retry a failed notification audit log record.
     * Original failed log is NEVER modified. A NEW log record is created with retry_of_id.
     */
    public function retryNotification(SubmissionReview $review, SubmissionReviewNotificationLog $log, int $triggeredBy): bool
    {
        if ((int) $log->review_id !== (int) $review->id) {
            return false;
        }

        if ($log->status !== 'failed') {
            return false;
        }

        return match ($log->notification_type) {
            'invitation'        => $this->sendInvitationNotification($review, $triggeredBy, $log->id),
            'coi_alert'         => $this->sendCoiDeclaredNotification($review, $triggeredBy, $log->id),
            'completion_notice' => $this->sendCompletionNotification($review, $triggeredBy, $log->id),
            'due_reminder'      => $this->sendDueDateReminderNotification($review, $triggeredBy, $log->id),
            default             => false,
        };
    }
}
