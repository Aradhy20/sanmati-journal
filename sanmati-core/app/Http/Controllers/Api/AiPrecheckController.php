<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ManuscriptPrecheckService;
use Illuminate\Http\Request;

class AiPrecheckController extends Controller
{
    protected ManuscriptPrecheckService $precheckService;

    public function __construct(ManuscriptPrecheckService $precheckService)
    {
        $this->precheckService = $precheckService;
    }

    public function precheck(Request $request)
    {
        try {
            $data = $request->only([
                'title',
                'abstract',
                'keywords',
                'author_name',
                'author_email',
                'institution',
                'country',
                'article_type',
                'authors',
            ]);

            if ($request->hasFile('manuscript')) {
                $file = $request->file('manuscript');
                $data['file_info'] = [
                    'original_name' => $file->getClientOriginalName(),
                    'extension'     => strtolower($file->getClientOriginalExtension()),
                    'size'          => $file->getSize(),
                    'mime_type'     => $file->getMimeType(),
                ];
            }

            $result = $this->precheckService->analyze($data);

            return response()->json($result);
        } catch (\Throwable $e) {
            // Graceful fallback if AI pre-check service fails or is offline
            return response()->json([
                'available' => false,
                'message'   => 'AI pre-check is currently unavailable. You can still submit your manuscript normally.',
                'checks'    => [],
                'suggestions' => [],
            ]);
        }
    }
}
