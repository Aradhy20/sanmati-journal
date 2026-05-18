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

    public function papers()
    {
        return $this->hasMany(Paper::class);
    }
}
