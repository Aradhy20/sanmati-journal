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
        'slug',
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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($paper) {
            if (empty($paper->slug)) {
                $paper->slug = static::generateUniqueSlug($paper->title);
            }
        });
    }

    public static function generateUniqueSlug($title)
    {
        $slug = \Illuminate\Support\Str::slug($title);
        
        // Handle non-latin characters (like Hindi) or fallback to random string if slug is empty
        if (empty($slug)) {
            $slug = 'paper-' . strtolower(\Illuminate\Support\Str::random(8));
        }

        $originalSlug = $slug;
        $count = 1;

        while (static::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    public function issue()
    {
        return $this->belongsTo(Issue::class);
    }
}
