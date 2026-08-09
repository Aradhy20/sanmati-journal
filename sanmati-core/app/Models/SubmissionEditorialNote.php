<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubmissionEditorialNote extends Model
{
    protected $fillable = [
        'submission_id',
        'editor_id',
        'note',
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submission_id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id');
    }
}
