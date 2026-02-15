<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paper extends Model
{
    use HasFactory;

    // Timestamps enabled


    protected $fillable = [
        'issue_id',
        'title',
        'authors',
        'abstract',
        'keywords',
        'file_url',
        'doi',
        'citations',
        'category',
        'is_featured',
        'meta_title',
        'meta_description',
    ];

    public function issue()
    {
        return $this->belongsTo(Issue::class);
    }
}
