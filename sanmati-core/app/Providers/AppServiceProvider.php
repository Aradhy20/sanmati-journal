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
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error("Auto-migration in AppServiceProvider failed: " . $e->getMessage());
        }
    }
}
