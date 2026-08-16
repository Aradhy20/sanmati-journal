<?php

namespace App\Http\Controllers;

use App\Services\AnnouncementService;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display the featured International Seminar Gen Z 2026 announcement page.
     */
    public function internationalSeminar2026()
    {
        $announcement = AnnouncementService::getConferenceAnnouncement();

        return Inertia::render('Announcements/Show', [
            'announcement' => $announcement
        ])->withViewData([
            'meta' => [
                'title' => 'International Seminar on Gen Z, Education, Digital Culture & Innovation | Sanmati Journal',
                'description' => 'International seminar and research paper presentation on GEN Z: Education, Digital Culture, Innovation and Social Transformation organized by SERFI & Bhagwan Adinath College of Education on 05 September 2026.',
                'keywords' => 'International Conference 2026, Gen Z Education Seminar, Paper Presentation, Best Teacher Award, SERFI, Bhagwan Adinath College of Education, Sanmati Journal, ISSN 3108-1819',
                'image' => 'https://sanmatijournal.in/logo.webp',
                'canonical' => 'https://sanmatijournal.in/announcements/international-seminar-gen-z-2026',
            ]
        ]);
    }

    /**
     * Index route redirecting to current active conference announcement.
     */
    public function index()
    {
        return redirect()->route('announcements.seminar2026');
    }
}
