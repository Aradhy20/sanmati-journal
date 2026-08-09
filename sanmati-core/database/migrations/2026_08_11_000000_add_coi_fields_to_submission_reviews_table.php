<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations for Micro-Sprint 2D.6.
     * Adds Conflict of Interest (COI) fields to submission_reviews table.
     */
    public function up(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->boolean('coi_declared')->default(false)->after('submitted_at');
            $table->text('coi_reason')->nullable()->after('coi_declared');
            $table->timestamp('coi_declared_at')->nullable()->after('coi_reason');
            $table->timestamp('coi_resolved_at')->nullable()->after('coi_declared_at');
            $table->foreignId('coi_resolved_by')->nullable()->after('coi_resolved_at')->constrained('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->dropForeign(['coi_resolved_by']);
            $table->dropColumn([
                'coi_declared',
                'coi_reason',
                'coi_declared_at',
                'coi_resolved_at',
                'coi_resolved_by',
            ]);
        });
    }
};
