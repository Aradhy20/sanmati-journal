<?php

namespace Tests\Feature;

use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ReviewerWorkloadTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $editor1;
    protected User $editor2;
    protected User $reviewer1;
    protected User $reviewer2;
    protected User $author;
    protected Submission $submission;
    protected SubmissionReview $review1;

    protected function setUp(): void
    {
        parent::setUp();

        Mail::fake();
        Storage::disk('local')->put('submissions/sample.pdf', '%PDF-1.4 Sample Manuscript');

        $this->admin = User::create([
            'full_name' => 'System Admin Workload',
            'email'     => 'admin_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'admin',
        ]);

        $this->editor1 = User::create([
            'full_name' => 'Assigned Editor Workload',
            'email'     => 'editor1_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'editor',
        ]);

        $this->editor2 = User::create([
            'full_name' => 'Unrelated Editor Workload',
            'email'     => 'editor2_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'editor',
        ]);

        $this->reviewer1 = User::create([
            'full_name' => 'Dr. Reviewer One Workload',
            'email'     => 'reviewer1_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'reviewer',
        ]);

        $this->reviewer2 = User::create([
            'full_name' => 'Dr. Reviewer Two Workload',
            'email'     => 'reviewer2_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'reviewer',
        ]);

        $this->author = User::create([
            'full_name' => 'Author User Workload',
            'email'     => 'author_workload@sanmatijournal.in',
            'password'  => bcrypt('Password123!'),
            'role'      => 'author',
        ]);

        $this->submission = Submission::create([
            'user_id'      => $this->author->id,
            'editor_id'    => $this->editor1->id,
            'tracking_id'  => 'SANMATI-2026-WORKLOAD-TEST',
            'title'        => 'Quantum Cryptography Workload Capacity Analysis',
            'abstract'     => 'Abstract text for workload test.',
            'article_type' => 'Research Paper',
            'subject_area' => 'Computer Science',
            'author_name'  => 'Dr. Author Identity',
            'author_email' => 'secret_author_workload@sanmatijournal.in',
            'institution'  => 'Secret Institute',
            'country'      => 'India',
            'file_path'    => 'submissions/sample.pdf',
            'status'       => 'under_review',
        ]);

        $this->review1 = SubmissionReview::create([
            'submission_id' => $this->submission->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'accepted',
            'invited_at'    => now()->subDays(10),
            'accepted_at'   => now()->subDays(9),
            'due_at'        => now()->subDays(3), // OVERDUE
        ]);
    }

    /** TEST 1: Accepted reviews are correctly counted as active -> PASS */
    public function test_accepted_reviews_counted_as_active(): void
    {
        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');
        $response->assertStatus(200);

        $counts = $response->viewData('page')['props']['counts'];
        $this->assertEquals(1, $counts['active_reviews']);
    }

    /** TEST 2: Reviewer dashboard correctly counts overdue reviews -> PASS */
    public function test_reviewer_dashboard_counts_overdue_reviews(): void
    {
        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');
        $response->assertStatus(200);

        $counts = $response->viewData('page')['props']['counts'];
        $this->assertEquals(1, $counts['overdue_reviews']);
    }

    /** TEST 3: Reviewer dashboard filters workqueue by overdue status -> PASS */
    public function test_reviewer_dashboard_filters_by_overdue_status(): void
    {
        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard?status=overdue');
        $response->assertStatus(200);

        $reviews = $response->viewData('page')['props']['reviews']['data'];
        $this->assertCount(1, $reviews);
        $this->assertTrue($reviews[0]['is_overdue']);
        $this->assertGreaterThanOrEqual(1, $reviews[0]['days_overdue']);
    }

    /** TEST 4: Reviewer payload includes is_overdue and days_overdue -> PASS */
    public function test_reviewer_payload_includes_is_overdue_and_days_overdue(): void
    {
        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');
        $reviews = $response->viewData('page')['props']['reviews']['data'];

        $this->assertTrue($reviews[0]['is_overdue']);
        $this->assertGreaterThanOrEqual(1, $reviews[0]['days_overdue']);
    }

    /** TEST 5: Non-overdue accepted review has is_overdue false -> PASS */
    public function test_non_overdue_accepted_review_has_is_overdue_false(): void
    {
        $this->review1->update(['due_at' => now()->addDays(5)]);

        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');
        $reviews = $response->viewData('page')['props']['reviews']['data'];

        $this->assertFalse($reviews[0]['is_overdue']);
        $this->assertEquals(0, $reviews[0]['days_overdue']);
    }

    /** TEST 6: Completed review is never overdue -> PASS */
    public function test_completed_review_is_never_overdue(): void
    {
        $this->review1->update([
            'status'       => 'completed',
            'due_at'       => now()->subDays(5),
            'completed_at' => now()->subDays(1),
        ]);

        $this->assertFalse($this->review1->fresh()->is_overdue);
        $this->assertEquals(0, $this->review1->fresh()->days_overdue);
    }

    /** TEST 7: Candidate reviewer workload count included for editor -> PASS */
    public function test_candidate_reviewer_workload_count_included_for_editor(): void
    {
        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(200);

        $candidates = $response->viewData('page')['props']['candidate_reviewers'];
        $rev1Data = collect($candidates)->firstWhere('id', $this->reviewer1->id);

        $this->assertNotNull($rev1Data);
        $this->assertEquals(1, $rev1Data['active_reviews_count']);
    }

    /** TEST 8: Candidate workload count excludes completed reviews -> PASS */
    public function test_candidate_workload_count_excludes_completed_reviews(): void
    {
        $this->review1->update([
            'status'       => 'completed',
            'completed_at' => now()->subDay(),
        ]);

        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $candidates = $response->viewData('page')['props']['candidate_reviewers'];
        $rev1Data = collect($candidates)->firstWhere('id', $this->reviewer1->id);

        $this->assertEquals(0, $rev1Data['active_reviews_count']);
    }

    /** TEST 9: Candidate workload count excludes declined reviews -> PASS */
    public function test_candidate_workload_count_excludes_declined_reviews(): void
    {
        $this->review1->update([
            'status'      => 'declined',
            'declined_at' => now()->subDay(),
        ]);

        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $candidates = $response->viewData('page')['props']['candidate_reviewers'];
        $rev1Data = collect($candidates)->firstWhere('id', $this->reviewer1->id);

        $this->assertEquals(0, $rev1Data['active_reviews_count']);
    }

    /** TEST 10: Reviewer A cannot view Reviewer B workload -> PASS */
    public function test_reviewer_a_cannot_view_reviewer_b_workload(): void
    {
        $response = $this->actingAs($this->reviewer2)->get("/reviewer/reviews/{$this->review1->id}");
        $response->assertStatus(403);
    }

    /** TEST 11: Author cannot access reviewer workload data -> PASS */
    public function test_author_cannot_access_reviewer_workload_data(): void
    {
        $response = $this->actingAs($this->author)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(403);
    }

    /** TEST 12: Guest redirected to login on workload queries -> PASS */
    public function test_guest_redirected_to_login_on_workload_queries(): void
    {
        $response = $this->get('/reviewer/dashboard');
        $response->assertRedirect('/login');
    }

    /** TEST 13: scopeOverdue queries only late accepted reviews -> PASS */
    public function test_scope_overdue_queries_only_late_accepted_reviews(): void
    {
        $overdueCount = SubmissionReview::overdue()->count();
        $this->assertEquals(1, $overdueCount);
    }

    /** TEST 14: Assigned editor can view overdue status on owned submission -> PASS */
    public function test_assigned_editor_can_view_overdue_status_on_owned_submission(): void
    {
        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(200);

        $assignedReviews = $response->viewData('page')['props']['submission']['assigned_reviews'];
        $this->assertTrue($assignedReviews[0]['is_overdue']);
        $this->assertGreaterThanOrEqual(1, $assignedReviews[0]['days_overdue']);
    }

    /** TEST 15: Unrelated editor cannot view overdue status -> PASS */
    public function test_unrelated_editor_cannot_view_overdue_status(): void
    {
        $response = $this->actingAs($this->editor2)->get("/editor/submissions/{$this->submission->id}");
        $response->assertStatus(403);
    }

    /** TEST 16: Double-blind privacy candidate workload exposes zero author or title data -> PASS */
    public function test_double_blind_candidate_workload_exposes_zero_author_or_title_data(): void
    {
        $response = $this->actingAs($this->editor1)->get("/editor/submissions/{$this->submission->id}");
        $candidates = $response->viewData('page')['props']['candidate_reviewers'];

        foreach ($candidates as $cand) {
            $this->assertArrayHasKey('id', $cand);
            $this->assertArrayHasKey('full_name', $cand);
            $this->assertArrayHasKey('active_reviews_count', $cand);
            $this->assertArrayNotHasKey('author_name', $cand);
            $this->assertArrayNotHasKey('submission_title', $cand);
        }
    }

    /** TEST 17: 2D.4 manuscript access regression -> PASS */
    public function test_2d4_manuscript_access_remains_secure(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");
        $response->assertStatus(200);
    }

    /** TEST 18: 2D.5 evaluation scoring regression -> PASS */
    public function test_2d5_evaluation_scoring_remains_operational(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
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
            'id'            => $this->review1->id,
            'overall_score' => 5,
            'recommendation'=> 'accept',
            'is_draft'      => false,
            'status'        => 'completed',
        ]);
    }

    /** TEST 19: 2D.6 review lifecycle regression -> PASS */
    public function test_2d6_review_lifecycle_remains_operational(): void
    {
        $this->review1->update(['status' => 'invited']);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");
        $response->assertStatus(302);
        $this->assertEquals('accepted', $this->review1->fresh()->status);
    }

    /** TEST 20: 2D.7 & 2D.8 notifications and audit regression -> PASS */
    public function test_2d7_2d8_notifications_and_audit_remains_operational(): void
    {
        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review1->id}/send-reminder");
        $response->assertStatus(302);

        $this->assertDatabaseHas('submission_review_notification_logs', [
            'review_id'         => $this->review1->id,
            'notification_type' => 'due_reminder',
            'status'            => 'sent',
        ]);
    }
}
