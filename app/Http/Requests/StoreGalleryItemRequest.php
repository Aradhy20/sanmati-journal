<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGalleryItemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'image' => 'required|image|max:5120',
            'caption' => 'nullable|string|max:255',
            'category' => 'required|string|in:photo,news,event,campus',
        ];
    }
}
