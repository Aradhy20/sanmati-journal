<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations for Micro-Sprint 2D.5.
     * Adds evaluation, scoring, recommendation, comments, draft status, and submission timestamp.
     */
    public function up(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->unsignedTinyInteger('originality_score')->nullable()->after('status');
            $table->unsignedTinyInteger('methodology_score')->nullable()->after('originality_score');
            $table->unsignedTinyInteger('relevance_score')->nullable()->after('methodology_score');
            $table->unsignedTinyInteger('clarity_score')->nullable()->after('relevance_score');
            $table->unsignedTinyInteger('overall_score')->nullable()->after('clarity_score');
            $table->string('recommendation', 50)->nullable()->after('overall_score');
            $table->text('reviewer_comments')->nullable()->after('recommendation');
            $table->text('confidential_comments')->nullable()->after('reviewer_comments');
            $table->boolean('is_draft')->default(true)->after('confidential_comments');
            $table->timestamp('submitted_at')->nullable()->after('is_draft');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('submission_reviews', function (Blueprint $table) {
            $table->dropColumn([
                'originality_score',
                'methodology_score',
                'relevance_score',
                'clarity_score',
                'overall_score',
                'recommendation',
                'reviewer_comments',
                'confidential_comments',
                'is_draft',
                'submitted_at',
            ]);
        });
    }
};
