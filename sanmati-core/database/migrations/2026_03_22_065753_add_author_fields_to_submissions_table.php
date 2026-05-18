<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->string('author_name')->nullable()->after('user_id');
            $table->string('author_email')->nullable()->after('author_name');
            $table->string('author_phone')->nullable()->after('author_email');
            $table->string('institution')->nullable()->after('author_phone');
            $table->string('subject_area')->nullable()->after('institution');
            $table->string('tracking_id')->unique()->nullable()->after('subject_area');
        });
    }

    public function down(): void
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->dropColumn(['author_name', 'author_email', 'author_phone', 'institution', 'subject_area', 'tracking_id']);
        });
    }
};
