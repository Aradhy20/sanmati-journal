<?php

namespace App\Http\Controllers;

use App\Models\Paper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function index()
    {
        // Cache the sitemap for 24 hours to prevent DB spam
        $content = Cache::remember('sitemap.xml', 86400, function () {
            $papers = Paper::latest()->get();
            $baseUrl = config('app.url');

            // Static pages
            $static_updated = now()->toAtomString();
            $urls = [
                // Core
                ['loc' => $baseUrl . '/',                                              'priority' => '1.0', 'changefreq' => 'daily',   'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/archive',                                       'priority' => '0.9', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
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

                // Other
                ['loc' => $baseUrl . '/book-publication',                              'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/awards',                                        'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/compliance',                                    'priority' => '0.5', 'changefreq' => 'yearly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/track-manuscript',                              'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/gallery/photo',                                 'priority' => '0.5', 'changefreq' => 'monthly', 'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/media-news',                                    'priority' => '0.5', 'changefreq' => 'weekly',  'lastmod' => $static_updated],
                ['loc' => $baseUrl . '/contact',                                       'priority' => '0.6', 'changefreq' => 'yearly',  'lastmod' => $static_updated],
            ];


            // Dynamic paper pages (Wait, we will map them using their ID since we don't have slugs)
            foreach ($papers as $paper) {
                $urls[] = [
                    'loc' => $baseUrl . '/article/' . $paper->id,
                    'priority' => '0.8',
                    'changefreq' => 'monthly',
                    'lastmod' => $paper->updated_at->toAtomString(),
                ];
            }

            // Generate XML
            $xml = '<?xml version="1.0" encoding="UTF-8"?>';
            $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

            foreach ($urls as $url) {
                $xml .= '<url>';
                $xml .= '<loc>' . htmlspecialchars($url['loc']) . '</loc>';
                if (isset($url['lastmod'])) {
                    $xml .= '<lastmod>' . $url['lastmod'] . '</lastmod>';
                }
                $xml .= '<changefreq>' . $url['changefreq'] . '</changefreq>';
                $xml .= '<priority>' . $url['priority'] . '</priority>';
                $xml .= '</url>';
            }

            $xml .= '</urlset>';

            return $xml;
        });

        return response($content, 200)
            ->header('Content-Type', 'application/xml');
    }
}
