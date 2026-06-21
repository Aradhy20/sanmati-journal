<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Permanent fix to correct the author name to "सिंचन कुमार" (Sinchan Kumar)
     * Replaces both the original "सिचन" and the previously migrated "सचिन"
     */
    public function up(): void
    {
        // Update from original "सिचन"
        DB::table('papers')
            ->where('authors', 'like', '%सिचन कुमार%')
            ->update(['authors' => 'सिंचन कुमार & डॉ. एस. पद्मप्रिया']);

        // Update from previous migration attempt "सचिन"
        DB::table('papers')
            ->where('authors', 'like', '%सचिन कुमार%')
            ->update(['authors' => 'सिंचन कुमार & डॉ. एस. पद्मप्रिया']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // One-way data fix
    }
};
