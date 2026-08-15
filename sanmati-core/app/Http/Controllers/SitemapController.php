<?php

namespace App\Http\Controllers;

use App\Models\Paper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function index()
    {
        // Clear stale cached sitemap if purge requested or if cached sitemap contains localhost references
        if (request()->has('purge') || (Cache::has('sitemap.xml') && str_contains(Cache::get('sitemap.xml'), 'localhost'))) {
            Cache::forget('sitemap.xml');
        }

        // Cache the sitemap for 24 hours to prevent DB spam
        $content = Cache::remember('sitemap.xml', 86400, function () {
            $papers = Paper::latest()->get();
            $baseUrl = 'https://sanmatijournal.in';

            // Static pages
            $static_updated = now()->toAtomString();
            $urls = [
                // Core
                ['loc' => $baseUrl . '/',                                              'priority' => '1.0', 'changefreq' => 'daily',   'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/about-journal',                                 'priority' => '0.9', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/archive',                                       'priority' => '0.9', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/current-issue',                                 'priority' => '0.9', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/contact',                                       'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/submission-guidelines/call-for-papers',         'priority' => '0.9', 'changefreq' => 'weekly',  'lastmod' => $static_updated],

                // About
                ['loc' => $baseUrl . '/basic-info/about-journal',                      'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/basic-info/vision-mission',                     'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/basic-info/objective-scope',                    'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/basic-info/journal-info',                       'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/basic-info/indexing',                           'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/about-foundation',                              'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],

                // Editorial
                ['loc' => $baseUrl . '/editorial-team/editors',                        'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/editorial-team/editorial-board',                'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/editorial-team/advisory-board',                 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/editorial-team/technical-team',                 'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],

                // Submission Guidelines
                ['loc' => $baseUrl . '/submission-guidelines',                         'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/submission-guidelines/areas',                   'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/submission-guidelines/publication-charges',     'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/submission-guidelines/important-info',          'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/submission-guidelines/review-process',          'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],

                // Publication Policy
                ['loc' => $baseUrl . '/publication-policy/ethics',                    'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/publication-policy/plagiarism',                 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/publication-policy/peer-review',                'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],

                // Academic Events
                ['loc' => $baseUrl . '/academic-events/seminar',                       'priority' => '0.7', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/academic-events/conferences',                   'priority' => '0.6', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/academic-events/workshop',                      'priority' => '0.6', 'changefreq' => 'weekly',  'lastmod' => $static_updated],

                // Other Public Pages
                ['loc' => $baseUrl . '/blog',                                          'priority' => '0.8', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/downloads',                                     'priority' => '0.8', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/publication-policy/copyright',                  'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/reviewer-guidelines',                           'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/book-publication',                              'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/awards',                                        'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/compliance',                                    'priority' => '0.5', 'changefreq' => 'yearly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/track-manuscript',                              'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
            ];

            try {
                if (\App\Models\Gallery::exists() && \App\Models\Gallery::count() > 0) {
                    $urls[] = ['loc' => $baseUrl . '/gallery/photo',                                 'priority' => '0.5', 'changefreq' => 'monthly', 'lastmod' => $static_updated];
                    $urls[] = ['loc' => $baseUrl . '/media-news',                                    'priority' => '0.5', 'changefreq' => 'weekly',  'lastmod' => $static_updated];
                }
            } catch (\Exception $e) {
                // Table may not exist yet
            }

            // Programmatic Subject Areas
            $subject_slugs = ['science-technology', 'social-sciences', 'arts-humanities', 'management-commerce', 'law-governance', 'education', 'philosophy'];
            foreach ($subject_slugs as $slug) {
                $urls[] = [
                    'loc' => $baseUrl . '/submission-guidelines/areas/' . $slug,
                    'priority' => '0.7',
                    'changefreq' => 'monthly',
                    'lastmod' => $static_updated,
                ];
            }

            // Dynamic Blog Articles from BlogService
            try {
                $blogPosts = \App\Services\BlogService::getPosts();
                foreach ($blogPosts as $post) {
                    $urls[] = [
                        'loc' => $baseUrl . '/blog/' . $post['slug'],
                        'title' => $post['title'],
                        'priority' => '0.8',
                        'changefreq' => 'monthly',
                        'lastmod' => $static_updated,
                        'image' => !empty($post['image']) ? $baseUrl . $post['image'] : $baseUrl . '/logo.webp'
                    ];
                }
            } catch (\Exception $e) {
                // Ignore if service unavailable
            }

            // Dynamic paper pages
            foreach ($papers as $paper) {
                $urls[] = [
                    'loc' => $baseUrl . '/article/' . $paper->id,
                    'title' => $paper->title,
                    'priority' => '0.8',
                    'changefreq' => 'monthly',
                    'lastmod' => $paper->updated_at ? $paper->updated_at->toAtomString() : $static_updated,
                ];
            }

            // De-duplicate URLs by loc
            $uniqueUrls = [];
            foreach ($urls as $url) {
                $uniqueUrls[$url['loc']] = $url;
            }

            // Generate XML with Image namespace
            $xml = '<?xml version="1.0" encoding="UTF-8"?>';
            $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

            foreach ($uniqueUrls as $url) {
                $imageLoc = $url['image'] ?? 'https://sanmatijournal.in/logo.webp';
                $xml .= '<url>';
                $xml .= '<loc>' . htmlspecialchars($url['loc']) . '</loc>';
                if (isset($url['lastmod'])) {
                    $xml .= '<lastmod>' . $url['lastmod'] . '</lastmod>';
                }
                $xml .= '<changefreq>' . $url['changefreq'] . '</changefreq>';
                $xml .= '<priority>' . $url['priority'] . '</priority>';
                $xml .= '<image:image><image:loc>' . htmlspecialchars($imageLoc) . '</image:loc><image:title>' . htmlspecialchars($url['title'] ?? 'Sanmati Spectrum of Knowledge') . '</image:title></image:image>';
                $xml .= '</url>';
            }

            $xml .= '</urlset>';

            return $xml;
        });

        return response($content, 200)
            ->header('Content-Type', 'application/xml');
    }
}
