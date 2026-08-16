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

            if (\Illuminate\Support\Facades\Schema::hasTable('papers')) {
                if (\App\Models\Paper::count() === 0) {
                    \Illuminate\Support\Facades\Artisan::call('db:seed', [
                        '--class' => 'Database\\Seeders\\ArchivePapersSeeder',
                        '--force' => true,
                    ]);
                } elseif (!\App\Models\Paper::where('id', 81)->exists()) {
                    $vol1 = \App\Models\Issue::where('volume', '1')->where('number', '1')->first();
                    if ($vol1) {
                        \App\Models\Paper::create([
                            'id' => 81,
                            'issue_id' => $vol1->id,
                            'title' => 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)',
                            'authors' => 'Dr. Namrata Jain (President & Editor-in-Chief), Dr. Ratnesh Kumar Jain (Managing Editor)',
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
                    }
                }
            }
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error("Auto-migration/seeding in AppServiceProvider failed: " . $e->getMessage());
        }
    }
}
