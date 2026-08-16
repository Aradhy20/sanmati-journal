<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Issue;
use App\Models\Paper;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleRouteTest extends TestCase
{
    use DatabaseTransactions;

    public function test_article_page_renders_cleanly_with_metadata()
    {
        $issue = Issue::create([
            'volume' => 1,
            'number' => 1,
            'year' => 2026,
            'title' => 'Vol 1 Issue 1',
            'status' => 'published',
            'is_active' => true,
        ]);

        $paper = Paper::create([
            'issue_id' => $issue->id,
            'title' => 'Empirical Research in Modern Knowledge Systems',
            'slug' => 'empirical-research-modern-knowledge-systems',
            'authors' => 'Dr. A. Sharma, Prof. B. Verma',
            'abstract' => 'This paper explores emerging paradigms in multidisciplinary academic research.',
            'keywords' => 'Research, Multidisciplinary, Knowledge Systems',
            'file_url' => 'pdfs/test.pdf',
            'doi' => '10.5281/zenodo.1234567',
        ]);

        $this->withoutExceptionHandling();
        $response = $this->get('/article/' . $paper->id);

        $response->assertStatus(200);
        $response->assertSee('Empirical Research in Modern Knowledge Systems', false);
    }
}
