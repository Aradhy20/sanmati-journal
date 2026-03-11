<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    // Timestamps are enabled by default


    protected $table = 'gallery';

    protected $fillable = [
        'image_url',
        'caption',
        'category',
    ];
}
