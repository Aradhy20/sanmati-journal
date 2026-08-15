<?php

namespace App\Http\Controllers;

use App\Models\Paper;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadController extends Controller
{
    /**
     * Stream the published PDF to the user (and indexing bots).
     * This keeps the actual file path physically secure outside the public folder.
     */
    public function paper($id)
    {
        $paper = Paper::findOrFail($id);

        if (!$paper->file_url) {
            abort(404, 'Manuscript PDF not found.');
        }

        $path = $paper->file_url;

        // Redirect to external URL if the file_url is a fully qualified web address (e.g. Zenodo or Google Drive)
        if (filter_var($path, FILTER_VALIDATE_URL)) {
            return redirect()->away($path);
        }

        if (!Storage::disk('local')->exists($path) && !Storage::disk('public')->exists($path)) {
            abort(404, 'The requested file is no longer available on the server.');
        }

        $disk = Storage::disk('local')->exists($path) ? 'local' : 'public';

        return Storage::disk($disk)->download($path, Str::slug($paper->title) . '.pdf', [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . Str::slug($paper->title) . '.pdf"',
        ]);
    }

    public function downloadGuidelinesTemplate()
    {
        $path = storage_path('app/templates/Sanmati_Manuscript_Template.docx');
        if (!file_exists($path)) {
            abort(404, 'Guidelines template file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Manuscript_Template.docx', [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ]);
    }

    public function downloadCopyrightForm()
    {
        $path = storage_path('app/templates/Sanmati_Copyright_Declaration_Form.pdf');
        if (!file_exists($path)) {
            abort(404, 'Copyright declaration form is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Copyright_Declaration_Form.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }

    public function downloadVol1Issue1()
    {
        $path = public_path('pdfs/Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf');
        if (!file_exists($path)) {
            abort(404, 'Vol 1 Issue 1 compilation file is missing.');
        }
        return response()->download($path, 'Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }

    public function downloadSubmissionChecklist()
    {
        $path = storage_path('app/templates/Sanmati_Submission_Checklist.pdf');
        if (!file_exists($path)) {
            abort(404, 'Submission checklist file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Submission_Checklist.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }

    public function downloadCitationGuide()
    {
        $path = storage_path('app/templates/Sanmati_Citation_Guide.pdf');
        if (!file_exists($path)) {
            abort(404, 'Citation guide file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Citation_Guide.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }
}
