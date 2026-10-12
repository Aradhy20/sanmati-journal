<?php

namespace Tests\Feature;

use App\Models\Issue;
use App\Models\Paper;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class Volume3IssuesTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        if (!Issue::where('volume', 2)->where('number', 2)->exists()) {
            $this->seed(\Database\Seeders\ArchivePapersSeeder::class);
        }
    }

    public function test_volume_3_issues_exist_and_accessible()
    {
        // Query Volume 3 Issues from database
        $vol3Iss1 = Issue::where('volume', 3)->where('number', 1)->first();
        $vol3Iss2 = Issue::where('volume', 3)->where('number', 2)->first();
        $vol3Iss3 = Issue::where('volume', 3)->where('number', 3)->first();

        $this->assertNotNull($vol3Iss1, 'Volume 3 Issue 1 must exist');
        $this->assertNotNull($vol3Iss2, 'Volume 3 Issue 2 must exist');
        $this->assertNotNull($vol3Iss3, 'Volume 3 Issue 3 must exist');

        $this->assertEquals(25, $vol3Iss1->papers()->count());
        $this->assertEquals(28, $vol3Iss2->papers()->count());
        $this->assertEquals(26, $vol3Iss3->papers()->count());

        // Check routes return 200
        $response1 = $this->get('/issue/3/1');
        $response1->assertStatus(200);
        $response1->assertSee('Volume 3, Issue 1');

        $response2 = $this->get('/issue/3/2');
        $response2->assertStatus(200);
        $response2->assertSee('Volume 3, Issue 2');

        $response3 = $this->get('/issue/3/3');
        $response3->assertStatus(200);
        $response3->assertSee('E-COMMERCE');

        $article = Paper::where('doi', 'https://doi.org/10.5281/zenodo.23301252')->first();
        $this->assertNotNull($article);
        $responseArticle = $this->get("/article/{$article->id}");
        $responseArticle->assertStatus(200);
        $responseArticle->assertSee('E-COMMERCE');
    }

    public function test_volume_3_articles_have_valid_doi_and_no_fake_pdf()
    {
        $paper = Paper::whereHas('issue', function ($q) {
            $q->where('volume', 3);
        })->first();

        $this->assertNotNull($paper);
        $this->assertNotEmpty($paper->doi);
        $this->assertStringContainsString('10.5281/zenodo.', $paper->doi);
        $this->assertNull($paper->file_url);

        $response = $this->get("/article/{$paper->id}");
        $response->assertStatus(200);
        $cleanDoi = preg_replace('/^https?:\/\/(dx\.)?doi\.org\//i', '', $paper->doi);
        $response->assertSee('name="citation_doi" content="' . $cleanDoi . '"', false);
        // Ensure citation_pdf_url is NOT emitted for Volume 3 paper
        $response->assertDontSee('name="citation_pdf_url"');
    }

    public function test_current_issue_is_volume_2_issue_2()
    {
        $current = Issue::where('is_current', true)->first();
        $this->assertNotNull($current);
        $this->assertEquals(2, $current->volume);
        $this->assertEquals(2, $current->number);

        $response = $this->get('/current-issue');
        $response->assertStatus(200);
        $response->assertSee('Volume 2, Issue 2');
    }

    public function test_sitemap_contains_volume_3_issue_and_article_urls()
    {
        $response = $this->get('/sitemap.xml');
        $response->assertStatus(200);
        $response->assertSee('<loc>https://sanmatijournal.in/issue/3/1</loc>', false);
        $response->assertSee('<loc>https://sanmatijournal.in/issue/3/2</loc>', false);
        $response->assertSee('<loc>https://sanmatijournal.in/issue/3/3</loc>', false);
    }
}
