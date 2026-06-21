<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Permanent fix to correct the author name to "सचिन कुमार" (Sachin Kumar)
     * Replaces any previous variants: "सिचन" or "सिंचन"
     */
    public function up(): void
    {
        // Update from original "सिचन"
        DB::table('papers')
            ->where('authors', 'like', '%सिचन कुमार%')
            ->update(['authors' => 'सचिन कुमार & डॉ. एस. पद्मप्रिया']);

        // Update from my previous incorrect fix "सिंचन"
        DB::table('papers')
            ->where('authors', 'like', '%सिंचन कुमार%')
            ->update(['authors' => 'सचिन कुमार & डॉ. एस. पद्मप्रिया']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // One-way data fix
    }
};
