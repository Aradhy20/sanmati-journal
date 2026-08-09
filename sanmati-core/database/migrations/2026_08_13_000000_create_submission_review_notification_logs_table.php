<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations for Micro-Sprint 2D.8.
     * Creates submission_review_notification_logs table for immutable audit logs & retry capabilities.
     */
    public function up(): void
    {
        Schema::dropIfExists('submission_review_notification_logs');

        Schema::create('submission_review_notification_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('review_id')->constrained('submission_reviews')->cascadeOnDelete();
            $table->foreignId('triggered_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('retry_of_id')->nullable()->constrained('submission_review_notification_logs')->nullOnDelete();
            $table->string('notification_type'); // invitation, coi_alert, completion_notice, due_reminder
            $table->string('recipient_email');
            $table->string('recipient_role'); // reviewer, editor, admin
            $table->string('status')->default('queued'); // queued, sent, failed
            $table->text('error_message')->nullable();
            $table->timestamp('queued_at')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamp('failed_at')->nullable();
            $table->timestamps();

            $table->index(['review_id', 'notification_type'], 'sr_notif_review_type_idx');
            $table->index(['status'], 'sr_notif_status_idx');
            $table->index(['retry_of_id'], 'sr_notif_retry_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('submission_review_notification_logs');
    }
};
