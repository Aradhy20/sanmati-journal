<?php

namespace App\Http\Controllers;

use App\Mail\AuthorConfirmationMail;
use App\Mail\PaperSubmissionMail;

use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{
    /** Journal editorial inbox */
    const EDITORIAL_EMAIL = 'sanmatijournal@gmail.com';

    public function store(Request $request)
    {
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'title'        => 'required|string|max:255',
            'abstract'     => 'required|string',
            'keywords'     => 'nullable|string|max:500',
            'author_name'  => 'required|string|max:150',
            'author_email' => 'required|email',
            'author_phone' => 'nullable|string|max:20',
            'institution'  => 'nullable|string|max:255',
            'subject_area' => 'nullable|string|max:150',
            'manuscript'   => 'required|file|mimes:pdf,doc,docx|max:20480', // 20 MB
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $validated = $validator->validated();

        $file = $request->file('manuscript');
        $escapedPath = escapeshellarg($file->getRealPath());
        @exec("clamscan " . $escapedPath, $output, $returnCode);

        // Clamscan returns 0 if no virus is found, 1 if a virus is found. Any other code is an execution error.
        // If returnCode is 1, malware is confirmed. If not 0 or 1, clamscan probably failed or is missing.
        if ($returnCode === 1) {
            return response()->json(['error' => 'The uploaded file has been flagged for security risks. Please contact editorial office.'], 400);
        }
        // NOTE: We allow the upload if clamscan is missing (127) to maintain service availability.

        // Store the uploaded PDF securely
        $path = $request->file('manuscript')->store('submissions', 'local');

        // Generate a human-readable unique tracking ID: SJ-XXXXXX
        $trackingId = 'SJ-' . strtoupper(substr(uniqid(), -6));

        // Save submission record to database
        $submission = Submission::create([
            'user_id'      => Auth::id(),
            'author_name'  => $validated['author_name'],
            'author_email' => $validated['author_email'],
            'author_phone' => $validated['author_phone'] ?? null,
            'institution'  => $validated['institution'] ?? null,
            'subject_area' => $validated['subject_area'] ?? null,
            'tracking_id'  => $trackingId,
            'title'        => $validated['title'],
            'abstract'     => $validated['abstract'],
            'keywords'     => $validated['keywords'] ?? null,
            'file_path'    => $path,
            'status'       => 'submitted',
        ]);

        // Build the mail object
        $mail = new PaperSubmissionMail(
            paperTitle:   $validated['title'],
            abstract:     $validated['abstract'],
            keywords:     $validated['keywords'] ?? '',
            authorName:   $validated['author_name'],
            authorEmail:  $validated['author_email'],
            authorPhone:  $validated['author_phone'] ?? '',
            institution:  $validated['institution'] ?? '',
            subjectArea:  $validated['subject_area'] ?? '',
            trackingId:   $trackingId,
            filePath:     $path,
        );

        // 1️⃣ Send full details + PDF to the editorial inbox
        try {
            Mail::to(self::EDITORIAL_EMAIL)->send($mail);

            // 2️⃣ Send a lightweight confirmation to the author
            Mail::to($validated['author_email'])->send(
                new AuthorConfirmationMail(
                    authorName: $validated['author_name'],
                    paperTitle: $validated['title'],
                    trackingId: $trackingId,
                )
            );
        } catch (\Exception $e) {
            // Log mail failure but don't crash the submission
            \Illuminate\Support\Facades\Log::error("Mail submission failed for {$trackingId}: " . $e->getMessage());
        }

        if ($request->header('X-Inertia')) {
            return redirect()->back()->with('success', [
                'message' => 'Manuscript submitted successfully.',
                'tracking_id' => $trackingId
            ]);
        }

        return response()->json([
            'message'     => 'Manuscript submitted successfully.',
            'tracking_id' => $trackingId,
        ], 201);
    }
}
