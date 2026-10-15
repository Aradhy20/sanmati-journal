<?php

use App\Models\Issue;
use App\Models\Paper;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Log;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Extend issues table schema to safely support Special Issues without breaking numbered issues
        if (!Schema::hasColumn('issues', 'is_special_issue')) {
            Schema::table('issues', function (Blueprint $table) {
                $table->boolean('is_special_issue')->default(false)->after('is_current');
            });
        }

        if (!Schema::hasColumn('issues', 'title')) {
            Schema::table('issues', function (Blueprint $table) {
                $table->string('title')->nullable()->after('is_special_issue');
            });
        }

        if (!Schema::hasColumn('issues', 'description')) {
            Schema::table('issues', function (Blueprint $table) {
                $table->text('description')->nullable()->after('title');
            });
        }

        // Allow nullable volume, number, year for special issues
        Schema::table('issues', function (Blueprint $table) {
            $table->string('volume', 50)->nullable()->change();
            $table->string('number', 50)->nullable()->change();
            $table->integer('year')->nullable()->change();
        });

        // 2. Find or create the Special Issue record
        $issue = Issue::where('is_special_issue', true)->first();
        if (!$issue) {
            $issue = Issue::create([
                'is_special_issue' => true,
                'title' => 'Special Issue',
                'volume' => null,
                'number' => null,
                'year' => 2026,
                'month_range' => 'October',
                'status' => 'active',
                'is_current' => false,
            ]);
        }

        // 3. Locate papers.json source
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
            Log::error("Migration 2026_10_15_160000_add_special_issue_and_import_articles: papers.json not found");
            return;
        }

        $jsonData = json_decode(file_get_contents($jsonPath), true);
        if (!$jsonData || !isset($jsonData['SPECIAL ISSUE'])) {
            Log::error("Migration 2026_10_15_160000_add_special_issue_and_import_articles: SPECIAL ISSUE key not found in papers.json");
            return;
        }

        $imported = 0;
        foreach ($jsonData['SPECIAL ISSUE'] as $paperData) {
            $title = trim($paperData['Title'] ?? $paperData['Title '] ?? '');
            $authors = trim($paperData['Name'] ?? $paperData['Name '] ?? '');
            $doi = trim($paperData['DOI number'] ?? $paperData['DOI number link'] ?? $paperData['DOI number '] ?? '');

            if (empty($title) || empty($doi)) {
                continue;
            }

            // Check duplicate by normalized DOI
            $existing = Paper::where('doi', $doi)->first();
            if ($existing) {
                // If it already exists, associate with special issue if unassigned
                if (!$existing->issue_id) {
                    $existing->issue_id = $issue->id;
                    $existing->category = 'Special Issue Article';
                    $existing->save();
                }
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
                'category' => 'Special Issue Article',
                'is_featured' => false,
                'meta_title' => "{$title} | Sanmati Journal",
                'meta_description' => mb_substr("Research article by {$authors} published in Sanmati Spectrum of Knowledge & Emerging Discourse (Special Issue).", 0, 160),
            ]);
            $imported++;
        }

        Log::info("Migration 2026_10_15_160000_add_special_issue_and_import_articles: successfully imported {$imported} articles into Special Issue.");
    }

    public function down(): void
    {
        $specialIssue = Issue::where('is_special_issue', true)->first();
        if ($specialIssue) {
            $specialIssue->papers()->delete();
            $specialIssue->delete();
        }

        if (Schema::hasColumn('issues', 'is_special_issue')) {
            Schema::table('issues', function (Blueprint $table) {
                $table->dropColumn(['is_special_issue', 'title', 'description']);
            });
        }
    }
};
