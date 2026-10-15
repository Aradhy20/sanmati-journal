<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Issue;
use App\Models\Paper;

class SpecialIssueTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        if (!Issue::where('is_current', true)->exists() || !Issue::where('is_special_issue', true)->exists()) {
            $this->seed(\Database\Seeders\ArchivePapersSeeder::class);
        }
    }

    public function test_special_issue_exists_and_is_accessible()
    {
        $response = $this->get('/special-issue');
        $response->assertStatus(200);

        $specialIssue = Issue::where('is_special_issue', true)->first();
        $this->assertNotNull($specialIssue);
        $this->assertEquals('Special Issue', $specialIssue->title);
        $this->assertEquals('October', $specialIssue->month_range);
        $this->assertEquals(2026, $specialIssue->year);
        $this->assertCount(31, $specialIssue->papers);

        // Verify presence on /archive
        $archiveResponse = $this->get('/archive');
        $archiveResponse->assertStatus(200);
        $archiveResponse->assertSee('Special Issue');
        $archiveResponse->assertSee('October');
        $archiveResponse->assertSee('2026');
    }

    public function test_special_issue_articles_have_valid_doi_and_no_fake_metadata()
    {
        $specialIssue = Issue::where('is_special_issue', true)->with('papers')->first();
        $this->assertNotNull($specialIssue);

        foreach ($specialIssue->papers as $paper) {
            $this->assertNotNull($paper->doi, "Paper ID {$paper->id} missing DOI");
            $this->assertStringStartsWith('https://doi.org/10.5281/zenodo.', $paper->doi);
            $this->assertNull($paper->file_url, "Paper ID {$paper->id} should not have fabricated file_url");
            $this->assertNull($paper->abstract, "Paper ID {$paper->id} should not have fabricated abstract");
            $this->assertNull($paper->keywords, "Paper ID {$paper->id} should not have fabricated keywords");
        }
    }

    public function test_special_issue_article_page_accessible()
    {
        $specialIssue = Issue::where('is_special_issue', true)->with('papers')->first();
        $paper = $specialIssue->papers->first();

        $response = $this->get('/article/' . $paper->id);
        $response->assertStatus(200);
    }

    public function test_current_issue_remains_regular_volume_2_issue_2()
    {
        $response = $this->get('/current-issue');
        $response->assertStatus(200);

        // Verify current issue is not special issue
        $currentIssue = Issue::where('is_current', true)->first();
        $this->assertNotNull($currentIssue);
        $this->assertFalse((bool)$currentIssue->is_special_issue);
        $this->assertEquals(2, $currentIssue->volume);
        $this->assertEquals(2, $currentIssue->number);
    }

    public function test_sitemap_contains_special_issue_and_articles()
    {
        $response = $this->get('/sitemap.xml');
        $response->assertStatus(200);
        $content = $response->getContent();

        $this->assertStringContainsString('<loc>' . url('/special-issue') . '</loc>', $content);

        $specialIssue = Issue::where('is_special_issue', true)->with('papers')->first();
        foreach ($specialIssue->papers->take(5) as $paper) {
            $this->assertStringContainsString('<loc>' . url('/article/' . $paper->id) . '</loc>', $content);
        }
    }

    public function test_robots_txt_allows_special_issue()
    {
        $response = $this->get('/robots.txt');
        $response->assertStatus(200);
        $content = $response->getContent();

        $this->assertStringContainsString('Allow: /special-issue', $content);
    }
}
