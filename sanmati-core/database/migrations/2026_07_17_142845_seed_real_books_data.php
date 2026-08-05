<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Truncate existing books table and re-seed using the updated JournalService
        \App\Models\Book::truncate();
        (new \App\Services\JournalService())->getPublishedBooks();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        \App\Models\Book::truncate();
    }
};
