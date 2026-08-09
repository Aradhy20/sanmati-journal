<?php

namespace Tests\Feature;

use App\Models\Submission;
use App\Models\SubmissionReview;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ReviewerManuscriptAccessTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected User $editor;
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

        // Fake local disk for secure manuscript testing
        Storage::fake('local');

        // Create Users
        $this->admin = User::create([
            'email' => 'admin@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Admin User',
            'role' => 'admin',
        ]);

        $this->editor = User::create([
            'email' => 'editor@sanmatijournal.in',
            'password' => bcrypt('Password123!'),
            'full_name' => 'Editor User',
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

        // Put sample manuscript files in private storage disk 'local'
        Storage::disk('local')->put('submissions/manuscript_001.pdf', '%PDF-1.4 Mock Manuscript PDF Content for Testing');
        Storage::disk('local')->put('submissions/manuscript_002.pdf', '%PDF-1.4 Mock Manuscript PDF Content for Testing 2');

        // Create Submissions
        $this->submission1 = Submission::create([
            'user_id' => $this->author->id,
            'editor_id' => $this->editor->id,
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
            'editor_id' => $this->editor->id,
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

        // Create Review Assignments
        $this->review1 = SubmissionReview::create([
            'submission_id' => $this->submission1->id,
            'reviewer_id' => $this->reviewer1->id,
            'status' => 'invited',
            'invited_at' => now(),
        ]);

        $this->review2 = SubmissionReview::create([
            'submission_id' => $this->submission2->id,
            'reviewer_id' => $this->reviewer2->id,
            'status' => 'invited',
            'invited_at' => now(),
        ]);
    }

    /** TEST 1: Reviewer A accesses own assigned manuscript -> HTTP 200 */
    public function test_reviewer_a_can_access_own_assigned_manuscript(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(200);
        $response->assertHeader('Content-Disposition', 'inline; filename="Sanmati-Manuscript-SJ-2026-0001.pdf"');
    }

    /** TEST 2: Reviewer B accesses Reviewer A manuscript -> HTTP 403 */
    public function test_reviewer_b_cannot_access_reviewer_a_manuscript(): void
    {
        $response = $this->actingAs($this->reviewer2)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(403);
    }

    /** TEST 3: Reviewer A changes review ID to Reviewer B review -> HTTP 403 */
    public function test_reviewer_a_changing_review_id_to_reviewer_b_review_is_forbidden(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review2->id}/manuscript");

        $response->assertStatus(403);
    }

    /** TEST 4: Attempt to manipulate submission relationship -> DENIED (HTTP 403) */
    public function test_attempt_to_manipulate_submission_relationship_is_denied(): void
    {
        // Parameter manipulation attempts are ignored/denied because route model binding resolves the DB record
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review2->id}/manuscript?submission_id={$this->submission1->id}");

        $response->assertStatus(403);
    }

    /** TEST 5: Tracking ID alone cannot authorize access -> NO ACCESS */
    public function test_tracking_id_alone_cannot_authorize_reviewer_manuscript_access(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/manuscript/SJ-2026-0002");

        $response->assertStatus(404);
    }

    /** TEST 6: Author accesses reviewer manuscript endpoint -> HTTP 403 */
    public function test_author_cannot_access_reviewer_manuscript_endpoint(): void
    {
        $response = $this->actingAs($this->author)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(403);
    }

    /** TEST 7: Editor accesses reviewer manuscript endpoint -> HTTP 403 */
    public function test_editor_cannot_access_reviewer_manuscript_endpoint(): void
    {
        $response = $this->actingAs($this->editor)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(403);
    }

    /** TEST 8: Guest accesses endpoint -> HTTP 302 /login */
    public function test_guest_is_redirected_to_login_on_manuscript_access(): void
    {
        $response = $this->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    /** TEST 9: Admin accesses manuscript -> HTTP 200 */
    public function test_admin_can_access_reviewer_manuscript_endpoint(): void
    {
        $response = $this->actingAs($this->admin)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(200);
    }

    /** TEST 10: Nonexistent review -> HTTP 404 */
    public function test_accessing_nonexistent_review_returns_404(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/99999/manuscript");

        $response->assertStatus(404);
    }

    /** TEST 11: Missing manuscript file on disk -> HTTP 404 */
    public function test_missing_manuscript_file_on_disk_returns_404(): void
    {
        Storage::disk('local')->delete('submissions/manuscript_001.pdf');

        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(404);
    }

    /** TEST 12: Path traversal attempt -> DENIED / HTTP 404 */
    public function test_path_traversal_attempt_in_submission_file_path_is_rejected(): void
    {
        $this->submission1->update(['file_path' => '../../secret.txt']);

        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(404);
    }

    /** TEST 13: Client filename manipulation -> Client filename ignored, server filename used */
    public function test_client_filename_manipulation_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript?filename=malicious.exe");

        $response->assertStatus(200);
        $response->assertHeader('Content-Disposition', 'inline; filename="Sanmati-Manuscript-SJ-2026-0001.pdf"');
    }

    /** TEST 14: Client arbitrary path manipulation -> DENIED */
    public function test_client_arbitrary_path_manipulation_is_ignored(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript?path=/etc/passwd");

        $response->assertStatus(200);
        $response->assertHeader('Content-Disposition', 'inline; filename="Sanmati-Manuscript-SJ-2026-0001.pdf"');
    }

    /** TEST 15: Reviewer review exists but manuscript is missing/invalid -> HTTP 404 */
    public function test_unsupported_file_extension_returns_404(): void
    {
        Storage::disk('local')->put('submissions/script.exe', 'binary script content');
        $this->submission1->update(['file_path' => 'submissions/script.exe']);

        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(404);
    }

    /** TEST 16: Absolute filesystem path is never exposed in response headers -> PASS */
    public function test_absolute_filesystem_path_is_never_exposed(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(200);
        $disposition = $response->headers->get('Content-Disposition');
        $this->assertStringNotContainsString('storage/app/private', $disposition);
        $this->assertStringNotContainsString('/Users/', $disposition);
    }

    /** TEST 17: Author identity is absent from response headers -> PASS */
    public function test_author_identity_is_absent_from_response_headers(): void
    {
        $response = $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript");

        $response->assertStatus(200);
        $disposition = $response->headers->get('Content-Disposition');
        $this->assertStringNotContainsString('Confidential', $disposition);
        $this->assertStringNotContainsString('Author', $disposition);
        $this->assertStringNotContainsString('author@sanmatijournal.in', $disposition);
    }

    /** TEST 18: No public Storage::url() is generated -> PASS */
    public function test_no_public_storage_url_is_generated(): void
    {
        $response = $this->actingAs($this->reviewer1)->get('/reviewer/dashboard');

        $response->assertStatus(200);
        $response->assertDontSee('/storage/submissions/');
        $response->assertDontSee('storage/app/public');
    }

    /** TEST 19: Reviewer can access only own assignments -> PASS */
    public function test_reviewer_can_access_only_own_assignments(): void
    {
        // Reviewer 1 can access Review 1
        $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review1->id}/manuscript")->assertStatus(200);

        // Reviewer 1 cannot access Review 2
        $this->actingAs($this->reviewer1)->get("/reviewer/reviews/{$this->review2->id}/manuscript")->assertStatus(403);
    }

    /** TEST 20: Existing author/editor/admin manuscript access continues working -> NO REGRESSION */
    public function test_existing_admin_manuscript_access_remains_operational(): void
    {
        $response = $this->actingAs($this->admin)->get("/admin/submissions/{$this->submission1->id}/download");

        $response->assertStatus(200);
    }
}
