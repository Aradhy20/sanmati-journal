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
            '/basic-info/about-journal',
            '/basic-info/vision-mission',
            '/basic-info/objective-scope',
            '/basic-info/journal-info',
            '/editorial-team',
            '/editorial-team/editors',
            '/editorial-team/editorial-board',
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
            '/awards',
            '/book-publication',
            '/compliance',
            '/archive',
            '/contact',
            '/gallery-view',
            '/gallery/photo',
            '/gallery/news',
            '/login',
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
}
