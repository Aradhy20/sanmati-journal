<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\News;
use App\Models\Paper;
use App\Models\TeamMember;
use App\Models\Gallery;
use App\Http\Requests\StorePaperRequest;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\StoreTeamMemberRequest;
use App\Http\Requests\StoreGalleryItemRequest;
use App\Http\Requests\StoreIssueRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Admin\SystemHealthController;
use App\Models\Book;
use App\Models\Testimonial;
use App\Models\NewsletterSubscriber;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $health = (new SystemHealthController())->getStatus();

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'pendingEnquiries' => Enquiry::where('status', 'new')->count(),
                'totalPapers' => Paper::count(),
                'activeNews' => News::where('is_active', true)->count(),
                'teamMembers' => TeamMember::count(),
            ],
            'systemHealth' => $health
        ]);
    }

    public function enquiries()
    {
        return Inertia::render('Admin/Enquiries', [
            'enquiries' => Enquiry::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function updateEnquiryStatus(Request $request, Enquiry $enquiry)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:new,replied,archived',
        ]);

        $enquiry->update(['status' => $validated['status']]);
        return back()->with('success', 'Status updated');
    }

    public function news()
    {
        return Inertia::render('Admin/News', [
            'news' => News::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function storeNews(StoreNewsRequest $request)
    {
        News::create($request->validated());
        return back()->with('success', 'News created');
    }

    public function toggleNews(News $news)
    {
        $news->update(['is_active' => !$news->is_active]);
        return back()->with('success', 'News status toggled');
    }

    public function deleteNews(News $news)
    {
        $news->delete();
        return back()->with('success', 'News deleted');
    }

    public function papers()
    {
        return Inertia::render('Admin/Papers', [
            'papers' => Paper::with('issue')->orderBy('created_at', 'desc')->paginate(20),
            'issues' => \App\Models\Issue::orderBy('year', 'desc')->orderBy('number', 'desc')->get()
        ]);
    }

    public function storeIssue(StoreIssueRequest $request)
    {
        $validated = $request->validated();

        if ($validated['is_current'] ?? false) {
            \App\Models\Issue::where('is_current', true)->update(['is_current' => false]);
        }

        \App\Models\Issue::create($validated);
        return back()->with('success', 'Issue created');
    }

    public function toggleIssue(\App\Models\Issue $issue)
    {
        if (!$issue->is_current) {
            \App\Models\Issue::where('is_current', true)->update(['is_current' => false]);
        }
        $issue->update(['is_current' => !$issue->is_current]);
        return back()->with('success', 'Issue status toggled');
    }

    public function deleteIssue(\App\Models\Issue $issue)
    {
        $issue->delete();
        return back()->with('success', 'Issue deleted');
    }

    public function storePaper(StorePaperRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('file_url')) {
            $path = $request->file('file_url')->store('papers', 'public');
            $validated['file_url'] = $path;
        }

        Paper::create([
            'title' => $validated['title'],
            'authors' => $validated['authors'],
            'abstract' => $validated['abstract'] ?? null,
            'issue_id' => $validated['issue_id'],
            'file_url' => $validated['file_url'] ?? null,
            'is_featured' => $request->boolean('is_featured', false),
            'category' => $validated['category'] ?? 'Research Paper',
            'citations' => 0,
        ]);

        return Redirect::back()->with('success', 'Paper added successfully.');
    }

    public function deletePaper(Paper $paper)
    {
        if ($paper->file_url && Storage::disk('public')->exists($paper->file_url)) {
            Storage::disk('public')->delete($paper->file_url);
        }
        $paper->delete();
        return Redirect::back()->with('success', 'Paper deleted successfully.');
    }

    // --- Team ---
    public function team()
    {
        $team = TeamMember::orderBy('display_order', 'asc')->paginate(20);
        return Inertia::render('Admin/Team', [
            'teamMembers' => $team
        ]);
    }

    public function storeTeamMember(StoreTeamMemberRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('team', 'public');
            $validated['photo_url'] = $path;
        }
        unset($validated['photo']);

        TeamMember::create($validated);
        return back()->with('success', 'Team member added');
    }

    public function deleteTeamMember(TeamMember $teamMember)
    {
        if ($teamMember->photo_url && Storage::disk('public')->exists($teamMember->photo_url)) {
            Storage::disk('public')->delete($teamMember->photo_url);
        }
        $teamMember->delete();
        return back()->with('success', 'Team member deleted');
    }

    // --- Submissions ---
    public function submissions()
    {
        return Inertia::render('Admin/Submissions', [
            'submissions' => \App\Models\Submission::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function downloadSubmission(\App\Models\Submission $submission)
    {
        if ($submission->file_path && \Illuminate\Support\Facades\Storage::disk('local')->exists($submission->file_path)) {
            return \Illuminate\Support\Facades\Storage::disk('local')->download($submission->file_path, "Manuscript_{$submission->tracking_id}.pdf");
        }
        return back()->with('error', 'Manuscript file not found on disk.');
    }

    // --- Gallery ---
    public function gallery()
    {
        return Inertia::render('Admin/Gallery', [
            'gallery' => Gallery::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function storeGalleryItem(StoreGalleryItemRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery', 'public');
            $validated['image_url'] = $path;
        }
        unset($validated['image']);

        Gallery::create($validated);
        return back()->with('success', 'Gallery item added');
    }

    public function deleteGalleryItem(Gallery $gallery)
    {
        if ($gallery->image_url && Storage::disk('public')->exists($gallery->image_url)) {
            Storage::disk('public')->delete($gallery->image_url);
        }
        $gallery->delete();
        return back()->with('success', 'Gallery item deleted');
    }

    // --- Books ---
    public function books()
    {
        return Inertia::render('Admin/Books', [
            'books' => Book::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function storeBook(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'amazon_link' => 'nullable|url',
            'flipkart_link' => 'nullable|url',
            'is_published' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('books', 'public');
            $validated['image_url'] = $path;
        } else {
            $validated['image_url'] = '/images/books/placeholder.jpg';
        }
        unset($validated['image']);

        Book::create($validated);
        return back()->with('success', 'Book added successfully');
    }

    public function deleteBook(Book $book)
    {
        if ($book->image_url && !str_starts_with($book->image_url, '/') && \Illuminate\Support\Facades\Storage::disk('public')->exists($book->image_url)) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($book->image_url);
        }
        $book->delete();
        return back()->with('success', 'Book deleted');
    }

    // --- Testimonials ---
    public function testimonials()
    {
        return Inertia::render('Admin/Testimonials', [
            'testimonials' => Testimonial::orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    public function storeTestimonial(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'text' => 'required|string',
            'stars' => 'required|integer|min:1|max:5',
        ]);

        Testimonial::create($validated);
        return back()->with('success', 'Testimonial added');
    }

    public function deleteTestimonial(Testimonial $testimonial)
    {
        $testimonial->delete();
        return back()->with('success', 'Testimonial deleted');
    }

    // --- Newsletter ---
    public function newsletter()
    {
        return Inertia::render('Admin/Newsletter', [
            'subscribers' => NewsletterSubscriber::orderBy('created_at', 'desc')->paginate(50)
        ]);
    }

    public function deleteSubscriber(NewsletterSubscriber $subscriber)
    {
        $subscriber->delete();
        return back()->with('success', 'Subscriber removed');
    }

    // --- Emergency Setup & Migration ---
    public function migrate()
    {
        try {
            \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
            return "Migrations executed successfully: <pre>" . \Illuminate\Support\Facades\Artisan::output() . "</pre>";
        } catch (\Exception $e) {
            return "Migration failed: " . $e->getMessage();
        }
    }

    public function setup()
    {
        try {
            // Check if 'password' column exists, if not use 'password_hash'
            $column = \Illuminate\Support\Facades\Schema::hasColumn('users', 'password') ? 'password' : 'password_hash';

            $admin = \App\Models\User::updateOrCreate(
                ['email' => 'sanmatijournal@gmail.com'],
                [
                    'full_name' => 'Admin User',
                    $column => Hash::make('Njain@1984'),
                    'role' => 'admin',
                ]
            );

            return "Admin account configured successfully for {$admin->email} using column '{$column}'. Please try logging in now.";
        } catch (\Exception $e) {
            return "Setup failed: " . $e->getMessage();
        }
    }
}
