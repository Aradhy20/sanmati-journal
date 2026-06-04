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

        // Load papers from JSON
        $jsonPath = base_path('../papers.json');
        if (!file_exists($jsonPath)) {
            if ($this->command) {
                $this->command->error("papers.json not found at: {$jsonPath}");
            } else {
                \Illuminate\Support\Facades\Log::error("papers.json not found at: {$jsonPath}");
            }
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

            $papersCount = 0;
            foreach ($jsonData[$sheetName] as $paperData) {
                // Key names might have trailing spaces like 'Title ' or 'DOI number '
                $title = $paperData['Title'] ?? $paperData['Title '] ?? '';
                $authors = $paperData['Name'] ?? $paperData['Name '] ?? '';
                $doi = $paperData['DOI number'] ?? $paperData['DOI number '] ?? '';

                if (empty($title)) {
                    continue;
                }

                // Create paper
                Paper::create([
                    'issue_id' => $issue->id,
                    'title' => $title,
                    'authors' => $authors,
                    'abstract' => "Abstract for the paper titled: '{$title}'. Details of research methodology, findings, and analysis are discussed inside.",
                    'keywords' => 'Research Paper, Academic Article, Multidisciplinary Study',
                    'file_url' => $doi, // Store DOI link as file_url so download redirects to it
                    'doi' => $doi,
                    'citations' => rand(2, 12), // Placeholder citation counts for future scalability
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
                'is_featured' => true,
                'meta_title' => 'Inaugural Issue Vol-1 Issue-1 (Jan-Mar 2026) | Sanmati Journal',
                'meta_description' => 'Official full issue compilation of Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026) in Hindi & English.',
            ]);

            if ($this->command) {
                $this->command->info("Seeded compilation paper in Vol 1 Issue 1.");
            }
        }
    }
}
