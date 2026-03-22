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
        Schema::table('papers', function (Blueprint $table) {
            $table->fullText(['title', 'abstract', 'authors'], 'ft_papers_search');
        });

        Schema::table('books', function (Blueprint $table) {
            $table->fullText(['title', 'author'], 'ft_books_search');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('papers', function (Blueprint $table) {
            $table->dropFullText('ft_papers_search');
        });

        Schema::table('books', function (Blueprint $table) {
            $table->dropFullText('ft_books_search');
        });
    }
};
