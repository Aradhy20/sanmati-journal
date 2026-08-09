<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmissionReview extends Model
{
    use HasFactory;

    protected $table = 'submission_reviews';

    protected $fillable = [
        'submission_id',
        'reviewer_id',
        'status',
        'originality_score',
        'methodology_score',
        'relevance_score',
        'clarity_score',
        'overall_score',
        'recommendation',
        'reviewer_comments',
        'confidential_comments',
        'is_draft',
        'invited_at',
        'accepted_at',
        'declined_at',
        'due_at',
        'completed_at',
        'submitted_at',
        'coi_declared',
        'coi_reason',
        'coi_declared_at',
        'coi_resolved_at',
        'coi_resolved_by',
    ];

    protected $casts = [
        'is_draft'        => 'boolean',
        'coi_declared'    => 'boolean',
        'invited_at'      => 'datetime',
        'accepted_at'     => 'datetime',
        'declined_at'     => 'datetime',
        'due_at'          => 'datetime',
        'completed_at'    => 'datetime',
        'submitted_at'    => 'datetime',
        'coi_declared_at' => 'datetime',
        'coi_resolved_at' => 'datetime',
        'reminder_sent_at' => 'datetime',
        'reminder_count'   => 'integer',
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submission_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    public function coiResolver()
    {
        return $this->belongsTo(User::class, 'coi_resolved_by');
    }

    public function notificationLogs()
    {
        return $this->hasMany(SubmissionReviewNotificationLog::class, 'review_id');
    }

    /**
     * Scope query to candidate reviews eligible for due date reminders.
     */
    public function scopeEligibleForReminder($query)
    {
        return $query->where('status', 'accepted')
            ->whereNotNull('due_at')
            ->where(function ($q) {
                $q->whereNull('reminder_sent_at')
                  ->orWhere('reminder_sent_at', '<=', now()->subHours(24));
            });
    }

    /**
     * Scope query to overdue reviews (accepted status, due_at in past, completed_at null).
     */
    public function scopeOverdue($query)
    {
        return $query->where('status', 'accepted')
            ->whereNotNull('due_at')
            ->where('due_at', '<', now())
            ->whereNull('completed_at');
    }

    /**
     * Accessor to determine if the review is overdue.
     */
    public function getIsOverdueAttribute(): bool
    {
        return $this->status === 'accepted'
            && $this->due_at !== null
            && $this->due_at->isPast()
            && $this->completed_at === null;
    }

    /**
     * Accessor to calculate days overdue. Returns 0 if not overdue.
     */
    public function getDaysOverdueAttribute(): int
    {
        if (! $this->is_overdue || ! $this->due_at) {
            return 0;
        }

        return (int) max(1, (int) $this->due_at->diffInDays(now()));
    }
}
