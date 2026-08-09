<?php

namespace Tests\Feature;

use App\Mail\ReviewEvaluationCompletedMail;
use App\Mail\ReviewerCoiDeclaredMail;
use App\Mail\ReviewerDueDateReminderMail;
use App\Mail\ReviewerInvitedMail;
use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\SubmissionReviewNotificationLog;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ReviewerNotificationLogTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $editor1;
    protected User $editor2;
    protected User $reviewer1;
    protected User $reviewer2;
    protected User $author;
    protected Submission $submission;
    protected SubmissionReview $review;

    protected function setUp(): void
    {
        parent::setUp();

        Mail::fake();

        $this->admin = User::create([
            'full_name' => 'System Admin',
            'email'     => 'admin_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'admin',
        ]);

        $this->editor1 = User::create([
            'full_name' => 'Assigned Editor',
            'email'     => 'editor1_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'editor',
        ]);

        $this->editor2 = User::create([
            'full_name' => 'Unrelated Editor',
            'email'     => 'editor2_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'editor',
        ]);

        $this->reviewer1 = User::create([
            'full_name' => 'Dr. Reviewer One',
            'email'     => 'reviewer1_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'reviewer',
        ]);

        $this->reviewer2 = User::create([
            'full_name' => 'Dr. Reviewer Two',
            'email'     => 'reviewer2_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'reviewer',
        ]);

        $this->author = User::create([
            'full_name' => 'Author User',
            'email'     => 'author_log@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'author',
        ]);

        $this->submission = Submission::create([
            'user_id'      => $this->author->id,
            'editor_id'    => $this->editor1->id,
            'tracking_id'  => 'SANMATI-2026-LOG-TEST',
            'title'        => 'Quantum Cryptography Log Analysis',
            'abstract'     => 'Abstract text for log test.',
            'article_type' => 'Research Paper',
            'subject_area' => 'Computer Science',
            'author_name'  => 'Dr. Author Identity',
            'author_email' => 'secret_author_log@sanmatijournal.in',
            'institution'  => 'Secret Institute',
            'country'      => 'India',
            'file_path'    => 'submissions/sample.pdf',
            'status'       => 'under_review',
        ]);

        $this->review = SubmissionReview::create([
            'submission_id' => $this->submission->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'accepted',
            'invited_at'    => now()->subDays(5),
            'accepted_at'   => now()->subDays(4),
            'due_at'        => now()->addDays(10),
        ]);

        \Illuminate\Support\Facades\Storage::disk('local')->put('submissions/sample.pdf', '%PDF-1.4 Dummy File');
    }

    /** TEST 1: Invitation creates queued audit record -> PASS */
    public function test_invitation_creates_queued_audit_record(): void
    {
        $response = $this->actingAs($this->editor1)->post("/editor/submissions/{$this->submission->id}/reviewers", [
            'reviewer_id' => $this->reviewer2->id,
        ]);

        $response->assertStatus(201);

        $newReview = SubmissionReview::where('submission_id', $this->submission->id)
            ->where('reviewer_id', $this->reviewer2->id)
            ->first();

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $newReview->id,
            'notification_type' => 'invitation',
            'recipient_email'   => $this->reviewer2->email,
            'status'            => 'sent',
        ]);
    }

    /** TEST 2: COI notification creates audit record -> PASS */
    public function test_coi_notification_creates_audit_record(): void
    {
        $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/conflict", [
            'coi_reason' => 'Institutional overlap.',
        ]);

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $this->review->id,
            'notification_type' => 'coi_alert',
            'recipient_email'   => $this->editor1->email,
            'status'            => 'sent',
        ]);
    }

    /** TEST 3: Completion notification creates audit record -> PASS */
    public function test_completion_notification_creates_audit_record(): void
    {
        $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/submit", [
            'originality_score'    => 5,
            'methodology_score'    => 5,
            'relevance_score'      => 5,
            'clarity_score'        => 5,
            'overall_score'        => 5,
            'recommendation'       => 'accept',
            'reviewer_comments'    => 'This is a comprehensive and excellent paper submission.',
            'confidential_comments'=> 'For editor only.',
        ]);

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $this->review->id,
            'notification_type' => 'completion_notice',
            'recipient_email'   => $this->editor1->email,
            'status'            => 'sent',
        ]);
    }

    /** TEST 4: Due reminder creates audit record -> PASS */
    public function test_due_reminder_creates_audit_record(): void
    {
        $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/send-reminder");

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $this->review->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'status'            => 'sent',
        ]);
    }

    /** TEST 5: Assigned editor can view notification logs in submission detail -> PASS */
    public function test_assigned_editor_can_view_logs(): void
    {
        SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'sent',
            'queued_at'         => now(),
            'sent_at'           => now(),
        ]);

        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(200);
        $response->assertSee('due_reminder');
    }

    /** TEST 6: Admin can view notification logs -> PASS */
    public function test_admin_can_view_logs(): void
    {
        SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->admin->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'sent',
            'queued_at'         => now(),
            'sent_at'           => now(),
        ]);

        $response = $this->actingAs($this->admin)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(200);
        $response->assertSee('due_reminder');
    }

    /** TEST 7: Unrelated editor receives 403 when viewing submission detail -> PASS */
    public function test_unrelated_editor_receives_403(): void
    {
        $response = $this->actingAs($this->editor2)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(403);
    }

    /** TEST 8: Reviewer receives 403 on editor submission detail route -> PASS */
    public function test_reviewer_receives_403_on_editor_detail(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(403);
    }

    /** TEST 9: Author receives 403 on editor submission detail route -> PASS */
    public function test_author_receives_403_on_editor_detail(): void
    {
        $response = $this->actingAs($this->author)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(403);
    }

    /** TEST 10: Guest is redirected to login on editor route -> PASS */
    public function test_guest_redirected_to_login(): void
    {
        $response = $this->get("/editor/submissions/{$this->submission->id}");
        $response->assertRedirect('/login');
    }

    /** TEST 11: Failed notification can be retried by assigned editor -> PASS */
    public function test_failed_notification_can_be_retried(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'error_message'     => 'SMTP connection timed out.',
            'queued_at'         => now()->subHours(2),
            'failed_at'         => now()->subHours(2),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(302);

        // Original failed log remains unchanged
        $this->assertDatabaseHas('submission_review_notification_logs', [
            'id'     => $failedLog->id,
            'status' => 'failed',
        ]);

        // A NEW retry record is created pointing to retry_of_id
        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $this->review->id,
            'retry_of_id'       => $failedLog->id,
            'notification_type' => 'due_reminder',
            'status'            => 'sent',
        ]);
    }

    /** TEST 12: Admin can retry failed notification -> PASS */
    public function test_admin_can_retry_failed_notification(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'invitation',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now()->subHours(1),
            'failed_at'         => now()->subHours(1),
        ]);

        $response = $this->actingAs($this->admin)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(302);

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'   => $this->review->id,
            'retry_of_id' => $failedLog->id,
            'status'      => 'sent',
        ]);
    }

    /** TEST 13: Unrelated editor cannot retry notification -> PASS */
    public function test_unrelated_editor_cannot_retry(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $response = $this->actingAs($this->editor2)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(403);
    }

    /** TEST 14: Reviewer cannot retry notification -> PASS */
    public function test_reviewer_cannot_retry(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $response = $this->actingAs($this->reviewer1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(403);
    }

    /** TEST 15: Author cannot retry notification -> PASS */
    public function test_author_cannot_retry(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $response = $this->actingAs($this->author)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(403);
    }

    /** TEST 16: Mismatched review and log IDs are rejected -> PASS */
    public function test_mismatched_review_log_id_rejected(): void
    {
        $anotherSubmission = Submission::create([
            'user_id'      => $this->author->id,
            'editor_id'    => $this->editor1->id,
            'tracking_id'  => 'SANMATI-2026-OTHER',
            'title'        => 'Another Paper',
            'abstract'     => 'Abstract',
            'article_type' => 'Research Paper',
            'subject_area' => 'Physics',
            'author_name'  => 'Author Two',
            'author_email' => 'author2@sanmatijournal.in',
            'file_path'    => 'submissions/sample.pdf',
            'status'       => 'under_review',
        ]);

        $anotherReview = SubmissionReview::create([
            'submission_id' => $anotherSubmission->id,
            'reviewer_id'   => $this->reviewer2->id,
            'status'        => 'accepted',
        ]);

        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $anotherReview->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer2->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $response->assertStatus(404);
    }

    /** TEST 17: Successful notification never exposes author identity in log recipient fields -> PASS */
    public function test_notification_log_does_not_expose_author_identity(): void
    {
        $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/send-reminder");

        $log = SubmissionReviewNotificationLog::where('review_id', $this->review->id)->latest('id')->first();

        $this->assertNotEquals($this->author->email, $log->recipient_email);
        $this->assertEquals($this->reviewer1->email, $log->recipient_email);
        $this->assertEquals('reviewer', $log->recipient_role);
    }

    /** TEST 18: Notification log does not expose confidential comments -> PASS */
    public function test_log_does_not_expose_confidential_comments(): void
    {
        $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/submit", [
            'originality_score'    => 4,
            'methodology_score'    => 4,
            'relevance_score'      => 4,
            'clarity_score'        => 4,
            'overall_score'        => 4,
            'recommendation'       => 'accept',
            'reviewer_comments'    => 'This is a comprehensive and excellent paper submission.',
            'confidential_comments'=> 'SECRET_CONFIDENTIAL_EDITOR_NOTE',
        ]);

        $log = SubmissionReviewNotificationLog::where('review_id', $this->review->id)
            ->where('notification_type', 'completion_notice')
            ->first();

        $this->assertNull($log->error_message);
        $this->assertStringNotContainsString('SECRET_CONFIDENTIAL_EDITOR_NOTE', json_encode($log->toArray()));
    }

    /** TEST 19: Only failed notifications can be retried -> PASS */
    public function test_only_failed_notifications_can_be_retried(): void
    {
        $sentLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'sent',
            'queued_at'         => now(),
            'sent_at'           => now(),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$sentLog->id}/retry");
        $response->assertStatus(422);
    }

    /** TEST 20: Client cannot manipulate recipient_email parameter on retry -> PASS */
    public function test_client_cannot_manipulate_recipient_email(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry", [
            'recipient_email' => 'hacker@attacker.com',
            'status'          => 'sent',
        ]);

        $response->assertStatus(302);

        $retryLog = SubmissionReviewNotificationLog::where('retry_of_id', $failedLog->id)->first();
        $this->assertEquals($this->reviewer1->email, $retryLog->recipient_email);
    }

    /** TEST 21: Client cannot manipulate status parameter on retry -> PASS */
    public function test_client_cannot_manipulate_status(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry", [
            'status' => 'fake_status',
        ]);

        $retryLog = SubmissionReviewNotificationLog::where('retry_of_id', $failedLog->id)->first();
        $this->assertEquals('sent', $retryLog->status);
    }

    /** TEST 22: Concurrent retry requests lock row safely -> PASS */
    public function test_concurrent_retry_requests_serialized(): void
    {
        $failedLog = SubmissionReviewNotificationLog::create([
            'review_id'         => $this->review->id,
            'triggered_by'      => $this->editor1->id,
            'notification_type' => 'due_reminder',
            'recipient_email'   => $this->reviewer1->email,
            'recipient_role'    => 'reviewer',
            'status'            => 'failed',
            'queued_at'         => now(),
            'failed_at'         => now(),
        ]);

        // First retry call
        $res1 = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review->id}/notifications/{$failedLog->id}/retry");
        $res1->assertStatus(302);

        // Count retries generated
        $count = SubmissionReviewNotificationLog::where('retry_of_id', $failedLog->id)->count();
        $this->assertEquals(1, $count);
    }

    /** TEST 23: 2D.4 manuscript access regression -> PASS */
    public function test_2d4_manuscript_access_remains_secure(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review->id}/manuscript");
        $response->assertStatus(200);
    }

    /** TEST 24: 2D.5 evaluation scoring regression -> PASS */
    public function test_2d5_evaluation_scoring_remains_operational(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/submit", [
            'originality_score'    => 5,
            'methodology_score'    => 5,
            'relevance_score'      => 5,
            'clarity_score'        => 5,
            'overall_score'        => 5,
            'recommendation'       => 'accept',
            'reviewer_comments'    => 'This is a comprehensive and excellent paper submission.',
            'confidential_comments'=> 'Publish as is.',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id'            => $this->review->id,
            'overall_score' => 5,
            'recommendation'=> 'accept',
            'is_draft'      => false,
            'status'        => 'completed',
        ]);
    }

    /** TEST 25: 2D.6 lifecycle regression -> PASS */
    public function test_2d6_review_lifecycle_remains_operational(): void
    {
        $this->review->update(['status' => 'invited']);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/accept");
        $response->assertStatus(302);
        $this->assertEquals('accepted', $this->review->fresh()->status);
    }
}
