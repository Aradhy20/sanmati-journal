<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title', 'author', 'image_url', 'isbn', 'description', 'pages', 'is_published', 'amazon_link', 'flipkart_link'
    ];
}
