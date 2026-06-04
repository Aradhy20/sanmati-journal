<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Issue;

class FixIssueMonthRange extends Command
{
    protected $signature = 'fix:issue-month-range';
    protected $description = 'Fix Vol 2 Issue 2 month_range from July-December to April-June';

    public function handle()
    {
        $this->info('Current issues:');
        Issue::all(['id', 'volume', 'number', 'month_range'])->each(function ($issue) {
            $this->line("  Vol {$issue->volume} Issue {$issue->number}: {$issue->month_range}");
        });

        $updated = Issue::where('volume', '2')
            ->where('number', '2')
            ->update(['month_range' => 'April – June']);

        $this->info("\nUpdated {$updated} row(s).");

        $this->info('\nVerification:');
        Issue::all(['id', 'volume', 'number', 'month_range'])->each(function ($issue) {
            $this->line("  Vol {$issue->volume} Issue {$issue->number}: {$issue->month_range}");
        });

        $this->info('Done! Clear cache with: php artisan cache:clear');
    }
}
