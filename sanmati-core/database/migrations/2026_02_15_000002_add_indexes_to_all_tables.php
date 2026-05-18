<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Add is_featured to papers if it doesn't exist
        if (!Schema::hasColumn('papers', 'is_featured')) {
            Schema::table('papers', function (Blueprint $table) {
                $table->boolean('is_featured')->default(false)->after('category');
            });
        }

        // Add indexes for performance
        Schema::table('news', function (Blueprint $table) {
            $table->index('is_active');
        });

        Schema::table('papers', function (Blueprint $table) {
            $table->index('is_featured');
            $table->index('issue_id');
        });

        Schema::table('team_members', function (Blueprint $table) {
            $table->index('role');
        });

        Schema::table('gallery', function (Blueprint $table) {
            $table->index('category');
        });

        Schema::table('enquiries', function (Blueprint $table) {
            $table->index('status');
            $table->index('email');
        });

        Schema::table('issues', function (Blueprint $table) {
            $table->index('year');
            $table->index('is_current');
        });
    }

    public function down(): void
    {
        Schema::table('papers', function (Blueprint $table) {
            $table->dropIndex(['is_featured']);
            $table->dropIndex(['issue_id']);
            if (Schema::hasColumn('papers', 'is_featured')) {
                $table->dropColumn('is_featured');
            }
        });

        Schema::table('news', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
        });

        Schema::table('team_members', function (Blueprint $table) {
            $table->dropIndex(['role']);
        });

        Schema::table('gallery', function (Blueprint $table) {
            $table->dropIndex(['category']);
        });

        Schema::table('enquiries', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropIndex(['email']);
        });

        Schema::table('issues', function (Blueprint $table) {
            $table->dropIndex(['year']);
            $table->dropIndex(['is_current']);
        });
    }
};
