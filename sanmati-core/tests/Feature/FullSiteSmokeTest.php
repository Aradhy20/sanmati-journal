<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FullSiteSmokeTest extends TestCase
{
    /**
     * Test basic routes are accessible.
     */
    public function test_basic_routes_are_accessible(): void
    {
        $routes = [
            '/',
            '/about-journal',
            '/about-foundation',
            '/basic-info/vision-mission',
            '/basic-info/objective-scope',
            '/basic-info/journal-info',
            '/basic-info/indexing',
            '/editorial-team/editors',
            '/editorial-team/editorial-board',
            '/editorial-team/advisory-board',
            '/editorial-team/technical-team',
            '/submission-guidelines',
            '/submission-guidelines/call-for-papers',
            '/submission-guidelines/areas',
            '/submission-guidelines/important-info',
            '/submission-guidelines/publication-charges',
            '/submission-guidelines/review-process',
            '/academic-events/seminar',
            '/academic-events/conferences',
            '/academic-events/workshop',
            '/publication-policy/ethics',
            '/publication-policy/plagiarism',
            '/publication-policy/peer-review',
            '/publication-policy/copyright',
            '/reviewer-guidelines',
            '/awards',
            '/book-publication',
            '/compliance',
            '/archive',
            '/special-issue',
            '/current-issue',
            '/contact',
            '/gallery-view',
            '/gallery/photo',
            '/media-news',
            '/blog',
            '/resources',
            '/search',
            '/downloads',
            '/track-manuscript',
            '/announcements/international-seminar-gen-z-2026',
            '/antigravity-sandbox',
            '/sitemap.xml',
            '/robots.txt',
            '/rss.xml',
        ];

        foreach ($routes as $route) {
            $response = $this->get($route);
            if ($response->status() !== 200) {
                 echo "Failed route: $route with status " . $response->status() . "\n";
            }
            $response->assertStatus(200);
        }
    }

    public function test_login_page_is_accessible(): void
    {
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

    public function test_invalid_route_returns_404(): void
    {
        $response = $this->get('/invalid-route-that-does-not-exist');
        $response->assertStatus(404);
    }
}
