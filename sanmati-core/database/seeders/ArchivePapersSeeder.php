<?php

namespace Database\Seeders;

use App\Models\Issue;
use App\Models\Paper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class ArchivePapersSeeder extends Seeder
{
    public function run(): void
    {
        // Disable foreign key constraints during truncate
        Schema::disableForeignKeyConstraints();
        Paper::truncate();
        Issue::truncate();
        Schema::enableForeignKeyConstraints();

        // Load papers from JSON with robust fallback path resolution
        $possiblePaths = [
            resource_path('data/papers.json'),
            base_path('papers.json'),
            base_path('../papers.json'),
            base_path('../../papers.json'),
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
            \Illuminate\Support\Facades\Log::error("ArchivePapersSeeder: papers.json not found in any standard path");
            return;
        }

        $jsonData = json_decode(file_get_contents($jsonPath), true);
        if (!$jsonData) {
            if ($this->command) {
                $this->command->error("Failed to decode papers.json");
            } else {
                \Illuminate\Support\Facades\Log::error("Failed to decode papers.json");
            }
            return;
        }

        // Define Issue mappings
        $issuesConfig = [
            'VOLUMN 1 ISSUE 1' => [
                'volume' => '1',
                'number' => '1',
                'year' => 2026,
                'month_range' => 'January – March',
                'is_current' => false,
            ],
            'VOLUMN 2 ISSUE 1' => [
                'volume' => '2',
                'number' => '1',
                'year' => 2026,
                'month_range' => 'April – June',
                'is_current' => false,
            ],
            'VOLUMN 2 ISSUE 2' => [
                'volume' => '2',
                'number' => '2',
                'year' => 2026,
                'month_range' => 'April – June',
                'is_current' => true, // Latest issue as current
            ],
            'VOLUMN 3 ISSUE 1' => [
                'volume' => '3',
                'number' => '1',
                'year' => 2026,
                'month_range' => 'July – September',
                'is_current' => false,
            ],
            'VOLUMN 3 ISSUE 2' => [
                'volume' => '3',
                'number' => '2',
                'year' => 2026,
                'month_range' => 'July – September',
                'is_current' => false,
            ],
            'VOLUMN 3 ISSUE 3' => [
                'volume' => '3',
                'number' => '3',
                'year' => 2026,
                'month_range' => 'July – September',
                'is_current' => false,
            ],
        ];

        $vol1IssueId = null;

        foreach ($issuesConfig as $sheetName => $config) {
            if (!isset($jsonData[$sheetName])) {
                if ($this->command) {
                    $this->command->warn("Sheet data for '{$sheetName}' not found in JSON.");
                }
                continue;
            }

            $issue = Issue::create([
                'volume' => $config['volume'],
                'number' => $config['number'],
                'year' => $config['year'],
                'month_range' => $config['month_range'],
                'status' => 'active',
                'is_current' => $config['is_current'],
            ]);

            if ($sheetName === 'VOLUMN 1 ISSUE 1') {
                $vol1IssueId = $issue->id;
            }

            $isVol3 = ($config['volume'] === '3');
            $papersCount = 0;
            foreach ($jsonData[$sheetName] as $paperData) {
                // Key names might have trailing spaces like 'Title ' or 'DOI number '
                $title = trim($paperData['Title'] ?? $paperData['Title '] ?? '');
                $authors = trim($paperData['Name'] ?? $paperData['Name '] ?? '');
                $doi = trim($paperData['DOI number'] ?? $paperData['DOI number '] ?? '');

                if (empty($title)) {
                    continue;
                }

                // Create paper
                Paper::create([
                    'issue_id' => $issue->id,
                    'title' => $title,
                    'authors' => $authors,
                    'abstract' => $isVol3 ? null : "Abstract for the paper titled: '{$title}'. Details of research methodology, findings, and analysis are discussed inside.",
                    'keywords' => $isVol3 ? null : 'Research Paper, Academic Article, Multidisciplinary Study',
                    'file_url' => $isVol3 ? null : $doi,
                    'doi' => $doi,
                    'citations' => $isVol3 ? 0 : rand(2, 12),
                    'category' => 'Research Article',
                    'is_featured' => false,
                    'meta_title' => "{$title} | Sanmati Journal",
                    'meta_description' => mb_substr("Read the research paper by {$authors} titled {$title} published in Sanmati Spectrum of Knowledge.", 0, 155),
                ]);
                $papersCount++;
            }

            if ($this->command) {
                $this->command->info("Created issue Vol {$config['volume']} Issue {$config['number']} with {$papersCount} papers.");
            }
        }

        // Also seed the original inaugural compilation issue/paper if not present
        // Since we cleared issues/papers, we seed it as a special compilation in Vol 1 Issue 1
        if ($vol1IssueId) {
            Paper::create([
                'issue_id' => $vol1IssueId,
                'title' => 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)',
                'authors' => 'Dr Namrata Jain (President & Editor-in-Chief), Dr. Ratnesh Kumar Jain (Managing Editor)',
                'abstract' => 'The January-March 2026 issue (Vol-1, Issue-1) of Sanmati Spectrum of Knowledge & Emerging Discourse — a national peer-reviewed multidisciplinary research journal in English & Hindi.',
                'keywords' => 'Inaugural Issue, Complete Compilation, Multidisciplinary Research Journal',
                'file_url' => 'https://drive.google.com/file/d/1nPxKxugSA6yMcpbJyQuNuEQ7QcnrpPt2/view?usp=sharing',
                'doi' => 'https://doi.org/10.5281/zenodo.19710093',
                'citations' => 15,
                'category' => 'Complete Issue Book',
                'is_featured' => false,
                'meta_title' => 'Inaugural Issue Vol-1 Issue-1 (Jan-Mar 2026) | Sanmati Journal',
                'meta_description' => 'Official full issue compilation of Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026) in Hindi & English.',
            ]);

            if ($this->command) {
                $this->command->info("Seeded compilation paper in Vol 1 Issue 1.");
            }
        }

        // Seed Special Issue if present in JSON
        if (isset($jsonData['SPECIAL ISSUE'])) {
            $specialIssue = Issue::create([
                'volume' => null,
                'number' => null,
                'year' => 2026,
                'month_range' => 'October',
                'status' => 'active',
                'is_current' => false,
                'is_special_issue' => true,
                'title' => 'Special Issue',
            ]);

            $siCount = 0;
            foreach ($jsonData['SPECIAL ISSUE'] as $paperData) {
                $title = trim($paperData['Title'] ?? $paperData['Title '] ?? '');
                $authors = trim($paperData['Name'] ?? $paperData['Name '] ?? '');
                $doi = trim($paperData['DOI number'] ?? $paperData['DOI number link'] ?? $paperData['DOI number '] ?? '');

                if (empty($title) || empty($doi)) {
                    continue;
                }

                Paper::create([
                    'issue_id' => $specialIssue->id,
                    'title' => $title,
                    'authors' => $authors,
                    'abstract' => null,
                    'keywords' => null,
                    'file_url' => null,
                    'doi' => $doi,
                    'citations' => 0,
                    'category' => 'Special Issue Article',
                    'is_featured' => false,
                    'meta_title' => "{$title} | Sanmati Journal",
                    'meta_description' => mb_substr("Research article by {$authors} published in Sanmati Spectrum of Knowledge & Emerging Discourse (Special Issue).", 0, 160),
                ]);
                $siCount++;
            }

            if ($this->command) {
                $this->command->info("Created Special Issue with {$siCount} papers.");
            }
        }
    }
}
