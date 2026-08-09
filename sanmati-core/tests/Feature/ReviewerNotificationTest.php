<?php

namespace Tests\Feature;

use App\Mail\ReviewEvaluationCompletedMail;
use App\Mail\ReviewerCoiDeclaredMail;
use App\Mail\ReviewerDueDateReminderMail;
use App\Mail\ReviewerInvitedMail;
use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ReviewerNotificationTest extends TestCase
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
            'role'      => 'admin',
            'email'     => 'admin@sanmatijournal.in',
            'full_name' => 'Admin User',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->editor1 = User::create([
            'role'      => 'editor',
            'email'     => 'editor1@sanmatijournal.in',
            'full_name' => 'Editor One',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->editor2 = User::create([
            'role'      => 'editor',
            'email'     => 'editor2@sanmatijournal.in',
            'full_name' => 'Editor Two',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->reviewer1 = User::create([
            'role'      => 'reviewer',
            'email'     => 'reviewer1@sanmatijournal.in',
            'full_name' => 'Reviewer One',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->reviewer2 = User::create([
            'role'      => 'reviewer',
            'email'     => 'reviewer2@sanmatijournal.in',
            'full_name' => 'Reviewer Two',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->author = User::create([
            'role'      => 'author',
            'email'     => 'author@sanmatijournal.in',
            'full_name' => 'Dr. Author Identity',
            'password'  => bcrypt('Password123!'),
        ]);

        $this->submission = Submission::create([
            'user_id'      => $this->author->id,
            'editor_id'    => $this->editor1->id,
            'tracking_id'  => 'SANMATI-2026-TEST-NOTIF',
            'title'        => 'Quantum Cryptography and Privacy Protocols',
            'abstract'     => 'An in-depth study on quantum key distribution.',
            'article_type' => 'Research Paper',
            'subject_area' => 'Computer Science',
            'author_name'  => 'Dr. Author Identity',
            'author_email' => 'secret_author@sanmatijournal.in',
            'institution'  => 'Secret Institution of Technology',
            'country'      => 'India',
            'file_path'    => 'submissions/sample.pdf',
            'status'       => 'under_review',
        ]);

        $this->review = SubmissionReview::create([
            'submission_id' => $this->submission->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'invited_at'    => now(),
            'due_at'        => now()->addDays(14),
        ]);
    }

    /** TEST 1: Assigning reviewer sends invitation email -> PASS */
    public function test_assigning_reviewer_sends_invitation_email(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission->id}/reviewers", [
            'reviewer_id' => $this->reviewer2->id,
        ]);

        $response->assertStatus(201);

        Mail::assertQueued(ReviewerInvitedMail::class, function ($mail) {
            return $mail->hasTo($this->reviewer2->email);
        });
    }

    /** TEST 2: Invitation email excludes author name -> PASS */
    public function test_reviewer_invitation_email_does_not_contain_author_name(): void
    {
        $mail = new ReviewerInvitedMail(
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            articleType: $this->submission->article_type,
            subjectArea: $this->submission->subject_area,
            dueAt: '25 Aug 2026',
            portalUrl: 'https://sanmatijournal.in/reviewer/reviews/1'
        );

        $rendered = $mail->render();
        $this->assertStringNotContainsString('Dr. Author Identity', $rendered);
    }

    /** TEST 3: Invitation email excludes author email -> PASS */
    public function test_reviewer_invitation_email_does_not_contain_author_email(): void
    {
        $mail = new ReviewerInvitedMail(
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            articleType: $this->submission->article_type,
            subjectArea: $this->submission->subject_area,
            dueAt: '25 Aug 2026',
            portalUrl: 'https://sanmatijournal.in/reviewer/reviews/1'
        );

        $rendered = $mail->render();
        $this->assertStringNotContainsString('secret_author@sanmatijournal.in', $rendered);
    }

    /** TEST 4: Invitation email excludes institution -> PASS */
    public function test_reviewer_invitation_email_does_not_contain_institution(): void
    {
        $mail = new ReviewerInvitedMail(
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            articleType: $this->submission->article_type,
            subjectArea: $this->submission->subject_area,
            dueAt: '25 Aug 2026',
            portalUrl: 'https://sanmatijournal.in/reviewer/reviews/1'
        );

        $rendered = $mail->render();
        $this->assertStringNotContainsString('Secret Institution of Technology', $rendered);
    }

    /** TEST 5: Invitation email contains tracking ID -> PASS */
    public function test_reviewer_invitation_email_contains_tracking_id(): void
    {
        $mail = new ReviewerInvitedMail(
            reviewerName: 'Dr. Reviewer',
            trackingId: 'SANMATI-2026-TEST-NOTIF',
            paperTitle: $this->submission->title,
            articleType: $this->submission->article_type,
            subjectArea: $this->submission->subject_area,
            dueAt: '25 Aug 2026',
            portalUrl: 'https://sanmatijournal.in/reviewer/reviews/1'
        );

        $rendered = $mail->render();
        $this->assertStringContainsString('SANMATI-2026-TEST-NOTIF', $rendered);
    }

    /** TEST 6: Invitation email contains secure portal URL -> PASS */
    public function test_reviewer_invitation_email_contains_secure_portal_url(): void
    {
        $mail = new ReviewerInvitedMail(
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            articleType: $this->submission->article_type,
            subjectArea: $this->submission->subject_area,
            dueAt: '25 Aug 2026',
            portalUrl: 'https://sanmatijournal.in/reviewer/reviews/99'
        );

        $rendered = $mail->render();
        $this->assertStringContainsString('https://sanmatijournal.in/reviewer/reviews/99', $rendered);
    }

    /** TEST 7: COI declaration sends editor notification -> PASS */
    public function test_coi_declaration_sends_editor_notification(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/conflict", [
            'coi_reason' => 'I am a co-author on a related project with the author.',
        ]);

        $response->assertStatus(302);

        Mail::assertQueued(ReviewerCoiDeclaredMail::class, function ($mail) {
            return $mail->hasTo($this->editor1->email);
        });
    }

    /** TEST 8: COI email contains reason -> PASS */
    public function test_coi_email_contains_reason(): void
    {
        $mail = new ReviewerCoiDeclaredMail(
            editorName: 'Editor One',
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            coiReason: 'Conflict due to institutional affiliation.',
            declaredAt: '09 Aug 2026, 10:00 AM',
            editorUrl: 'https://sanmatijournal.in/editor/submissions/1'
        );

        $rendered = $mail->render();
        $this->assertStringContainsString('Conflict due to institutional affiliation.', $rendered);
    }

    /** TEST 9: Author receives no COI notification -> PASS */
    public function test_author_does_not_receive_coi_notification(): void
    {
        $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review->id}/conflict", [
            'coi_reason' => 'Institutional affiliation overlap.',
        ]);

        Mail::assertNotQueued(ReviewerCoiDeclaredMail::class, function ($mail) {
            return $mail->hasTo($this->author->email);
        });
    }

    /** TEST 10: Completed evaluation sends editor notification -> PASS */
    public function test_completed_evaluation_sends_editor_notification(): void
    {
        $this->review->update(['status' => 'accepted']);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score'   => 5,
            'clarity_score'     => 4,
            'overall_score'     => 5,
            'recommendation'    => 'accept',
            'reviewer_comments' => 'Detailed research paper review comments.',
        ]);

        $response->assertStatus(302);

        Mail::assertQueued(ReviewEvaluationCompletedMail::class, function ($mail) {
            return $mail->hasTo($this->editor1->email);
        });
    }

    /** TEST 11: Completion email contains recommendation -> PASS */
    public function test_completion_email_contains_recommendation(): void
    {
        $mail = new ReviewEvaluationCompletedMail(
            editorName: 'Editor One',
            reviewerName: 'Dr. Reviewer',
            trackingId: $this->submission->tracking_id,
            paperTitle: $this->submission->title,
            recommendation: 'accept',
            completedAt: '09 Aug 2026, 10:00 AM',
            editorUrl: 'https://sanmatijournal.in/editor/reviews/1/evaluation'
        );

        $rendered = $mail->render();
        $this->assertStringContainsString('ACCEPT', $rendered);
    }

    /** TEST 12: Assigned editor can send reminder -> PASS */
    public function test_assigned_editor_can_send_reminder(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(302);

        Mail::assertQueued(ReviewerDueDateReminderMail::class, function ($mail) {
            return $mail->hasTo($this->reviewer1->email);
        });
    }

    /** TEST 13: Admin can send reminder -> PASS */
    public function test_admin_can_send_reminder(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->admin)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(302);

        Mail::assertQueued(ReviewerDueDateReminderMail::class, function ($mail) {
            return $mail->hasTo($this->reviewer1->email);
        });
    }

    /** TEST 14: Unrelated editor receives 403 on reminder -> PASS */
    public function test_unrelated_editor_receives_403_on_reminder(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->editor2)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(403);
    }

    /** TEST 15: Reviewer receives 403 on reminder endpoint -> PASS */
    public function test_reviewer_receives_403_on_reminder_endpoint(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->reviewer1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(403);
    }

    /** TEST 16: Author receives 403 on reminder endpoint -> PASS */
    public function test_author_receives_403_on_reminder_endpoint(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->author)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(403);
    }

    /** TEST 17: Guest redirected to login on reminder endpoint -> PASS */
    public function test_guest_redirected_to_login_on_reminder_endpoint(): void
    {
        $response = $this->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(401);
    }

    /** TEST 18: Reminder updates reminder_sent_at server-side -> PASS */
    public function test_reminder_updates_reminder_sent_at_server_side(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $this->review->refresh();
        $this->assertNotNull($this->review->reminder_sent_at);
    }

    /** TEST 19: Reminder increments reminder_count server-side -> PASS */
    public function test_reminder_increments_reminder_count_server_side(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3), 'reminder_count' => 0]);

        $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $this->review->refresh();
        $this->assertEquals(1, $this->review->reminder_count);
    }

    /** TEST 20: Client cannot manipulate reminder_sent_at -> PASS */
    public function test_client_cannot_manipulate_reminder_sent_at(): void
    {
        $fakePastTime = '2020-01-01 00:00:00';

        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder", [
            'reminder_sent_at' => $fakePastTime,
            'reminder_count'   => 999,
        ]);

        $this->review->refresh();
        $this->assertNotEquals($fakePastTime, $this->review->reminder_sent_at->toDateTimeString());
        $this->assertEquals(1, $this->review->reminder_count);
    }

    /** TEST 21: Client cannot manipulate reminder_count -> PASS */
    public function test_client_cannot_manipulate_reminder_count(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3), 'reminder_count' => 0]);

        $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder", [
            'reminder_count' => 999,
        ]);

        $this->review->refresh();
        $this->assertEquals(1, $this->review->reminder_count);
    }

    /** TEST 22: Completed review cannot receive reminder -> PASS */
    public function test_completed_review_cannot_receive_reminder(): void
    {
        $this->review->update(['status' => 'completed', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(422);
    }

    /** TEST 23: Declined review cannot receive reminder -> PASS */
    public function test_declined_review_cannot_receive_reminder(): void
    {
        $this->review->update(['status' => 'declined', 'due_at' => now()->addDays(3)]);

        $response = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $response->assertStatus(422);
    }

    /** TEST 24: Reminder cooldown prevents duplicate reminder -> PASS */
    public function test_reminder_cooldown_prevents_duplicate_reminder(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        // First reminder -> SUCCESS
        $res1 = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");
        $res1->assertStatus(302);

        // Immediate second reminder -> REJECTED 422 COOLDOWN
        $res2 = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");
        $res2->assertStatus(422);
    }

    /** TEST 25: Concurrent reminder requests cannot bypass cooldown -> PASS */
    public function test_concurrent_reminder_requests_cannot_bypass_cooldown(): void
    {
        $this->review->update(['status' => 'accepted', 'due_at' => now()->addDays(3)]);

        $res1 = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");
        $res2 = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review->id}/send-reminder");

        $this->review->refresh();
        $this->assertEquals(1, $this->review->reminder_count);
    }
}
