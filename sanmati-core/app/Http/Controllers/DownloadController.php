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
}
