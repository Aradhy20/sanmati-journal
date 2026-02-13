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
            if (!Schema::hasColumn('papers', 'meta_title')) {
                $table->string('meta_title')->nullable();
            }
            if (!Schema::hasColumn('papers', 'meta_description')) {
                $table->text('meta_description')->nullable();
            }
            if (!Schema::hasColumn('papers', 'seo_keywords')) {
                $table->string('seo_keywords')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('papers', function (Blueprint $table) {
            $table->dropColumn(['meta_title', 'meta_description', 'seo_keywords']);
        });
    }
};
