<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Issue;
use App\Models\Paper;
use Inertia\Testing\AssertableInertia as Assert;

class HomepageShowcaseTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        if (!Issue::where('volume', '2')->where('number', '2')->where('is_current', true)->exists()) {
            $this->seed(\Database\Seeders\ArchivePapersSeeder::class);
        }
    }

    public function test_homepage_loads_verified_current_issue_and_featured_papers()
    {
        $response = $this->get('/');
        $response->assertStatus(200);

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has('currentIssue', fn (Assert $issue) => $issue
                ->where('volume', '2')
                ->where('number', '2')
                ->where('year', 2026)
                ->where('is_current', 1)
                ->where('is_special_issue', 0)
                ->has('papers')
                ->etc()
            )
            ->has('featuredPapers', 6)
            ->where('featuredPapers', function ($papers) {
                // Ensure no paper is the complete issue book
                foreach ($papers as $paper) {
                    if ($paper['category'] === 'Complete Issue Book') {
                        return false;
                    }
                    if (empty($paper['title']) || empty($paper['authors'])) {
                        return false;
                    }
                }
                return true;
            })
        );
    }

    public function test_current_issue_papers_exclude_complete_issue_book()
    {
        $response = $this->get('/');
        $response->assertStatus(200);

        $response->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->where('currentIssue.papers', function ($papers) {
                foreach ($papers as $paper) {
                    if ($paper['category'] === 'Complete Issue Book') {
                        return false;
                    }
                }
                return true;
            })
        );
    }
}
