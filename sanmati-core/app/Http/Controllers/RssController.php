<?php

namespace App\Http\Controllers;

use App\Models\Paper;
use Illuminate\Support\Facades\Cache;

class RssController extends Controller
{
    public function feed()
    {
        $xml = Cache::remember('rss_feed.xml', 3600, function () {
            $papers = Paper::latest()->take(50)->get();
            $baseUrl = rtrim(config('app.url', 'https://sanmatijournal.in'), '/');
            $now = now()->toRfc2822String();

            $rss = '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL;
            $rss .= '<rss version="2.0" xmlns:atom="http://www.w3.org/205/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">' . PHP_EOL;
            $rss .= '  <channel>' . PHP_EOL;
            $rss .= '    <title>Sanmati Spectrum of Knowledge &amp; Emerging Discourse</title>' . PHP_EOL;
            $rss .= '    <link>' . htmlspecialchars($baseUrl) . '</link>' . PHP_EOL;
            $rss .= '    <description>International peer-reviewed multidisciplinary research journal (ISSN 3108-1819)</description>' . PHP_EOL;
            $rss .= '    <language>en-IN</language>' . PHP_EOL;
            $rss .= '    <pubDate>' . $now . '</pubDate>' . PHP_EOL;
            $rss .= '    <lastBuildDate>' . $now . '</lastBuildDate>' . PHP_EOL;
            $rss .= '    <atom:link href="' . htmlspecialchars($baseUrl . '/rss.xml') . '" rel="self" type="application/rss+xml"/>' . PHP_EOL;

            foreach ($papers as $paper) {
                $paperUrl = $baseUrl . '/article/' . $paper->id;
                $cleanDoi = preg_replace('/^https?:\/\/(dx\.)?doi\.org\//i', '', $paper->doi ?? '');

                $rss .= '    <item>' . PHP_EOL;
                $rss .= '      <title>' . htmlspecialchars($paper->title) . '</title>' . PHP_EOL;
                $rss .= '      <link>' . htmlspecialchars($paperUrl) . '</link>' . PHP_EOL;
                $rss .= '      <guid isPermaLink="true">' . htmlspecialchars($paperUrl) . '</guid>' . PHP_EOL;
                $rss .= '      <description>' . htmlspecialchars($paper->abstract ?? $paper->title) . '</description>' . PHP_EOL;
                $rss .= '      <dc:creator>' . htmlspecialchars($paper->authors) . '</dc:creator>' . PHP_EOL;
                if ($paper->category) {
                    $rss .= '      <category>' . htmlspecialchars($paper->category) . '</category>' . PHP_EOL;
                }
                if ($cleanDoi) {
                    $rss .= '      <dc:identifier>doi:' . htmlspecialchars($cleanDoi) . '</dc:identifier>' . PHP_EOL;
                }
                $rss .= '      <pubDate>' . $paper->created_at->toRfc2822String() . '</pubDate>' . PHP_EOL;
                $rss .= '    </item>' . PHP_EOL;
            }

            $rss .= '  </channel>' . PHP_EOL;
            $rss .= '</rss>';

            return $rss;
        });

        return response($xml, 200)->header('Content-Type', 'application/rss+xml; charset=utf-8');
    }
}
