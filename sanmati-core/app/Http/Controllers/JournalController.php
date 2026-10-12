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
        $currentIssue = Issue::where('is_current', true)->with(['papers' => function ($q) {
            $q->select('id', 'issue_id', 'title', 'authors', 'doi', 'category');
        }])->first()
        ?? Issue::with(['papers' => function ($q) {
            $q->select('id', 'issue_id', 'title', 'authors', 'doi', 'category');
        }])
        ->orderBy('volume', 'desc')
        ->orderBy('number', 'desc')
        ->first();

        return Inertia::render('Home', [
            'newsItems' => $this->journalService->getActiveNews(),
            'featuredPapers' => $this->journalService->getFeaturedPapers(),
            'testimonials' => $this->journalService->getActiveTestimonials(),
            'currentIssue' => $currentIssue,
            'metrics' => $this->journalService->getJournalStats(),
            'featuredAnnouncement' => \App\Services\AnnouncementService::getConferenceAnnouncement(),
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
        $editors = Cache::remember('editors_members', 3600, function () {
            return TeamMember::whereIn('role', ['Editor-in-Chief', 'Co-Editor-in-Chief', 'Editor'])->orderBy('display_order', 'asc')->get();
        });
        return Inertia::render('Editors', [
            'editors' => $editors
        ]);
    }

    public function editorialBoard()
    {
        $board = Cache::remember('editorial_board_members', 3600, function () {
            return TeamMember::where('role', 'Member')->orderBy('display_order', 'asc')->get();
        });
        return Inertia::render('EditorialBoard', [
            'board' => $board
        ]);
    }

    // --- Basic Info ---
    public function aboutJournal()
    {
        return Inertia::render('AboutJournal');
    }

    public function aboutFoundation()
    {
        return Inertia::render('AboutFoundation');
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
        $issues = Cache::remember('archive_issues_list', 1800, function () {
            return Issue::with(['papers' => function ($q) {
                $q->select('id', 'issue_id', 'title', 'authors', 'keywords', 'category', 'doi', 'citations', 'file_url');
            }])
            ->orderBy('volume', 'desc')
            ->orderBy('number', 'desc')
            ->get();
        });

        return Inertia::render('Archive', [
            'issues' => $issues
        ]);
    }

    public function currentIssue()
    {
        $issue = Issue::where('is_current', true)->with(['papers' => function ($q) {
            $q->select('id', 'issue_id', 'title', 'authors', 'keywords', 'category', 'doi', 'citations', 'file_url');
        }])->first()
            ?? Issue::orderBy('volume', 'desc')->orderBy('number', 'desc')->with(['papers' => function ($q) {
                $q->select('id', 'issue_id', 'title', 'authors', 'keywords', 'category', 'doi', 'citations', 'file_url');
            }])->first();

        if (!$issue) {
            $issue = Issue::create([
                'volume' => 2,
                'number' => 2,
                'year' => 2026,
                'title' => 'Volume 2, Issue 2',
                'month_range' => 'April-June',
                'is_current' => true,
            ]);
        }

        $allIssues = Issue::orderBy('volume', 'desc')
            ->orderBy('number', 'desc')
            ->get();

        $currentIndex = $allIssues->search(fn ($i) => (string)$i->id === (string)$issue->id);
        $nextIssue = ($currentIndex !== false && $currentIndex > 0) ? $allIssues->get($currentIndex - 1) : null;
        $prevIssue = ($currentIndex !== false && $currentIndex < $allIssues->count() - 1) ? $allIssues->get($currentIndex + 1) : null;

        $metaTitle = "Current Issue: Volume {$issue->volume}, Issue {$issue->number} ({$issue->month_range} {$issue->year}) | Sanmati Journal";
        $metaDescription = "Read verified peer-reviewed multidisciplinary research articles published in Volume {$issue->volume}, Issue {$issue->number} of Sanmati Spectrum of Knowledge (ISSN 3108-1819).";

        return Inertia::render('Issue', [
            'issue' => $issue,
            'prevIssue' => $prevIssue,
            'nextIssue' => $nextIssue,
            'isCurrentIssue' => true,
        ])->withViewData([
            'meta' => [
                'title' => $metaTitle,
                'description' => $metaDescription,
                'keywords' => "Current Issue, Volume {$issue->volume}, Issue {$issue->number}, Sanmati Journal, Research Articles, CrossRef DOI, ISSN 3108-1819",
                'image' => 'https://sanmatijournal.in/logo.webp',
                'canonical' => "https://sanmatijournal.in/current-issue",
            ]
        ]);
    }

    public function issue($volume, $number)
    {
        $issue = Issue::with(['papers' => function ($q) {
            $q->select('id', 'issue_id', 'title', 'authors', 'keywords', 'category', 'doi', 'citations', 'file_url');
        }])
        ->where('volume', $volume)
        ->where('number', $number)
        ->first();

        if (!$issue) {
            return redirect()->route('archive')->with('error', "Volume {$volume}, Issue {$number} was not found.");
        }

        $allIssues = Issue::orderBy('volume', 'desc')
            ->orderBy('number', 'desc')
            ->get();

        $currentIndex = $allIssues->search(fn ($i) => (string)$i->id === (string)$issue->id);
        $nextIssue = ($currentIndex !== false && $currentIndex > 0) ? $allIssues->get($currentIndex - 1) : null;
        $prevIssue = ($currentIndex !== false && $currentIndex < $allIssues->count() - 1) ? $allIssues->get($currentIndex + 1) : null;

        $metaTitle = "Volume {$issue->volume}, Issue {$issue->number} ({$issue->month_range} {$issue->year}) | Sanmati Journal";
        $metaDescription = "Read verified peer-reviewed multidisciplinary research articles published in Volume {$issue->volume}, Issue {$issue->number} of Sanmati Spectrum of Knowledge (ISSN 3108-1819).";

        return Inertia::render('Issue', [
            'issue' => $issue,
            'prevIssue' => $prevIssue,
            'nextIssue' => $nextIssue,
        ])->withViewData([
            'meta' => [
                'title' => $metaTitle,
                'description' => $metaDescription,
                'keywords' => "Volume {$issue->volume}, Issue {$issue->number}, Sanmati Journal, Research Articles, CrossRef DOI, ISSN 3108-1819",
                'image' => 'https://sanmatijournal.in/logo.webp',
                'canonical' => "https://sanmatijournal.in/issue/{$issue->volume}/{$issue->number}",
            ]
        ]);
    }

    public function issueById($id)
    {
        $issue = Issue::find($id);
        if ($issue) {
            return redirect()->route('issue.show', ['volume' => $issue->volume, 'number' => $issue->number]);
        }
        return redirect()->route('archive')->with('error', 'The requested issue was not found.');
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
        $paper = \App\Models\Paper::with('issue')->find($id);

        if (!$paper && ($id == 81 || \App\Models\Paper::count() === 0)) {
            try {
                if (\App\Models\Paper::count() === 0) {
                    \Illuminate\Support\Facades\Artisan::call('db:seed', [
                        '--class' => 'Database\\Seeders\\ArchivePapersSeeder',
                        '--force' => true,
                    ]);
                } elseif (!\Illuminate\Support\Facades\DB::table('papers')->where('id', 81)->exists()) {
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
                $paper = \App\Models\Paper::with('issue')->find($id);
            } catch (\Throwable $e) {
                \Illuminate\Support\Facades\Log::error("Failed to auto-seed papers in article route: " . $e->getMessage());
            }
        }

        if (!$paper) {
            return redirect()->route('archive')->with('error', "The requested article (#{$id}) was not found. Please browse published issues below.");
        }

        $relatedPapers = \App\Models\Paper::where('issue_id', $paper->issue_id)
            ->where('id', '!=', $paper->id)
            ->limit(3)
            ->get(['id', 'title', 'authors', 'doi', 'category', 'file_url']);

        return Inertia::render('Article', [
            'paper' => $paper,
            'relatedPapers' => $relatedPapers,
        ])->withViewData([
            'paper' => $paper,
            'meta' => [
                'title' => $paper->title . ' | Sanmati Journal',
                'description' => \Illuminate\Support\Str::limit(strip_tags($paper->abstract ?? $paper->title), 160),
                'keywords' => $paper->keywords ?? 'Research Paper, Academic Journal',
                'image' => 'https://sanmatijournal.in/logo.webp',
                'canonical' => 'https://sanmatijournal.in/article/' . $paper->id,
            ]
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
            Mail::to('sanmatijournal@gmail.com')->send(new EnquiryReceived($validated));
        } catch (\Exception $e) {
            Log::error('Failed to queue enquiry email: ' . $e->getMessage());
        }

        return Redirect::back()->with('success', 'Your inquiry has been submitted successfully.');
    }

    public function authorDashboard()
    {
        $submissions = [];
        if (auth()->check()) {
            $submissions = \App\Models\Submission::where('user_id', auth()->id())
                ->orderBy('created_at', 'desc')
                ->get();
        }

        return Inertia::render('Author/Dashboard', [
            'submissions' => $submissions
        ]);
    }

    public function antigravitySandbox()
    {
        return Inertia::render('AntigravitySandbox');
    }

    public function copyrightPolicy()
    {
        return Inertia::render('PublicationPolicy/Copyright');
    }

    public function reviewerGuidelines()
    {
        return Inertia::render('ReviewerGuidelines');
    }
}
