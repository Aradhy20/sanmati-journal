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

    private function getTemplatePath(string $filename): ?string
    {
        $candidates = [
            storage_path("app/templates/{$filename}"),
            storage_path("app/private/templates/{$filename}"),
            public_path("templates/{$filename}"),
            base_path("../public_html/templates/{$filename}"),
        ];

        foreach ($candidates as $path) {
            if (file_exists($path)) {
                return $path;
            }
        }

        return null;
    }

    public function downloadGuidelinesTemplate()
    {
        $path = $this->getTemplatePath('Sanmati_Manuscript_Template.docx');
        if (!$path) {
            abort(404, 'Guidelines template file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Manuscript_Template.docx', [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ]);
    }

    public function downloadCopyrightForm()
    {
        $path = $this->getTemplatePath('Sanmati_Copyright_Declaration_Form.pdf');
        if (!$path) {
            abort(404, 'Copyright declaration form is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Copyright_Declaration_Form.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }

    public function downloadVol1Issue1()
    {
        $candidates = [
            public_path('pdfs/Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf'),
            base_path('../public_html/pdfs/Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf'),
            storage_path('app/public/pdfs/Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf'),
        ];

        foreach ($candidates as $path) {
            if (file_exists($path)) {
                return response()->download($path, 'Sanmati_Spectrum_Vol1_Jan_Mar_2026.pdf', [
                    'Content-Type' => 'application/pdf',
                ]);
            }
        }

        abort(404, 'Vol 1 Issue 1 compilation file is missing.');
    }

    public function downloadSubmissionChecklist()
    {
        $path = $this->getTemplatePath('Sanmati_Submission_Checklist.pdf');
        if (!$path) {
            abort(404, 'Submission checklist file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Submission_Checklist.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }

    public function downloadCitationGuide()
    {
        $path = $this->getTemplatePath('Sanmati_Citation_Guide.pdf');
        if (!$path) {
            abort(404, 'Citation guide file is missing on the server.');
        }
        return response()->download($path, 'Sanmati_Citation_Guide.pdf', [
            'Content-Type' => 'application/pdf',
        ]);
    }
}
