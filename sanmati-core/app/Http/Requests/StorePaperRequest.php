<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePaperRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Authorization handled by middleware
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:500',
            'authors' => 'required|string|max:1000',
            'abstract' => 'nullable|string|max:5000',
            'category' => 'nullable|string|max:100',
            'issue_id' => 'required|exists:issues,id',
            'file_url' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'is_featured' => 'boolean',
        ];
    }
}
