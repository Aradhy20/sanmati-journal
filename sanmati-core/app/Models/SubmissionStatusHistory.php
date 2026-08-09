<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmissionStatusHistory extends Model
{
    use HasFactory;

    protected $table = 'submission_status_histories';

    protected $fillable = [
        'submission_id',
        'from_status',
        'to_status',
        'changed_by',
        'note',
    ];

    /**
     * Get the submission that owns the status history entry.
     */
    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submission_id');
    }

    /**
     * Get the user who performed the status change.
     */
    public function changedBy()
    {
        return $this->belongsTo(User::class, 'changed_by');
    }
}
