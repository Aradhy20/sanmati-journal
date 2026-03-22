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

        // Assuming file_url is stored relative to the "local" or "public" disk root
        // If it's stored via $request->file()->store('papers'), it is in storage/app/papers/
        // We will stream it so memory isn't exhausted holding massive PDFs
        $path = $paper->file_url;

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
