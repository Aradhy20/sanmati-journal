<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations for Micro-Sprint 2D.7.
     * Adds notification audit fields to submission_reviews table.
     */
    public function up(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->timestamp('reminder_sent_at')->nullable()->after('coi_resolved_by');
            $table->unsignedInteger('reminder_count')->default(0)->after('reminder_sent_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->dropColumn([
                'reminder_sent_at',
                'reminder_count',
            ]);
        });
    }
};
