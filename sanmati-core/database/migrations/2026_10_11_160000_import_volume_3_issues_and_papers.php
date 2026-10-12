<?php

use App\Models\Issue;
use App\Models\Paper;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Log;

return new class extends Migration
{
    public function up(): void
    {
        $issuesConfig = [
            'VOLUMN 3 ISSUE 1' => [
                'volume' => '3',
                'number' => '1',
                'year' => 2026,
                'month_range' => 'July – September',
                'status' => 'active',
                'is_current' => false,
            ],
            'VOLUMN 3 ISSUE 2' => [
                'volume' => '3',
                'number' => '2',
                'year' => 2026,
                'month_range' => 'October – December',
                'status' => 'active',
                'is_current' => false,
            ],
            'VOLUMN 3 ISSUE 3' => [
                'volume' => '3',
                'number' => '3',
                'year' => 2026,
                'month_range' => 'October – December',
                'status' => 'active',
                'is_current' => false,
            ],
        ];

        $possiblePaths = [
            resource_path('data/papers.json'),
            base_path('papers.json'),
            dirname(base_path()) . '/papers.json',
        ];

        $jsonPath = null;
        foreach ($possiblePaths as $candidate) {
            if (file_exists($candidate)) {
                $jsonPath = $candidate;
                break;
            }
        }

        if (!$jsonPath) {
            Log::error("Migration 2026_10_11_160000_import_volume_3_issues_and_papers: papers.json not found");
            return;
        }

        $jsonData = json_decode(file_get_contents($jsonPath), true);
        if (!$jsonData) {
            Log::error("Migration 2026_10_11_160000_import_volume_3_issues_and_papers: Failed to decode papers.json");
            return;
        }

        foreach ($issuesConfig as $sheetName => $config) {
            $issue = Issue::firstOrCreate(
                ['volume' => $config['volume'], 'number' => $config['number']],
                [
                    'year' => $config['year'],
                    'month_range' => $config['month_range'],
                    'status' => $config['status'],
                    'is_current' => $config['is_current'],
                ]
            );

            if (!isset($jsonData[$sheetName])) {
                continue;
            }

            foreach ($jsonData[$sheetName] as $paperData) {
                $title = trim($paperData['Title'] ?? $paperData['Title '] ?? '');
                $authors = trim($paperData['Name'] ?? $paperData['Name '] ?? '');
                $doi = trim($paperData['DOI number'] ?? $paperData['DOI number '] ?? '');

                if (empty($title) || empty($doi)) {
                    continue;
                }

                // Check duplicate by normalized DOI
                $existing = Paper::where('doi', $doi)->first();
                if ($existing) {
                    continue;
                }

                Paper::create([
                    'issue_id' => $issue->id,
                    'title' => $title,
                    'authors' => $authors,
                    'abstract' => null,
                    'keywords' => null,
                    'file_url' => null,
                    'doi' => $doi,
                    'citations' => 0,
                    'category' => 'Research Article',
                    'is_featured' => false,
                    'meta_title' => "{$title} | Sanmati Journal",
                    'meta_description' => mb_substr("Research article by {$authors} published in Sanmati Spectrum of Knowledge & Emerging Discourse, Vol. 3, Issue {$config['number']}.", 0, 160),
                ]);
            }
        }
    }

    public function down(): void
    {
        $v3Issues = Issue::where('volume', '3')->whereIn('number', ['1', '2', '3'])->get();
        foreach ($v3Issues as $issue) {
            $issue->papers()->delete();
            $issue->delete();
        }
    }
};
