<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    protected $fillable = [
        'user_id', 'title', 'abstract', 'keywords', 'file_path', 'status', 'reviewer_id'
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }
}
