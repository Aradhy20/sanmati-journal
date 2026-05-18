<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeamMemberRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'qualifications' => 'nullable|string|max:1000',
            'experience' => 'nullable|string|max:1000',
            'bio' => 'nullable|string|max:2000',
            'photo' => 'nullable|image|max:2048',
        ];
    }
}
