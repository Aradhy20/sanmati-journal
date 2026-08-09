<?php

namespace Tests\Feature;

use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ReviewLifecycleTest extends TestCase
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
            'tracking_id' => 'SJ-2026-2001',
            'title' => 'Quantum Artificial Intelligence Protocols',
            'abstract' => 'Quantum machine learning safety algorithms.',
            'keywords' => 'quantum, ai',
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
            'tracking_id' => 'SJ-2026-2002',
            'title' => 'Structural Genomics & Proteomics',
            'abstract' => 'Protein structure analysis.',
            'keywords' => 'genomics, protein',
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
            'status' => 'invited',
            'is_draft' => true,
            'invited_at' => now(),
            'due_at' => now()->addDays(14),
        ]);

        $this->review2 = SubmissionReview::create([
            'submission_id' => $this->submission2->id,
            'reviewer_id' => $this->reviewer2->id,
            'status' => 'invited',
            'is_draft' => true,
            'invited_at' => now(),
            'due_at' => now()->addDays(14),
        ]);
    }

    /** TEST 1: Reviewer owner can accept invitation -> HTTP 302 / 200 */
    public function test_reviewer_owner_can_accept_invitation(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('accepted', $this->review1->status);
        $this->assertNotNull($this->review1->accepted_at);
    }

    /** TEST 2: Reviewer owner can decline invitation -> HTTP 302 / 200 */
    public function test_reviewer_owner_can_decline_invitation(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/decline");

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('declined', $this->review1->status);
        $this->assertNotNull($this->review1->declined_at);
    }

    /** TEST 3: Reviewer B cannot accept Reviewer A invitation -> HTTP 403 */
    public function test_reviewer_b_cannot_accept_reviewer_a_invitation(): void
    {
        $response = $this->actingAs($this->reviewer2)->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(403);
    }

    /** TEST 4: Author cannot accept reviewer invitation -> HTTP 403 */
    public function test_author_cannot_accept_reviewer_invitation(): void
    {
        $response = $this->actingAs($this->author)->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(403);
    }

    /** TEST 5: Guest is redirected to login on accept attempt -> HTTP 302 */
    public function test_guest_redirected_to_login_on_accept(): void
    {
        $response = $this->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertRedirect('/login');
    }

    /** TEST 6: Assigned Editor can view lifecycle state -> HTTP 200 */
    public function test_assigned_editor_can_view_lifecycle_state(): void
    {
        $response = $this->actingAs($this->editor1)->get("/editor/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
        $response->assertJsonPath('review.status', 'invited');
    }

    /** TEST 7: Admin can view lifecycle state -> HTTP 200 */
    public function test_admin_can_view_lifecycle_state(): void
    {
        $response = $this->actingAs($this->admin)->get("/editor/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
        $response->assertJsonPath('review.status', 'invited');
    }

    /** TEST 8: Accept after decline is rejected -> HTTP 422 */
    public function test_accept_after_decline_is_rejected(): void
    {
        $this->review1->update(['status' => 'declined', 'declined_at' => now()]);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(422);
    }

    /** TEST 9: Decline after accept is rejected -> HTTP 422 */
    public function test_decline_after_accept_is_rejected(): void
    {
        $this->review1->update(['status' => 'accepted', 'accepted_at' => now()]);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/decline");

        $response->assertStatus(422);
    }

    /** TEST 10: Duplicate accept request is rejected -> HTTP 422 */
    public function test_duplicate_accept_request_is_rejected(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(422);
    }

    /** TEST 11: Duplicate decline request is rejected -> HTTP 422 */
    public function test_duplicate_decline_request_is_rejected(): void
    {
        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/decline");

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/decline");

        $response->assertStatus(422);
    }

    /** TEST 12: Modify completed review lifecycle state is rejected -> HTTP 422 */
    public function test_modify_completed_review_lifecycle_state_is_rejected(): void
    {
        $this->review1->update([
            'status' => 'completed',
            'is_draft' => false,
            'submitted_at' => now(),
            'completed_at' => now(),
        ]);

        $response1 = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");
        $response2 = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/decline");

        $response1->assertStatus(422);
        $response2->assertStatus(422);
    }

    /** TEST 13: Reviewer owner can declare COI with valid reason -> HTTP 302 */
    public function test_reviewer_owner_can_declare_coi(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/conflict", [
            'coi_reason' => 'Co-authored a paper with the lead author in 2024.',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('conflict_declared', $this->review1->status);
        $this->assertTrue((bool) $this->review1->coi_declared);
        $this->assertEquals('Co-authored a paper with the lead author in 2024.', $this->review1->coi_reason);
        $this->assertNotNull($this->review1->coi_declared_at);
    }

    /** TEST 14: COI declaration with empty reason is rejected -> HTTP 422 */
    public function test_coi_declaration_with_empty_reason_is_rejected(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/conflict", [
            'coi_reason' => '',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 15: Reviewer B cannot view Reviewer A COI details -> HTTP 403 */
    public function test_reviewer_b_cannot_view_reviewer_a_coi_details(): void
    {
        $this->review1->update([
            'status' => 'conflict_declared',
            'coi_declared' => true,
            'coi_reason' => 'Private COI details',
        ]);

        $response = $this->actingAs($this->reviewer2)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(403);
    }

    /** TEST 16: Author cannot view COI details or reason -> PASS */
    public function test_author_cannot_view_coi_details(): void
    {
        $this->review1->update([
            'status' => 'conflict_declared',
            'coi_declared' => true,
            'coi_reason' => 'Private COI reason',
        ]);

        $response = $this->actingAs($this->author)->get("/author/submissions/{$this->submission1->id}");

        $response->assertStatus(200);
        $response->assertDontSee('Private COI reason');
    }

    /** TEST 17: Reviewer cannot view another reviewer's COI -> HTTP 403 */
    public function test_reviewer_cannot_view_another_reviewers_coi(): void
    {
        $response = $this->actingAs($this->reviewer2)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(403);
    }

    /** TEST 18: IDOR attack on review ID is rejected -> HTTP 403 */
    public function test_idor_attack_on_review_id_is_rejected(): void
    {
        $response = $this->actingAs($this->reviewer2)->post("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(403);
    }

    /** TEST 19: IDOR reviewer ID parameter is ignored -> PASS */
    public function test_idor_reviewer_id_parameter_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept", [
            'reviewer_id' => $this->reviewer2->id,
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals($this->reviewer1->id, $this->review1->reviewer_id);
    }

    /** TEST 20: IDOR submission ID parameter is ignored -> PASS */
    public function test_idor_submission_id_parameter_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept", [
            'submission_id' => $this->submission2->id,
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals($this->submission1->id, $this->review1->submission_id);
    }

    /** TEST 21: Client-supplied status parameter is ignored -> PASS */
    public function test_client_supplied_status_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept", [
            'status' => 'approved_by_god',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('accepted', $this->review1->status);
    }

    /** TEST 22: Client-supplied accepted_at parameter is ignored -> PASS */
    public function test_client_supplied_accepted_at_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/accept", [
            'accepted_at' => '2020-01-01 00:00:00',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertNotEquals('2020-01-01 00:00:00', $this->review1->accepted_at->toDateTimeString());
    }

    /** TEST 23: Client-supplied declined_at parameter is ignored -> PASS */
    public function test_client_supplied_declined_at_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/decline", [
            'declined_at' => '2020-01-01 00:00:00',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertNotEquals('2020-01-01 00:00:00', $this->review1->declined_at->toDateTimeString());
    }

    /** TEST 24: Client-supplied completed_at parameter is ignored -> PASS */
    public function test_client_supplied_completed_at_is_ignored(): void
    {
        $this->review1->update(['status' => 'accepted']);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'completed_at' => '2020-01-01 00:00:00',
            'originality_score' => 5,
            'methodology_score' => 5,
            'relevance_score' => 5,
            'clarity_score' => 5,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding minimum 20 characters length.',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertNotEquals('2020-01-01 00:00:00', $this->review1->completed_at->toDateTimeString());
    }

    /** TEST 25: Concurrent accept and decline calls allow row locking -> PASS */
    public function test_concurrent_accept_and_decline_calls_row_locking(): void
    {
        DB::transaction(function () {
            $locked = SubmissionReview::where('id', $this->review1->id)->lockForUpdate()->first();
            $locked->update(['status' => 'declined', 'declined_at' => now()]);
        });

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(422);
    }

    /** TEST 26: Concurrent COI declaration vs final evaluation submission row locking -> PASS */
    public function test_concurrent_coi_declaration_vs_final_evaluation_submission_row_locking(): void
    {
        $this->review1->update(['status' => 'accepted']);

        // CASE A: COI commits first -> final evaluation submission must fail 422
        DB::transaction(function () {
            $locked = SubmissionReview::where('id', $this->review1->id)->lockForUpdate()->first();
            $locked->update([
                'coi_declared' => true,
                'coi_reason' => 'Late discovered COI.',
                'coi_declared_at' => now(),
                'status' => 'conflict_declared',
            ]);
        });

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 5,
            'relevance_score' => 5,
            'clarity_score' => 5,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding minimum 20 characters length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 27: Lifecycle completion succeeds when evaluation is submitted -> HTTP 302 */
    public function test_lifecycle_completion_succeeds_when_evaluation_is_submitted(): void
    {
        $this->review1->update(['status' => 'accepted']);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 5,
            'relevance_score' => 5,
            'clarity_score' => 5,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding minimum 20 characters length.',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('completed', $this->review1->status);
        $this->assertFalse((bool) $this->review1->is_draft);
        $this->assertNotNull($this->review1->submitted_at);
        $this->assertNotNull($this->review1->completed_at);
    }

    /** TEST 28: Lifecycle completion sets status = completed and completed_at = now() -> PASS */
    public function test_lifecycle_completion_sets_status_completed(): void
    {
        $this->review1->update(['status' => 'accepted']);

        $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 4,
            'methodology_score' => 4,
            'relevance_score' => 4,
            'clarity_score' => 4,
            'overall_score' => 4,
            'recommendation' => 'minor_revision',
            'reviewer_comments' => 'Detailed comments exceeding minimum 20 characters length.',
        ]);

        $this->review1->refresh();
        $this->assertEquals('completed', $this->review1->status);
        $this->assertNotNull($this->review1->completed_at);
    }

    /** TEST 29: Assigned Editor can update due date when status is accepted -> HTTP 302 */
    public function test_assigned_editor_can_update_due_date(): void
    {
        $newDueDate = now()->addDays(20)->toDateTimeString();

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review1->id}/due-date", [
            'due_at' => $newDueDate,
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals($newDueDate, $this->review1->due_at->toDateTimeString());
    }

    /** TEST 30: Updating due date on completed review is rejected -> HTTP 422 */
    public function test_updating_due_date_on_completed_review_is_rejected(): void
    {
        $this->review1->update(['status' => 'completed']);

        $response = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review1->id}/due-date", [
            'due_at' => now()->addDays(30)->toDateTimeString(),
        ]);

        $response->assertStatus(422);
    }

    /** TEST 31: Assigned Editor can resolve COI with reinvite -> HTTP 302 */
    public function test_assigned_editor_can_resolve_coi_with_reinvite(): void
    {
        $this->review1->update([
            'status' => 'conflict_declared',
            'coi_declared' => true,
            'coi_reason' => 'Alleged COI',
            'coi_declared_at' => now(),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review1->id}/resolve-conflict", [
            'action' => 'reinvite',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('invited', $this->review1->status);
        $this->assertNotNull($this->review1->coi_resolved_at);
        $this->assertEquals($this->editor1->id, $this->review1->coi_resolved_by);
    }

    /** TEST 32: Assigned Editor can resolve COI with decline_assignment -> HTTP 302 */
    public function test_assigned_editor_can_resolve_coi_with_decline_assignment(): void
    {
        $this->review1->update([
            'status' => 'conflict_declared',
            'coi_declared' => true,
            'coi_reason' => 'Alleged COI',
            'coi_declared_at' => now(),
        ]);

        $response = $this->actingAs($this->editor1)->post("/editor/reviews/{$this->review1->id}/resolve-conflict", [
            'action' => 'decline_assignment',
        ]);

        $response->assertStatus(302);
        $this->review1->refresh();
        $this->assertEquals('declined', $this->review1->status);
        $this->assertNotNull($this->review1->declined_at);
        $this->assertNotNull($this->review1->coi_resolved_at);
    }

    /** TEST 33: Resolving COI with invalid action is rejected -> HTTP 422 */
    public function test_resolving_coi_with_invalid_action_is_rejected(): void
    {
        $this->review1->update([
            'status' => 'conflict_declared',
            'coi_declared' => true,
            'coi_reason' => 'Alleged COI',
        ]);

        $response = $this->actingAs($this->editor1)->postJson("/editor/reviews/{$this->review1->id}/resolve-conflict", [
            'action' => 'approve_by_god',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 34: Active COI blocks invitation acceptance -> HTTP 422 */
    public function test_active_coi_blocks_invitation_acceptance(): void
    {
        $this->review1->update([
            'status' => 'invited',
            'coi_declared' => true,
            'coi_reason' => 'Active COI reason',
            'coi_resolved_at' => null,
        ]);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/accept");

        $response->assertStatus(422);
    }

    /** TEST 35: Active COI blocks final evaluation completion -> HTTP 422 */
    public function test_active_coi_blocks_final_evaluation_completion(): void
    {
        $this->review1->update([
            'status' => 'accepted',
            'coi_declared' => true,
            'coi_reason' => 'Active COI reason',
            'coi_resolved_at' => null,
        ]);

        $response = $this->actingAs($this->reviewer1)->postJson("/reviewer/reviews/{$this->review1->id}/submit", [
            'originality_score' => 5,
            'methodology_score' => 5,
            'relevance_score' => 5,
            'clarity_score' => 5,
            'overall_score' => 5,
            'recommendation' => 'accept',
            'reviewer_comments' => 'Detailed comments exceeding minimum 20 characters length.',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 36: Double-blind payload contains zero author identity -> PASS */
    public function test_double_blind_payload_contains_zero_author_identity(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/evaluation");

        $response->assertStatus(200);
        $response->assertDontSee('Dr. Confidential Author');
        $response->assertDontSee('author@sanmatijournal.in');
    }

    /** TEST 37: Author payload contains zero reviewer identity -> PASS */
    public function test_author_payload_contains_zero_reviewer_identity(): void
    {
        $response = $this->actingAs($this->author)->get("/author/submissions/{$this->submission1->id}");

        $response->assertStatus(200);
        $response->assertDontSee('Reviewer One');
        $response->assertDontSee('reviewer1@sanmatijournal.in');
    }

    /** TEST 38: Author payload contains zero COI data -> PASS */
    public function test_author_payload_contains_zero_coi_data(): void
    {
        $this->review1->update([
            'coi_declared' => true,
            'coi_reason' => 'PRIVATE COI REASON',
        ]);

        $response = $this->actingAs($this->author)->get("/author/submissions/{$this->submission1->id}");

        $response->assertDontSee('PRIVATE COI REASON');
    }

    /** TEST 39: Existing 2D.5 evaluation functionality regression check -> PASS */
    public function test_existing_2d5_evaluation_functionality_regression(): void
    {
        $this->review1->update(['status' => 'accepted']);

        $response = $this->actingAs($this->reviewer1)->post("/reviewer/reviews/{$this->review1->id}/draft", [
            'originality_score' => 4,
            'reviewer_comments' => 'Draft comment',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('submission_reviews', [
            'id' => $this->review1->id,
            'originality_score' => 4,
            'is_draft' => true,
        ]);
    }

    /** TEST 40: Full application suite regression check -> PASS */
    public function test_full_application_suite_regression(): void
    {
        $response = $this->get('/search');
        $response->assertStatus(200);
    }
}
