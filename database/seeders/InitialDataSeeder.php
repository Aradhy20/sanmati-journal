<?php

namespace Database\Seeders;

use App\Models\Enquiry;
use App\Models\Gallery;
use App\Models\Issue;
use App\Models\News;
use App\Models\Paper;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class InitialDataSeeder extends Seeder
{
    public function run(): void
    {
        // Issues
        $issue = Issue::create([
            'volume' => '1',
            'number' => '1',
            'year' => 2026,
            'month_range' => 'Jan-Mar',
            'is_current' => true,
        ]);

        // Papers
        Paper::create([
            'issue_id' => $issue->id,
            'title' => 'Revolutionizing AI in Academic Research',
            'authors' => 'Dr. Aradhya Jain, Prof. Smith',
            'category' => 'Research Paper',
            'file_url' => 'papers/vol1-no1-p1.pdf',
        ]);

        // News
        News::create([
            'content' => 'Call for Papers for Volume 1, Issue 2 is now open!',
            'type' => 'info',
            'is_active' => true,
        ]);

        // Team
        TeamMember::create([
            'name' => 'Dr. Aradhya Jain',
            'role' => 'Editor-in-Chief',
            'qualifications' => 'PhD in Computer Science',
            'experience' => 'Professor at TMU',
        ]);

        // Gallery
        Gallery::create([
            'image_url' => 'gallery/event-1.jpg',
            'caption' => 'Inaugural Session of Sanmati Journal',
            'category' => 'news',
        ]);

        // Enquiries
        Enquiry::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'subject' => 'Inquiry about submission',
            'message' => 'Hello, I would like to know the status of my paper.',
        ]);
    }
}
