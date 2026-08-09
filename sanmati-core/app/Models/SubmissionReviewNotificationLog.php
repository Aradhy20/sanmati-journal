<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmissionReviewNotificationLog extends Model
{
    use HasFactory;

    protected $table = 'submission_review_notification_logs';

    protected $fillable = [
        'review_id',
        'triggered_by',
        'retry_of_id',
        'notification_type',
        'recipient_email',
        'recipient_role',
        'status',
        'error_message',
        'queued_at',
        'sent_at',
        'failed_at',
    ];

    protected $casts = [
        'queued_at' => 'datetime',
        'sent_at'   => 'datetime',
        'failed_at' => 'datetime',
    ];

    public function review()
    {
        return $this->belongsTo(SubmissionReview::class, 'review_id');
    }

    public function triggeredBy()
    {
        return $this->belongsTo(User::class, 'triggered_by');
    }

    public function retryOf()
    {
        return $this->belongsTo(self::class, 'retry_of_id');
    }
}
