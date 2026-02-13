<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\News;
use App\Models\Paper;
use App\Models\Issue;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class JournalController extends Controller
{
    public function index()
    {
        $newsItems = News::where('is_active', true)
            ->orderBy('created_at', 'desc')
            ->get();

        $featuredPapers = Paper::where('is_featured', true) // Assuming you have an is_featured column or similar logic
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        // If no featured papers are marked, just get the latest 3
        if ($featuredPapers->isEmpty()) {
            $featuredPapers = Paper::orderBy('created_at', 'desc')->take(3)->get();
        }

        return Inertia::render('Home', [
            'newsItems' => $newsItems,
            'featuredPapers' => $featuredPapers
        ]);
    }

    public function editorialTeam()
    {
        $teamMembers = TeamMember::orderBy('display_order', 'asc')->get();
        return Inertia::render('EditorialTeam', [
            'teamMembers' => $teamMembers
        ]);
    }

    public function editors()
    {
        // Filter if you have specific roles for editors page
        $editors = TeamMember::whereIn('role', ['Editor-in-Chief', 'Co-Editor-in-Chief', 'Editor'])->get();
        return Inertia::render('Editors', [
            'editors' => $editors
        ]);
    }

    public function editorialBoard()
    {
         $board = TeamMember::where('role', 'Member')->get();
        return Inertia::render('EditorialBoard', [
            'board' => $board
        ]);
    }
    
    // --- Basic Info ---
    public function aboutJournal()
    {
        return Inertia::render('AboutJournal');
    }

    public function visionMission()
    {
        return Inertia::render('BasicInfo/VisionMission');
    }

    public function objectiveScope()
    {
        return Inertia::render('BasicInfo/ObjectiveScope');
    }

    public function journalInfo()
    {
        return Inertia::render('BasicInfo/JournalInfo');
    }

    // --- Submission Guidelines ---
    public function submissionGuidelines()
    {
        return Inertia::render('SubmissionGuidelines/Index');
    }

    public function callForPapers()
    {
        return Inertia::render('SubmissionGuidelines/CallForPapers');
    }

    public function submissionAreas()
    {
        return Inertia::render('SubmissionGuidelines/Areas');
    }

    public function importantInfo()
    {
        return Inertia::render('SubmissionGuidelines/ImportantInfo');
    }

    public function publicationCharges()
    {
        return Inertia::render('SubmissionGuidelines/PublicationCharges');
    }

    public function peerReviewProcess()
    {
        return Inertia::render('SubmissionGuidelines/ReviewProcess');
    }

    // --- Academic Events ---
    public function seminars()
    {
        return Inertia::render('AcademicEvents/Seminars');
    }

    public function conferences()
    {
        return Inertia::render('AcademicEvents/Conferences');
    }

    public function workshop()
    {
        return Inertia::render('AcademicEvents/Workshop');
    }

    // --- Publication Policy ---
    public function ethics()
    {
        return Inertia::render('PublicationPolicy/Ethics');
    }

    public function plagiarism()
    {
        return Inertia::render('PublicationPolicy/Plagiarism');
    }

    public function peerReview()
    {
        return Inertia::render('PublicationPolicy/PeerReview');
    }

    // --- Others ---
    public function awards()
    {
        return Inertia::render('Awards');
    }

    public function bookPublication()
    {
        return Inertia::render('BookPublication');
    }

    public function compliance()
    {
        return Inertia::render('Compliance');
    }

    public function advisoryBoard()
    {
        // Assuming this might be static or dynamic, let's render the component found
        return Inertia::render('AdvisoryBoard');
    }

    public function archive()
    {
        // Dynamic archive logic usually needed, but for now render the page
        return Inertia::render('Archive', [
            'issues' => Issue::orderBy('year', 'desc')->orderBy('number', 'desc')->get()
        ]);
    }

    public function gallery()
    {
        // Assuming you have a Gallery model, if not I will use the folder logic dynamically later or create model
        // For now, let's assume specific Gallery Item model or just pass distinct events if structured
        // If Model doesn't exist, we might need to verify.
        // Based on routes, AdminController has `gallery` methods, so Model exists.
        
        $galleryItems = \App\Models\Gallery::orderBy('created_at', 'desc')->get();
        return Inertia::render('Gallery', [
            'galleryItems' => $galleryItems
        ]);
    }

    public function galleryPhoto()
    {
         $photos = \App\Models\Gallery::where('category', 'photo')->get();
        return Inertia::render('Gallery/Photo', [
             'photos' => $photos
        ]);
    }

    public function galleryNews()
    {
         $news = \App\Models\Gallery::where('category', 'news')->get();
        return Inertia::render('Gallery/News', [
             'news' => $news
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function contactStore(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:100',
            'lastName' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Enquiry::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'message' => $validated['message'],
        ]);

        return Redirect::back()->with('success', 'Your inquiry has been submitted successfully.');
    }
}
