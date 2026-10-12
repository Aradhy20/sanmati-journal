<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (app()->environment('production')) {
            URL::forceScheme('https');
        }

        // Auto-run pending database migrations on production/shared-hosting if missing
        try {
            if (!\Illuminate\Support\Facades\Schema::hasTable('submission_review_notification_logs') ||
                !\Illuminate\Support\Facades\Schema::hasTable('submission_status_histories') ||
                !\Illuminate\Support\Facades\Schema::hasColumn('submissions', 'country')) {
                \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
            }

            if (\Illuminate\Support\Facades\Schema::hasTable('papers') && \Illuminate\Support\Facades\Schema::hasTable('issues')) {
                if (\App\Models\Paper::count() === 0) {
                    \Illuminate\Support\Facades\Artisan::call('db:seed', [
                        '--class' => 'Database\\Seeders\\ArchivePapersSeeder',
                        '--force' => true,
                    ]);
                } else {
                    if (!\Illuminate\Support\Facades\DB::table('papers')->where('id', 81)->exists()) {
                        $vol1 = \Illuminate\Support\Facades\DB::table('issues')->where('volume', '1')->where('number', '1')->first();
                        if ($vol1) {
                            \Illuminate\Support\Facades\DB::table('papers')->insert([
                                'id' => 81,
                                'issue_id' => $vol1->id,
                                'title' => 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)',
                                'slug' => 'sanmati-spectrum-of-knowledge-emerging-discourse-january-march-2026',
                                'authors' => 'Dr. Namrata Jain (President & Editor-in-Chief), Dr. Ratnesh Kumar Jain (Managing Editor)',
                                'abstract' => 'The January-March 2026 issue (Vol-1, Issue-1) of Sanmati Spectrum of Knowledge & Emerging Discourse — a national peer-reviewed multidisciplinary research journal in English & Hindi.',
                                'keywords' => 'Inaugural Issue, Complete Compilation, Multidisciplinary Research Journal',
                                'file_url' => 'https://drive.google.com/file/d/1nPxKxugSA6yMcpbJyQuNuEQ7QcnrpPt2/view?usp=sharing',
                                'doi' => 'https://doi.org/10.5281/zenodo.19710093',
                                'citations' => 15,
                                'category' => 'Complete Issue Book',
                                'is_featured' => 1,
                                'meta_title' => 'Inaugural Issue Vol-1 Issue-1 (Jan-Mar 2026) | Sanmati Journal',
                                'meta_description' => 'Official full issue compilation of Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026) in Hindi & English.',
                                'created_at' => now(),
                                'updated_at' => now(),
                            ]);
                        }
                    }

                    // Check and automatically import Volume 3 issues and papers if missing on production/shared hosting
                    $v3IssuesCount = \Illuminate\Support\Facades\DB::table('issues')->where('volume', '3')->count();
                    $v3PapersCount = \Illuminate\Support\Facades\DB::table('papers')->whereIn('issue_id', function ($q) {
                        $q->select('id')->from('issues')->where('volume', '3');
                    })->count();

                    if ($v3IssuesCount < 3 || $v3PapersCount < 79) {
                        $this->importVolume3();
                    }
                }
            }
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error("Auto-migration/seeding in AppServiceProvider failed: " . $e->getMessage());
        }
    }

    /**
     * Resilient auto-import for Volume 3 issues and papers on production environments.
     */
    protected function importVolume3(): void
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
            return;
        }

        $jsonData = json_decode(file_get_contents($jsonPath), true);
        if (!$jsonData) {
            return;
        }

        foreach ($issuesConfig as $sheetName => $config) {
            $issue = \App\Models\Issue::firstOrCreate(
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

                $existing = \App\Models\Paper::where('doi', $doi)->first();
                if ($existing) {
                    continue;
                }

                \App\Models\Paper::create([
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
}
