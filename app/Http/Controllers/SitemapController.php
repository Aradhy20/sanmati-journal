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
            $urls = [
                ['loc' => $baseUrl . '/', 'priority' => '1.0', 'changefreq' => 'daily'],
                ['loc' => $baseUrl . '/archive', 'priority' => '0.9', 'changefreq' => 'weekly'],
                ['loc' => $baseUrl . '/submission-guidelines/call-for-papers', 'priority' => '0.9', 'changefreq' => 'weekly'],
                ['loc' => $baseUrl . '/editorial-team/editorial-board', 'priority' => '0.8', 'changefreq' => 'monthly'],
                ['loc' => $baseUrl . '/about-journal', 'priority' => '0.8', 'changefreq' => 'monthly'],
                ['loc' => $baseUrl . '/contact', 'priority' => '0.7', 'changefreq' => 'yearly'],
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
