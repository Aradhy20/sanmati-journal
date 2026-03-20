<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Submission;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class SubmissionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'abstract' => 'required|string',
            'keywords' => 'nullable|string|max:255',
            'manuscript' => 'required|file|mimes:pdf|max:10240', // 10MB Limit
            // In a real env, recaptcha validation happens here
        ]);

        $path = $request->file('manuscript')->store('submissions', 'local');

        // Note: For demonstration/development we default to a standard user 
        // if not explicitly authenticated through React yet
        $userId = Auth::id() ?? 1;

        $submission = Submission::create([
            'user_id' => $userId, 
            'title' => $validated['title'],
            'abstract' => $validated['abstract'],
            'keywords' => $validated['keywords'],
            'file_path' => $path,
            'status' => 'submitted',
        ]);

        return redirect()->back()->with('success', 'Manuscript submitted successfully.');
    }
}
