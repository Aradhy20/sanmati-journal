<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    protected $fillable = [
        'user_id', 'author_name', 'author_email', 'author_phone', 'institution',
        'country', 'subject_area', 'article_type', 'authors_json', 'tracking_id',
        'title', 'abstract', 'keywords', 'file_path', 'supplementary_file_path',
        'status', 'ai_precheck_results', 'reviewer_id', 'editor_id',
    ];

    protected $casts = [
        'authors_json' => 'array',
        'ai_precheck_results' => 'array',
    ];


    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    public function statusHistories()
    {
        return $this->hasMany(SubmissionStatusHistory::class, 'submission_id')->orderBy('created_at', 'asc');
    }

    public function editorialNotes()
    {
        return $this->hasMany(SubmissionEditorialNote::class, 'submission_id')->orderBy('created_at', 'desc');
    }

    public function reviews()
    {
        return $this->hasMany(SubmissionReview::class, 'submission_id');
    }
}
