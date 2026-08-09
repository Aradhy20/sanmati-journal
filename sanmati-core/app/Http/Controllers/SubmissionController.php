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
        // Honeypot spam protection: bots fill hidden fields, humans don't
        if ($request->filled('website')) {
            // Return a fake success to confuse bots without revealing detection
            return $request->header('X-Inertia')
                ? redirect()->back()->with('success', ['message' => 'Manuscript submitted successfully.', 'tracking_id' => 'SJ-BOT000'])
                : response()->json(['message' => 'Manuscript submitted successfully.', 'tracking_id' => 'SJ-BOT000'], 201);
        }

        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'title'              => 'required|string|max:255',
            'abstract'           => 'required|string',
            'keywords'           => 'required|string|max:500',
            'article_type'       => 'required|string|max:100',
            'author_name'        => 'required|string|max:150',
            'author_email'       => 'required|email',
            'country'            => 'required|string|max:100',
            'author_phone'       => 'nullable|string|max:20',
            'institution'        => 'nullable|string|max:255',
            'subject_area'       => 'nullable|string|max:150',
            'authors'            => 'nullable|array',
            'manuscript'         => 'required|file|mimes:pdf,doc,docx|max:20480', // 20 MB
            'supplementary_file' => 'nullable|file|mimes:pdf,doc,docx,zip|max:20480',
            'ai_precheck'        => 'nullable|string',
            'website'            => 'max:0', // Honeypot: must be empty
        ]);

        if ($validator->fails()) {
            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $validated = $validator->validated();

        $file = $request->file('manuscript');
        $returnCode = 0;
        
        if ($file && file_exists($file->getRealPath())) {
            $escapedPath = escapeshellarg($file->getRealPath());
            
            // Robust safety check: check if execution primitives are allowed on the server host
            if (function_exists('shell_exec')) {
                $hasClamscan = @shell_exec('which clamscan');
                if ($hasClamscan && function_exists('exec')) {
                    @exec("clamscan " . $escapedPath, $output, $returnCode);
                }
            }
        }

        // Clamscan returns 0 if no virus is found, 1 if a virus is found.
        if ($returnCode === 1) {
            return response()->json(['error' => 'The uploaded file has been flagged for security risks. Please contact editorial office.'], 400);
        }

        // Store the uploaded manuscript securely
        $path = $request->file('manuscript')->store('submissions', 'local');
        $uploadedFiles = [$path];

        // Store supplementary file if provided
        $suppPath = null;
        if ($request->hasFile('supplementary_file')) {
            $suppPath = $request->file('supplementary_file')->store('submissions/supplementary', 'local');
            $uploadedFiles[] = $suppPath;
        }

        // Decode AI precheck results if provided
        $aiPrecheckData = null;
        if (!empty($validated['ai_precheck'])) {
            $aiPrecheckData = json_decode($validated['ai_precheck'], true);
        }

        // Generate a human-readable unique tracking ID: SJ-XXXXXX
        $trackingId = 'SJ-' . strtoupper(substr(uniqid(), -6));

        // Save submission record inside a database transaction with coordinated file cleanup
        \Illuminate\Support\Facades\DB::beginTransaction();

        try {
            $submission = Submission::create([
                'user_id'                 => Auth::id(),
                'author_name'             => $validated['author_name'],
                'author_email'            => $validated['author_email'],
                'author_phone'            => $validated['author_phone'] ?? null,
                'institution'             => $validated['institution'] ?? null,
                'country'                 => $validated['country'],
                'subject_area'            => $validated['subject_area'] ?? null,
                'article_type'            => $validated['article_type'],
                'authors_json'            => $validated['authors'] ?? [],
                'tracking_id'             => $trackingId,
                'title'                   => $validated['title'],
                'abstract'                => $validated['abstract'],
                'keywords'                => $validated['keywords'],
                'file_path'               => $path,
                'supplementary_file_path' => $suppPath,
                'status'                  => 'submitted',
                'ai_precheck_results'     => $aiPrecheckData,
            ]);

            \App\Models\SubmissionStatusHistory::create([
                'submission_id' => $submission->id,
                'from_status'   => null,
                'to_status'     => 'submitted',
                'changed_by'    => Auth::id(),
                'note'          => 'Manuscript submitted successfully by author.',
            ]);

            \Illuminate\Support\Facades\DB::commit();
            \Illuminate\Support\Facades\Log::info("submission_created: Submission [{$trackingId}] created successfully for author [{$validated['author_name']}]");
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\DB::rollBack();

            // Safely delete newly stored files from this attempt to prevent orphaned files
            foreach ($uploadedFiles as $filePath) {
                if ($filePath && Storage::disk('local')->exists($filePath)) {
                    Storage::disk('local')->delete($filePath);
                }
            }

            \Illuminate\Support\Facades\Log::error("Submission DB transaction failed for [{$trackingId}]: " . $e->getMessage());

            if ($request->header('X-Inertia')) {
                return redirect()->back()->withErrors([
                    'submission' => 'An error occurred while saving your manuscript submission. Please try again or contact support.'
                ])->withInput();
            }

            return response()->json([
                'error' => 'An error occurred while processing your manuscript submission. Please try again.'
            ], 500);
        }

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

        // 1️⃣ Queue full details + PDF notification for the editorial inbox
        try {
            Mail::to(self::EDITORIAL_EMAIL)->queue($mail);

            // 2️⃣ Queue lightweight confirmation for the author
            Mail::to($validated['author_email'])->queue(
                new AuthorConfirmationMail(
                    authorName: $validated['author_name'],
                    paperTitle: $validated['title'],
                    trackingId: $trackingId,
                )
            );

            \Illuminate\Support\Facades\Log::info("email_queued: Enqueued PaperSubmissionMail and AuthorConfirmationMail for submission [{$trackingId}]");
        } catch (\Throwable $e) {
            // Log mail queueing exception without failing the database submission
            \Illuminate\Support\Facades\Log::error("email_queue_failed: Failed to enqueue emails for submission [{$trackingId}]: " . $e->getMessage());
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
