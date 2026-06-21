<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Permanent, version-controlled fix for the author name data issues.
     * This replaces the fragile one-time flag mechanism in public_html/index.php
     * and the removed /clear-cache and /fix-vol2-issue2-date routes.
     */
    public function up(): void
    {
        // Fix 1: Correct misspelled author name (सिचन → सचिन)
        // Targets: paper about डिजिटल मीडिया, authored by सचिन कुमार & डॉ. एस. पद्मप्रिया
        DB::table('papers')
            ->where('authors', 'like', '%सिचन कुमार%')
            ->update(['authors' => 'सचिन कुमार & डॉ. एस. पद्मप्रिया']);

        // Fix 2: Fix issue date — Vol 2, Issue 2 should be April–June
        DB::table('issues')
            ->where('volume', '2')
            ->where('number', '2')
            ->where('month_range', '!=', 'April – June')
            ->update(['month_range' => 'April – June']);

        // Fix 3: Remove any stray "Complete Issue Book" compilation paper
        // (was erroneously added and caused paper count to exceed 80)
        $paperCount = DB::table('papers')->count();
        if ($paperCount > 80) {
            DB::table('papers')
                ->where('category', 'Complete Issue Book')
                ->delete();
        }
    }

    /**
     * Reverse the migrations.
     *
     * Note: Author name corrections are one-way only — no rollback needed.
     */
    public function down(): void
    {
        // Nothing to reverse — this is a data quality fix
    }
};
