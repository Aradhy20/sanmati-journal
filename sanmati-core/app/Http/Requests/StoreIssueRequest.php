<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIssueRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'volume' => 'required|string|max:50',
            'number' => 'required|string|max:50',
            'year' => 'required|integer|min:2020|max:2100',
            'month_range' => 'nullable|string|max:100',
            'is_current' => 'boolean',
        ];
    }
}
