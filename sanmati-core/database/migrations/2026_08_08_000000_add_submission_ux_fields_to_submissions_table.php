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
        Schema::table('submissions', function (Blueprint $table) {
            $table->string('country')->nullable()->after('institution');
            $table->string('article_type')->nullable()->after('subject_area');
            $table->json('authors_json')->nullable()->after('article_type');
            $table->string('supplementary_file_path')->nullable()->after('file_path');
            $table->json('ai_precheck_results')->nullable()->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->dropColumn([
                'country',
                'article_type',
                'authors_json',
                'supplementary_file_path',
                'ai_precheck_results',
            ]);
        });
    }
};
