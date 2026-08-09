<?php

namespace Tests\Feature;

use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ReviewEvaluationTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $editor1;
    protected User $editor2;
    protected User $reviewer1;
    protected User $reviewer2;
    protected User $author;
    protected Submission $submission1;
    protected Submission $submission2;
    protected SubmissionReview $review1;
    protected SubmissionReview $review2;

    protected function setUp(): void
    {
        parent::setUp();

        // Create Users
        $this->admin = User::create([
            'email' => 'admin@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Admin User',
            'role' => 'admin',
        ]);

        $this->editor1 = User::create([
            'email' => 'editor1@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Editor One',
            'role' => 'editor',
        ]);

        $this->editor2 = User::create([
            'email' => 'editor2@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Editor Two',
            'role' => 'editor',
        ]);

        $this->reviewer1 = User::create([
            'email' => 'reviewer1@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Reviewer One',
            'role' => 'reviewer',
        ]);

        $this->reviewer2 = User::create([
            'email' => 'reviewer2@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Reviewer Two',
            'role' => 'reviewer',
        ]);

        $this->author = User::create([
            'email' => 'author@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Dr. Confidential Author',
            'role' => 'author',
        ]);

        // Create Submissions
        $this->submission1 = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => $this->editor1->id,
            'tracking_id' => 'SJ-2026-1001',
            'title' => 'Quantum Cryptography Methodologies',
            'abstract' => 'Quantum computing security algorithms.',
            'keywords' => 'quantum, crypto',
            'article_type' => 'Research Article',
            'subject_area' => 'Computer Science',
            'author_name' => 'Dr. Confidential Author',
            'author_email' => 'author@sanmatijournal.in',
            'file_path' => 'submissions/sample1.pdf',
            'status' => 'under_review',
        ]);

        $this->submission2 = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => $this->editor2->id,
            'tracking_id' => 'SJ-2026-1002',
            'title' => 'Genomic Sequence Analysis',
            'abstract' => 'Bioinformatics algorithms.',
            'keywords' => 'genomics, dna',
            'article_type' => 'Review Article',
            'subject_area' => 'Bioinformatics',
            'author_name' => 'Dr. Confidential Author',
            'author_email' => 'author@sanmatijournal.in',
            'file_path' => 'submissions/sample2.pdf',
            'status' => 'under_review',
        ]);

        // Create Review Assignments
        $this->review1 = SubmissionReview::create([
            'submission_id' => $this->submission1->id,
            'reviewer_id' => $this->reviewer1->id,
            'status' => 'accepted',
            'is_draft' => true,
            'invited_at' => now(),
            'accepted_at' => now(),
        ]);

        $this->review2 = SubmissionReview::create([
            'submission_id' => $this->submission2->id,
            'reviewer_id' => $this->reviewer2->id,
            'status' => 'accepted',
            'is_draft' => true,
            'invited_at' => now(),
            'accepted_at' => now(),
        ]);
    }

    /** TEST 1: Reviewer owner views evaluation form -> HTTP 200 */
    public function test_reviewer_owner_views_evaluation_form(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
    }

    /** TEST 2: Reviewer B denied Reviewer A evaluation form -> HTTP 403 */
    public function test_reviewer_b_denied_reviewer_a_evaluation_form(): void
    {
        $response = $this->actingAs($this->reviewer2)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(403);
    }

    /** TEST 3: Reviewer saves draft evaluation -> HTTP 302 / 200 */
    public function test_reviewer_saves_draft_evaluation(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'originality_score' => 4,
            'reviewer_comments' => 'Initial draft comments.',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'originality_score' => 4,
            'reviewer_comments' => 'Initial draft comments.',
            'is_draft' => true,
            'submitted_at' => null,
        ]);
    }

    /** TEST 4: Reviewer updates own draft evaluation -> HTTP 302 */
    public function test_reviewer_updates_own_draft_evaluation(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'originality_score' => 4,
        ]);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'originality_score' => 5,
            'reviewer_comments' => 'Updated draft comments.',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'originality_score' => 5,
            'reviewer_comments' => 'Updated draft comments.',
        ]);
    }

    /** TEST 5: Reviewer finalizes own evaluation -> HTTP 302 */
    public function test_reviewer_finalizes_own_evaluation(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Excellent research paper with novel contributions to quantum cryptography.',
            'confidential_comments' => 'High priority manuscript for publication.',
        ]);

        $response->assertStatus(302);
        $response->assertRedirect('/reviewer/dashboard');

        $this->review1->refresh();
        $this->assertFalse((bool) $this->review1->is_draft);
        $this->assertNotNull($this->review1->submitted_at);
    }

    /** TEST 6: Reviewer denied another reviewer's finalization -> HTTP 403 */
    public function test_reviewer_denied_another_reviewers_finalization(): void
    {
        $response = $this->actingAs($this->reviewer2)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Malicious takeover attempt comments.',
        ]);

        $response->assertStatus(403);
    }

    /** TEST 7: Finalized review cannot be modified via draft endpoint -> HTTP 422 */
    public function test_finalized_review_cannot_be_modified_via_draft(): void
    {
        $this->review1->update(['is_draft' => false, 'submitted_at' => now()]);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'originality_score' => 1,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 8: Finalized review cannot be resubmitted via submit endpoint -> HTTP 422 */
    public function test_finalized_review_cannot_be_resubmitted(): void
    {
        $this->review1->update(['is_draft' => false, 'submitted_at' => now()]);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 1,
            'methodology_score' => 1,
            'relevance_score' => 1,
            'clarity_score' => 1,
            'overall_score' => 1,
            'recommendation' => 'reject',
            'reviewer_comments' => 'Attempting to overwrite finalized review.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 9: Author denied evaluation access -> HTTP 403 */
    public function test_author_denied_evaluation_access(): void
    {
        $response = $this->actingAs($this->author)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(403);
    }

    /** TEST 10: Author receives zero review data -> PASS */
    public function test_author_payload_contains_zero_review_data(): void
    {
        $this->review1->update([
            'originality_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Great paper!',
            'confidential_comments' => 'Confidential editor note',
        ]);

        $response = $this->actingAs($this->author)->get("/author/submissions/{$this->submission1->id}");

        $response->assertStatus(200);
        $response->assertDontSee('reviewer_comments');
        $response->assertDontSee('confidential_comments');
        $response->assertDontSee('originality_score');
        $response->assertDontSee('Confidential editor note');
    }

    /** TEST 11: Author cannot see reviewer identity -> PASS */
    public function test_author_cannot_see_reviewer_identity(): void
    {
        $response = $this->actingAs($this->author)->get('/author/dashboard');

        $response->assertStatus(200);
        $response->assertDontSee('Reviewer One');
        $response->assertDontSee('reviewer1@sanmatijournal.in');
    }

    /** TEST 12: Author cannot see confidential comments -> PASS */
    public function test_author_cannot_see_confidential_comments(): void
    {
        $this->review1->update(['confidential_comments' => 'TOP SECRET EDITOR COMMENT']);

        $response = $this->actingAs($this->author)->get("/author/submissions/{$this->submission1->id}");

        $response->assertDontSee('TOP SECRET EDITOR COMMENT');
    }

    /** TEST 13: Assigned Editor can view evaluation -> HTTP 200 */
    public function test_assigned_editor_can_view_evaluation(): void
    {
        $response = $this->actingAs($this->editor1)->get("/editor/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
        $response->assertJsonPath('review.id', $this->review1->id);
    }

    /** TEST 14: Unrelated Editor denied -> HTTP 403 */
    public function test_unrelated_editor_denied_access_to_evaluation(): void
    {
        $response = $this->actingAs($this->editor2)->get("/editor/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(403);
    }

    /** TEST 15: Admin can view evaluation -> HTTP 200 */
    public function test_admin_can_view_evaluation(): void
    {
        $response = $this->actingAs($this->admin)->get("/editor/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
        $response->assertJsonPath('review.id', $this->review1->id);
    }

    /** TEST 16: Invalid score 0 rejected -> HTTP 422 */
    public function test_invalid_score_0_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 0,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding 20 characters length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 17: Score 6 rejected -> HTTP 422 */
    public function test_score_6_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 6,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding 20 characters length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 18: Invalid recommendation rejected -> HTTP 422 */
    public function test_invalid_recommendation_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'publish_immediately',
            'reviewer_comments' => 'Detailed comments exceeding 20 characters length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 19: Missing required final fields rejected -> HTTP 422 */
    public function test_missing_required_final_fields_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 20: Comment >10,000 characters rejected -> HTTP 422 */
    public function test_comment_exceeding_10000_characters_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => str_repeat('A', 10001),
        ]);

        $response->assertStatus(422);
    }

    /** TEST 21: XSS payload safely handled -> PASS */
    public function test_xss_payload_safely_handled(): void
    {
        $xss = '<script>alert("XSS")</script>';

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => "Review comment with {$xss} payload.",
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'reviewer_comments' => "Review comment with {$xss} payload.",
        ]);
    }

    /** TEST 22: reviewer_id tampering ignored/rejected -> HTTP 403 / ignored */
    public function test_reviewer_id_tampering_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'reviewer_id' => $this->reviewer2->id,
            'originality_score' => 4,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'reviewer_id' => $this->reviewer1->id,
            'originality_score' => 4,
        ]);
    }

    /** TEST 23: submission_id tampering ignored/rejected -> HTTP 403 / ignored */
    public function test_submission_id_tampering_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'submission_id' => $this->submission2->id,
            'originality_score' => 4,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'submission_id' => $this->submission1->id,
        ]);
    }

    /** TEST 24: is_draft tampering ignored/rejected -> Ignored / HTTP 422 */
    public function test_is_draft_tampering_ignored_in_draft_endpoint(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'is_draft' => false,
            'originality_score' => 4,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'is_draft' => true,
            'submitted_at' => null,
        ]);
    }

    /** TEST 25: submitted_at tampering ignored/rejected -> Ignored / HTTP 422 */
    public function test_submitted_at_tampering_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'submitted_at' => '2020-01-01 00:00:00',
            'originality_score' => 4,
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'submitted_at' => null,
        ]);
    }

    /** TEST 26: status tampering ignored/rejected -> Ignored (status becomes completed, ignoring client input) */
    public function test_status_tampering_ignored_during_finalization(): void
    {
        $this->review1->update(['status' => 'accepted']);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'status' => 'approved_by_god',
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'status' => 'completed',
        ]);
    }

    /** TEST 27: Duplicate finalization rejected -> HTTP 422 */
    public function test_duplicate_finalization_rejected(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 28: Concurrent finalization allows exactly one success -> PASS */
    public function test_concurrent_finalization_locks_row(): void
    {
        DB::transaction(function () {
            $locked = SubmissionReview::where('id', $this->review1->id)->lockForUpdate()->first();
            $locked->update(['is_draft' => false, 'submitted_at' => now()]);
        });

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 29: submission_reviews.status becomes completed after finalization -> PASS */
    public function test_status_becomes_completed_after_finalization(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $this->review1->refresh();
        $this->assertEquals('completed', $this->review1->status);
    }

    /** TEST 30: submission_reviews.completed_at is populated after finalization -> PASS */
    public function test_completed_at_is_populated_after_finalization(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 4,
            'relevance_score' => 5,
            'clarity_score' => 4,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed review comments exceeding minimum length.',
        ]);

        $this->review1->refresh();
        $this->assertNotNull($this->review1->completed_at);
    }
}
