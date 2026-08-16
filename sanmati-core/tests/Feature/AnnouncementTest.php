<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Services\AnnouncementService;
use App\Models\Paper;
use App\Models\Issue;

class AnnouncementTest extends TestCase
{
    use RefreshDatabase;

    public function test_conference_announcement_route_returns_200_with_props()
    {
        $response = $this->get('/announcements/international-seminar-gen-z-2026');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Announcements/Show')
            ->has('announcement')
            ->where('announcement.id', 'international-seminar-gen-z-2026')
            ->where('announcement.is_registration_deadline_passed', true)
            ->where('announcement.is_paper_deadline_active', true)
            ->where('announcement.paper_deadline_formatted', '30 अगस्त 2026')
            ->where('announcement.registration_deadline_formatted', '15 अगस्त 2026')
        );
    }

    public function test_conference_announcement_html_has_seo_and_schema_meta()
    {
        $response = $this->get('/announcements/international-seminar-gen-z-2026');

        $response->assertStatus(200);
        $response->assertSee('International Seminar on Gen Z, Education, Digital Culture &amp; Innovation | Sanmati Journal', false);
        $response->assertSee('<link rel="canonical" href="https://sanmatijournal.in/announcements/international-seminar-gen-z-2026">', false);
        $response->assertSee('name="description"', false);
        $response->assertSee('property="og:title"', false);
        $response->assertSee('property="og:url" content="https://sanmatijournal.in/announcements/international-seminar-gen-z-2026"', false);
        $response->assertSee('name="twitter:card"', false);
        $response->assertSee('https://sanmatijournal.in/#organization', false);
    }

    public function test_announcements_index_redirects_to_featured_seminar()
    {
        $response = $this->get('/announcements');

        $response->assertRedirect('/announcements/international-seminar-gen-z-2026');
    }

    public function test_homepage_receives_featured_announcement_prop()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Home')
            ->has('featuredAnnouncement')
            ->where('featuredAnnouncement.slug', 'international-seminar-gen-z-2026')
        );
    }

    public function test_sitemap_includes_announcement_url_exactly_once()
    {
        $response = $this->get('/sitemap.xml?purge=1');

        $response->assertStatus(200);
        $response->assertHeader('Content-Type', 'application/xml');
        $content = $response->getContent();
        
        $announcementUrl = 'https://sanmatijournal.in/announcements/international-seminar-gen-z-2026';
        $this->assertStringContainsString($announcementUrl, $content);
        $this->assertEquals(1, substr_count($content, "<loc>{$announcementUrl}</loc>"));

        // Validate XML well-formedness
        $xmlObj = simplexml_load_string($content);
        $this->assertNotFalse($xmlObj, 'Sitemap must be valid XML');
    }

    public function test_robots_txt_allows_announcements()
    {
        $response = $this->get('/robots.txt');

        $response->assertStatus(200);
        $response->assertSee('Allow: /announcements/');
    }

    public function test_announcement_service_data_integrity_and_links()
    {
        $announcement = AnnouncementService::getConferenceAnnouncement();

        $this->assertEquals('international-seminar-gen-z-2026', $announcement['slug']);
        $this->assertEquals('3108-1819', $announcement['publication_issn']);
        $this->assertEquals('bacesanmatijournal@gmail.com', $announcement['submission_email']);
        $this->assertEquals('https://chat.whatsapp.com/CXmOENonzJSCG3nNxnTXLq?s=cl&p=a&ilr=0', $announcement['whatsapp_group_url']);
        $this->assertEquals('https://sanmatijournal.in', $announcement['website_url']);
        $this->assertStringStartsWith('https://docs.google.com/forms/', $announcement['registration_url']);
        $this->assertCount(16, $announcement['subtopics']);
        $this->assertCount(3, $announcement['plans']);
        $this->assertTrue($announcement['is_registration_deadline_passed']);
        $this->assertTrue($announcement['is_paper_deadline_active']);
    }

    public function test_analytics_and_gtm_tags_present_in_blade()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('G-5HWBXKRHF4');
        $response->assertSee('GTM-K4FNSFHK');
    }

    public function test_google_scholar_regression_on_published_article()
    {
        $issue = Issue::create([
            'volume' => 2,
            'number' => 1,
            'year' => 2026,
            'title' => 'Vol 2 Issue 1'
        ]);

        $paper = Paper::create([
            'issue_id' => $issue->id,
            'title' => 'Emerging Trends in AI Education',
            'authors' => 'Dr. A. Sharma, Prof. B. Verma',
            'abstract' => 'This is a test abstract discussing AI education paradigms in higher learning.',
            'category' => 'Education',
            'keywords' => 'Artificial Intelligence, Education, Gen Z',
            'doi' => '10.5281/zenodo.1234567',
            'file_path' => 'papers/sample.pdf'
        ]);

        $response = $this->get("/article/{$paper->id}");

        $response->assertStatus(200);
        $response->assertSee('name="citation_title" content="Emerging Trends in AI Education"', false);
        $response->assertSee('name="citation_author" content="Dr. A. Sharma"', false);
        $response->assertSee('name="citation_author" content="Prof. B. Verma"', false);
        $response->assertSee('name="citation_journal_title" content="Sanmati Spectrum of Knowledge & Emerging Discourse"', false);
        $response->assertSee('name="citation_issn" content="3108-1819"', false);
        $response->assertSee('name="citation_pdf_url"', false);
        $response->assertSee('name="citation_keywords" content="Artificial Intelligence, Education, Gen Z"', false);
        $response->assertSee('name="citation_doi" content="10.5281/zenodo.1234567"', false);
        $response->assertSee('ScholarlyArticle', false);
    }

    public function test_seo_regression_on_core_pages()
    {
        $routes = [
            '/',
            '/about-journal',
            '/submission-guidelines',
            '/submission-guidelines/call-for-papers',
            '/submission-guidelines/review-process',
            '/archive',
            '/current-issue',
            '/blog',
        ];

        foreach ($routes as $route) {
            $response = $this->get($route);
            $response->assertStatus(200);
            $response->assertSee('<link rel="canonical"', false);
            $response->assertSee('name="description"', false);
            $response->assertSee('Organization', false);
        }
    }

    public function test_security_sensitive_paths_are_blocked_or_404()
    {
        $blockedRoutes = [
            '/.env',
            '/composer.json',
            '/package.json',
            '/database/database.sqlite',
            '/fix-sachin-name',
        ];

        foreach ($blockedRoutes as $route) {
            $response = $this->get($route);
            $this->assertTrue(
                in_array($response->status(), [403, 404, 405]),
                "Route {$route} returned status {$response->status()} instead of 403/404"
            );
        }
    }
}
