<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    // Timestamps are enabled by default


    protected $fillable = [
        'volume',
        'number',
        'year',
        'month_range',
        'status',
        'is_current',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saved(function () {
            \Illuminate\Support\Facades\Cache::forget('archive_issues_list');
        });

        static::deleted(function () {
            \Illuminate\Support\Facades\Cache::forget('archive_issues_list');
        });
    }

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }
}
