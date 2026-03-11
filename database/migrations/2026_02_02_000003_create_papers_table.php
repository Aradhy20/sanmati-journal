<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('papers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('issue_id')->constrained('issues')->onDelete('cascade');
            $table->text('title');
            $table->text('authors');
            $table->text('abstract')->nullable();
            $table->text('keywords')->nullable();
            $table->text('file_url')->nullable();
            $table->string('doi', 100)->nullable();
            $table->integer('citations')->default(0);
            $table->string('category', 100)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('papers');
    }
};
