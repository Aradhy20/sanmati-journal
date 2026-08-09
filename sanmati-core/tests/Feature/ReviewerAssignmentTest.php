<?php

namespace Tests\Feature;

use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ReviewerAssignmentTest extends TestCase
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

    protected function setUp(): void
    {
        parent::setUp();

        // Create Users with distinct roles
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
            'full_name' => 'Author User',
            'role' => 'author',
        ]);

        // Create Submissions
        $this->submission1 = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => $this->editor1->id,
            'tracking_id' => 'SJ-2026-0001',
            'title' => 'Quantum Computing Advances in Cryptography',
            'abstract' => 'An in-depth study of quantum post-cryptographic algorithms.',
            'keywords' => 'quantum, crypto, security',
            'article_type' => 'Research Article',
            'subject_area' => 'Computer Science',
            'author_name' => 'Dr. Confidential Author',
            'author_email' => 'author@sanmatijournal.in',
            'author_phone' => '+91-9876543210',
            'institution' => 'Indian Institute of Science',
            'country' => 'India',
            'file_path' => 'submissions/manuscript_001.pdf',
            'status' => 'under_review',
        ]);

        $this->submission2 = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => $this->editor2->id,
            'tracking_id' => 'SJ-2026-0002',
            'title' => 'Bioinformatics Analysis of Genomic Data',
            'abstract' => 'Genomic sequencing analysis methods.',
            'keywords' => 'genomics, dna, bioinformatics',
            'article_type' => 'Review Article',
            'subject_area' => 'Bioinformatics',
            'author_name' => 'Dr. Confidential Author',
            'author_email' => 'author@sanmatijournal.in',
            'author_phone' => '+91-9876543210',
            'institution' => 'Indian Institute of Science',
            'country' => 'India',
            'file_path' => 'submissions/manuscript_002.pdf',
            'status' => 'under_review',
        ]);

        $this->unassignedSubmission = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => null,
            'tracking_id' => 'SJ-2026-0003',
            'title' => 'Unassigned Artificial Intelligence Research Paper',
            'abstract' => 'Unassigned paper waiting for editor claim.',
            'keywords' => 'ai, ml',
            'article_type' => 'Research Article',
            'subject_area' => 'Computer Science',
            'author_name' => 'Dr. Confidential Author',
            'author_email' => 'author@sanmatijournal.in',
            'author_phone' => '+91-9876543210',
            'institution' => 'Indian Institute of Science',
            'country' => 'India',
            'file_path' => 'submissions/manuscript_003.pdf',
            'status' => 'submitted',
        ]);
    }

    /** TEST 1: Editor assigns Reviewer A -> SUCCESS */
    public function test_editor_can_assign_reviewer_to_owned_submission(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('submission_reviews', [
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
        ]);
    }

    /** TEST 2: Admin assigns Reviewer A -> SUCCESS */
    public function test_admin_can_assign_reviewer_to_any_submission(): void
    {
        $response = $this->actingAs($this->admin)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('submission_reviews', [
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
        ]);
    }

    /** TEST 3: Author attempts reviewer assignment -> HTTP 403 */
    public function test_author_cannot_assign_reviewer(): void
    {
        $response = $this->actingAs($this->author)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(403);
    }

    /** TEST 4: Reviewer attempts reviewer assignment -> HTTP 403 */
    public function test_reviewer_cannot_assign_reviewer(): void
    {
        $response = $this->actingAs($this->reviewer1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer2->id,
        ]);

        $response->assertStatus(403);
    }

    /** TEST 5: Guest attempts reviewer assignment -> HTTP 302 /login */
    public function test_guest_is_redirected_to_login_on_assignment_attempt(): void
    {
        $response = $this->post("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    /** TEST 6: Invalid reviewer_id -> HTTP 422 */
    public function test_assignment_fails_when_reviewer_id_missing_or_invalid(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => 'not-an-integer',
        ]);

        $response->assertStatus(422);
    }

    /** TEST 7: Assign an author as reviewer -> HTTP 422 */
    public function test_assigning_author_as_reviewer_is_rejected(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->author->id,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 8: Assign an editor as reviewer -> HTTP 422 */
    public function test_assigning_editor_as_reviewer_is_rejected(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->editor2->id,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 8B: Assign an admin as reviewer -> HTTP 422 */
    public function test_assigning_admin_as_reviewer_is_rejected(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->admin->id,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 9: Assign nonexistent user -> HTTP 422 */
    public function test_assigning_nonexistent_user_is_rejected(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => 99999,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 10: Reviewer A queries own assignment -> VISIBLE */
    public function test_reviewer_can_see_own_assigned_reviews(): void
    {
        SubmissionReview::create([
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'invited_at'    => now(),
        ]);

        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');

        $response->assertStatus(200);
        $response->assertSee('SJ-2026-0001');
    }

    /** TEST 11: Reviewer A cannot see Reviewer B assignment -> ZERO RESULTS */
    public function test_reviewer_a_cannot_see_reviewer_b_assignment(): void
    {
        // Reviewer B assignment
        SubmissionReview::create([
            'submission_id' => $this->submission2->id,
            'reviewer_id'   => $this->reviewer2->id,
            'status'        => 'invited',
            'invited_at'    => now(),
        ]);

        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');

        $response->assertStatus(200);
        $response->assertDontSee('SJ-2026-0002');
    }

    /** TEST 12: Reviewer A attempts direct access to Reviewer B review ID -> HTTP 403 */
    public function test_reviewer_a_direct_access_to_reviewer_b_review_is_forbidden(): void
    {
        $reviewB = SubmissionReview::create([
            'submission_id' => $this->submission2->id,
            'reviewer_id'   => $this->reviewer2->id,
            'status'        => 'invited',
            'invited_at'    => now(),
        ]);

        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$reviewB->id}");

        $response->assertStatus(403);
    }

    /** TEST 13: Duplicate reviewer assignment -> Rejected safely */
    public function test_duplicate_reviewer_assignment_is_rejected(): void
    {
        // First assignment
        $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ])->assertStatus(201);

        // Second assignment (Duplicate)
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(422);
    }

    /** TEST 14: Invalid submission_id -> HTTP 404 */
    public function test_assigning_reviewer_to_nonexistent_submission_returns_404(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/99999/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(404);
    }

    /** TEST 15: Foreign-key integrity -> Database rejects invalid reference */
    public function test_foreign_key_integrity_prevents_invalid_database_insert(): void
    {
        $this->expectException(\Illuminate\Database\QueryException::class);

        DB::table('submission_reviews')->insert([
            'submission_id' => 99999,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }

    /** TEST 16: Mass assignment attempt (`status: "completed"`) -> BLOCKED / Forced server side to 'invited' */
    public function test_mass_assignment_of_status_or_ids_is_blocked(): void
    {
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'submission_id' => 99999, // Attempt override
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'completed', // Malicious status override attempt
        ]);

        $response->assertStatus(201);

        $this->assertDatabaseHas('submission_reviews', [
            'submission_id' => $this->submission1->id, // Bound to route parameter, not client body
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited', // Forced to invited
        ]);

        $this->assertDatabaseMissing('submission_reviews', [
            'status' => 'completed',
        ]);
    }

    /** TEST 17: Reviewer payload inspection -> NO AUTHOR IDENTITY EXPOSED */
    public function test_reviewer_dashboard_payload_does_not_contain_author_identity(): void
    {
        SubmissionReview::create([
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'invited_at'    => now(),
        ]);

        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');

        $response->assertStatus(200);
        $response->assertDontSee('Dr. Confidential Author');
        $response->assertDontSee('author@sanmatijournal.in');
        $response->assertDontSee('Indian Institute of Science');
        $response->assertDontSee('+91-9876543210');
    }

    /** TEST 18: Admin access to assignment records -> ALLOW */
    public function test_admin_can_view_review_assignment(): void
    {
        $review = SubmissionReview::create([
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'invited_at'    => now(),
        ]);

        $response = $this->actingAs($this->admin)->get("/reviewer/reviews/{$review->id}");

        $response->assertStatus(200);
    }

    /** TEST 19: Editor ownership isolation -> EDITOR CANNOT ASSIGN UNAUTHORIZED SUBMISSION */
    public function test_editor2_cannot_assign_reviewer_to_editor1_submission(): void
    {
        // Editor 2 attempts assignment on Submission 1 (owned by Editor 1)
        $response = $this->actingAs($this->editor2)->postJson("/editor/submissions/{$this->submission1->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(403);
    }

    /** TEST 19B: Editor cannot assign reviewer to unassigned submission -> HTTP 403 */
    public function test_editor_cannot_assign_reviewer_to_unassigned_submission(): void
    {
        // Editor 1 attempts assignment on unassigned submission (not claimed yet)
        $response = $this->actingAs($this->editor1)->postJson("/editor/submissions/{$this->unassignedSubmission->id}/reviewers", [
            'reviewer_id' => $this->reviewer1->id,
        ]);

        $response->assertStatus(403);
    }

    /** TEST 20: Regression test -> Existing Author, Editor, Admin, Reviewer routes remain operational */
    public function test_existing_portal_routes_remain_operational(): void
    {
        $this->actingAs($this->author)->get('/author/dashboard')->assertStatus(200);
        $this->actingAs($this->editor1)->get('/editor/dashboard')->assertStatus(200);
        $this->actingAs($this->admin)->get('/admin/submissions')->assertStatus(200);
        $this->actingAs($this->reviewer1)->get('/reviewer/dashboard')->assertStatus(200);
    }

    /** CONCURRENCY TEST: Concurrent duplicate assignment prevention */
    public function test_database_unique_constraint_prevents_duplicate_reviews(): void
    {
        DB::table('submission_reviews')->insert([
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);

        $this->expectException(\Illuminate\Database\QueryException::class);

        DB::table('submission_reviews')->insert([
            'submission_id' => $this->submission1->id,
            'reviewer_id'   => $this->reviewer1->id,
            'status'        => 'invited',
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }
}
