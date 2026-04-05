<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\TeamMember;
use App\Models\Issue;
use App\Services\JournalService;
use App\Mail\EnquiryReceived;
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class JournalController extends Controller
{
    protected JournalService $journalService;

    public function __construct(JournalService $journalService)
    {
        $this->journalService = $journalService;
    }

    public function index()
    {
        return Inertia::render('Home', [
            'newsItems' => $this->journalService->getActiveNews(),
            'featuredPapers' => $this->journalService->getFeaturedPapers(),
            'testimonials' => $this->journalService->getActiveTestimonials()
        ]);
    }

    public function editorialTeam()
    {
        $teamMembers = Cache::remember('team_members', 3600, function () {
            return TeamMember::orderBy('display_order', 'asc')->get();
        });
        return Inertia::render('EditorialTeam', [
            'teamMembers' => $teamMembers
        ]);
    }

    public function editors()
    {
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

    public function indexing()
    {
        return Inertia::render('BasicInfo/Indexing');
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

    public function areaDetail(string $slug)
    {
        return Inertia::render('SubmissionGuidelines/AreaDetail', ['slug' => $slug]);
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

    public function trackManuscript()
    {
        return Inertia::render('TrackManuscript');
    }

    // --- Blog System ---
    public function blogIndex()
    {
        // For now, pass a static list of articles or fetch from DB if available.
        return Inertia::render('Blog/Index');
    }

    public function blogShow($slug)
    {
        return Inertia::render('Blog/Show', [
            'slug' => $slug
        ]);
    }

    public function bookPublication()
    {
        return Inertia::render('BookPublication', [
            'books' => $this->journalService->getPublishedBooks()
        ]);
    }

    public function compliance()
    {
        return Inertia::render('Compliance');
    }

    public function advisoryBoard()
    {
        return Inertia::render('AdvisoryBoard');
    }

    public function technicalTeam()
    {
        return Inertia::render('TechnicalTeam');
    }

    public function archive()
    {
        return Inertia::render('Archive', [
            'issues' => Issue::with('papers')
                ->orderBy('year', 'desc')
                ->orderBy('number', 'desc')
                ->paginate(12)
        ]);
    }

    public function gallery()
    {
        $galleryItems = \App\Models\Gallery::orderBy('created_at', 'desc')->paginate(24);
        return Inertia::render('Gallery', [
            'galleryItems' => $galleryItems
        ]);
    }

    public function galleryPhoto()
    {
        $photos = \App\Models\Gallery::where('category', 'photo')->paginate(24);
        return Inertia::render('Gallery/Photo', [
            'photos' => $photos
        ]);
    }

    public function galleryNews()
    {
        $news = \App\Models\Gallery::where('category', 'news')->paginate(24);
        return Inertia::render('Gallery/News', [
            'news' => $news
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function article($id)
    {
        $paper = \App\Models\Paper::with('issue')->findOrFail($id);
        
        return Inertia::render('Article', [
            'paper' => $paper
        ]);
    }

    public function contactStore(ContactRequest $request)
    {
        $validated = $request->validated();

        Enquiry::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'message' => $validated['message'],
        ]);

        // Queue email notification (async with database queue)
        try {
            Mail::to('sanmatijournal@gmail.com')->queue(new EnquiryReceived($validated));
        } catch (\Exception $e) {
            Log::error('Failed to queue enquiry email: ' . $e->getMessage());
        }

        return Redirect::back()->with('success', 'Your inquiry has been submitted successfully.');
    }
}
