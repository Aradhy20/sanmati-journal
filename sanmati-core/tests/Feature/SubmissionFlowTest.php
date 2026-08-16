<?php

namespace Tests\Feature;

use App\Mail\AuthorConfirmationMail;
use App\Mail\PaperSubmissionMail;
use App\Models\Submission;
use App\Models\SubmissionStatusHistory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SubmissionFlowTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('local');
        Mail::fake();
    }

    public function test_valid_manuscript_submission_succeeds_and_creates_records(): void
    {
        $file = UploadedFile::fake()->create('AradhyJainResume.pdf', 500, 'application/pdf');

        $payload = [
            'title'              => 'Comparative Study of Machine Learning in Peer Review',
            'article_type'       => 'Original Research',
            'abstract'           => 'This paper presents a thorough empirical analysis of machine learning frameworks.',
            'keywords'           => 'Machine Learning, Peer Review, AI, Academic Publishing',
            'author_name'        => 'Dr. Aradhya Jain',
            'author_email'       => 'aradhya@example.com',
            'author_phone'       => '+91 9876543210',
            'institution'        => 'Indian Institute of Science',
            'country'            => 'India',
            'subject_area'       => 'Computer Science',
            'authors'            => [],
            'consent'            => true,
            'ai_precheck'        => json_encode(['score' => 95, 'checks' => []]),
            'website'            => '',
        ];

        $response = $this->post('/submission-guidelines/call-for-papers', array_merge($payload, [
            'manuscript' => $file,
        ]), [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasNoErrors();
        $response->assertSessionHas('success');

        $flashSuccess = session('success');
        $this->assertIsArray($flashSuccess);
        $this->assertArrayHasKey('tracking_id', $flashSuccess);
        $this->assertStringStartsWith('SJ-', $flashSuccess['tracking_id']);

        // Verify database entry
        $this->assertDatabaseHas('submissions', [
            'title'        => 'Comparative Study of Machine Learning in Peer Review',
            'author_name'  => 'Dr. Aradhya Jain',
            'author_email' => 'aradhya@example.com',
            'status'       => 'submitted',
            'country'      => 'India',
        ]);

        $submission = Submission::where('tracking_id', $flashSuccess['tracking_id'])->first();
        $this->assertNotNull($submission);

        // Verify status history
        $this->assertDatabaseHas('submission_status_histories', [
            'submission_id' => $submission->id,
            'to_status'     => 'submitted',
        ]);

        // Verify file stored in local storage disk
        Storage::disk('local')->assertExists($submission->file_path);

        // Verify emails queued
        Mail::assertQueued(PaperSubmissionMail::class);
        Mail::assertQueued(AuthorConfirmationMail::class);
    }

    public function test_docx_manuscript_submission_succeeds(): void
    {
        $file = UploadedFile::fake()->create('manuscript.docx', 500, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

        $payload = [
            'title'        => 'Docx Manuscript Submission Test',
            'article_type' => 'Review Article',
            'abstract'     => 'An abstract for the docx manuscript submission test.',
            'keywords'     => 'DOCX, Test, Journal',
            'author_name'  => 'Author Name',
            'author_email' => 'author@example.com',
            'country'      => 'India',
            'institution'  => 'University',
            'website'      => '',
            'manuscript'   => $file,
        ];

        $response = $this->post('/submission-guidelines/call-for-papers', $payload, [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseHas('submissions', [
            'title' => 'Docx Manuscript Submission Test',
        ]);
    }

    public function test_missing_required_fields_fails_validation(): void
    {
        $response = $this->post('/submission-guidelines/call-for-papers', [
            'title' => '',
            'abstract' => '',
            'keywords' => '',
            'author_name' => '',
            'author_email' => '',
            'country' => '',
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors([
            'title',
            'abstract',
            'keywords',
            'article_type',
            'author_name',
            'author_email',
            'country',
            'manuscript',
        ]);
    }

    public function test_invalid_email_fails_validation(): void
    {
        $file = UploadedFile::fake()->create('manuscript.pdf', 100, 'application/pdf');

        $response = $this->post('/submission-guidelines/call-for-papers', [
            'title'        => 'Valid Title',
            'article_type' => 'Original Research',
            'abstract'     => 'Valid Abstract',
            'keywords'     => 'Keyword1',
            'author_name'  => 'Valid Author',
            'author_email' => 'not-a-valid-email',
            'country'      => 'India',
            'manuscript'   => $file,
            'website'      => '',
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(['author_email']);
    }

    public function test_unsupported_file_format_fails_validation(): void
    {
        $file = UploadedFile::fake()->create('malicious.exe', 100, 'application/x-msdownload');

        $response = $this->post('/submission-guidelines/call-for-papers', [
            'title'        => 'Valid Title',
            'article_type' => 'Original Research',
            'abstract'     => 'Valid Abstract',
            'keywords'     => 'Keyword1',
            'author_name'  => 'Valid Author',
            'author_email' => 'author@example.com',
            'country'      => 'India',
            'manuscript'   => $file,
            'website'      => '',
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(['manuscript']);
    }

    public function test_oversized_file_fails_validation(): void
    {
        // 25 MB file exceeds 20 MB (20480 KB) limit
        $file = UploadedFile::fake()->create('large.pdf', 25600, 'application/pdf');

        $response = $this->post('/submission-guidelines/call-for-papers', [
            'title'        => 'Valid Title',
            'article_type' => 'Original Research',
            'abstract'     => 'Valid Abstract',
            'keywords'     => 'Keyword1',
            'author_name'  => 'Valid Author',
            'author_email' => 'author@example.com',
            'country'      => 'India',
            'manuscript'   => $file,
            'website'      => '',
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(['manuscript']);
    }

    public function test_honeypot_spam_is_intercepted_without_db_creation(): void
    {
        $file = UploadedFile::fake()->create('bot_paper.pdf', 100, 'application/pdf');

        $response = $this->post('/submission-guidelines/call-for-papers', [
            'title'        => 'Spam Paper Title',
            'article_type' => 'Original Research',
            'abstract'     => 'Spam Abstract',
            'keywords'     => 'Spam',
            'author_name'  => 'Spam Bot',
            'author_email' => 'bot@spammer.com',
            'country'      => 'India',
            'manuscript'   => $file,
            'website'      => 'https://spamurl.com', // Honeypot filled
        ], [
            'X-Inertia' => 'true',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseMissing('submissions', [
            'author_email' => 'bot@spammer.com',
        ]);
    }
}
