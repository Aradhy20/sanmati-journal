<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\News;
use App\Models\Paper;
use App\Models\TeamMember;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'pendingEnquiries' => Enquiry::count(),
                'totalPapers' => Paper::count(),
                'activeNews' => News::where('is_active', true)->count(),
                'teamMembers' => TeamMember::count(),
            ]
        ]);
    }

    public function enquiries()
    {
        return Inertia::render('Admin/Enquiries', [
            'enquiries' => Enquiry::orderBy('created_at', 'desc')->get()
        ]);
    }

    public function news()
    {
        return Inertia::render('Admin/News', [
            'news' => News::orderBy('created_at', 'desc')->get()
        ]);
    }

    public function papers()
    {
        return Inertia::render('Admin/Papers', [
            'papers' => Paper::with('issue')->orderBy('created_at', 'desc')->get(),
            'issues' => \App\Models\Issue::orderBy('year', 'desc')->orderBy('number', 'desc')->get()
        ]);
    }

    public function storeIssue(Request $request)
    {
        $validated = $request->validate([
            'volume' => 'required|string',
            'number' => 'required|string',
            'year' => 'required|integer',
            'month_range' => 'nullable|string',
            'is_current' => 'boolean',
        ]);

        if ($validated['is_current'] ?? false) {
            \App\Models\Issue::where('is_current', true)->update(['is_current' => false]);
        }

        \App\Models\Issue::create($validated);
        return back()->with('success', 'Issue created');
    }

    public function toggleIssue( \App\Models\Issue $issue)
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

    public function storePaper(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'authors' => 'required|string',
            'abstract' => 'nullable|string',
            'category' => 'nullable|string',
            'issue_id' => 'required|exists:issues,id',
            'file_url' => 'nullable|file|mimes:pdf,doc,docx|max:10240', // Max 10MB
            'is_featured' => 'boolean'
        ]);

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
            // Default other fields
            'category' => $request->input('category', 'Research Paper'), // Ensure category is saved if validated (add to validation if missing)
            'citations' => 0
        ]);

        return Redirect::back()->with('success', 'Paper added successfully.');
    }

    public function deletePaper(Paper $paper)
    {
        $paper->delete();
        return Redirect::back()->with('success', 'Paper deleted successfully.');
    }

    // --- Team ---
    public function team()
    {
        $team = TeamMember::orderBy('display_order', 'asc')->get();
        return Inertia::render('Admin/Team', [
            'teamMembers' => $team
        ]);
    }

    public function storeTeamMember(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'role' => 'required|string',
            'qualifications' => 'nullable|string',
            'experience' => 'nullable|string',
            'bio' => 'nullable|string',
            'photo' => 'nullable|image|max:2048', // Max 2MB
        ]);

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
        if ($teamMember->photo_url && \Illuminate\Support\Facades\Storage::disk('public')->exists($teamMember->photo_url)) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($teamMember->photo_url);
        }
        $teamMember->delete();
        return back()->with('success', 'Team member deleted');
    }


    public function updateEnquiryStatus(Request $request, Enquiry $enquiry)
    {
        $enquiry->update(['status' => $request->status]);
        return back()->with('success', 'Status updated');
    }

    public function storeNews(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
            'type' => 'required|string',
            'link_url' => 'nullable|url',
        ]);

        News::create($validated);
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


    
    public function gallery()
    {
        return Inertia::render('Admin/Gallery', [
            'gallery' => \App\Models\Gallery::orderBy('created_at', 'desc')->get()
        ]);
    }

    public function storeGalleryItem(Request $request)
    {
        $validated = $request->validate([
            'image' => 'required|image|max:5120', // Max 5MB
            'caption' => 'nullable|string',
            'category' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery', 'public');
            $validated['image_url'] = $path;
        }
        unset($validated['image']);

        \App\Models\Gallery::create($validated);
        return back()->with('success', 'Gallery item added');
    }


    public function deleteGalleryItem(\App\Models\Gallery $gallery)
    {
        if ($gallery->image_url && \Illuminate\Support\Facades\Storage::disk('public')->exists($gallery->image_url)) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($gallery->image_url);
        }
        $gallery->delete();
        return back()->with('success', 'Gallery item deleted');
    }

}
