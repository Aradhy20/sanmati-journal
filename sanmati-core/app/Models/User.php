<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'password',
        'full_name',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function submissions()
    {
        return $this->hasMany(Submission::class, 'user_id');
    }

    public function assignedSubmissions()
    {
        return $this->hasMany(Submission::class, 'editor_id');
    }

    public function assignedReviews()
    {
        return $this->hasMany(SubmissionReview::class, 'reviewer_id');
    }
}

