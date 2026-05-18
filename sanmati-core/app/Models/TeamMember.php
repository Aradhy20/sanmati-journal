<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    // Timestamps enabled


    protected $fillable = [
        'name',
        'role',
        'bio',
        'qualifications',
        'experience',
        'photo_url',
        'display_order',
    ];
}
