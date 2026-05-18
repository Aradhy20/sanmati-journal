<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    // Timestamps enabled


    protected $fillable = [
        'content',
        'link_url',
        'type',
        'is_active',
        'meta_title',
        'meta_description',
        'keywords',
    ];
}
