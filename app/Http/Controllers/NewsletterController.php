<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email:rfc,dns'],
            'name'  => ['nullable', 'string', 'max:100'],
        ]);

        $existing = NewsletterSubscriber::where('email', $validated['email'])->first();

        if ($existing) {
            if ($existing->status === 'unsubscribed') {
                $existing->update(['status' => 'active']);
                return response()->json(['message' => 'Welcome back! You have been re-subscribed.'], 200);
            }
            return response()->json(['message' => 'You are already subscribed!'], 200);
        }

        NewsletterSubscriber::create([
            'email'  => $validated['email'],
            'name'   => $validated['name'] ?? null,
            'status' => 'active',
        ]);

        return response()->json(['message' => 'Thank you for subscribing to Sanmati Spectrum!'], 201);
    }

    public function unsubscribe(Request $request)
    {
        $validated = $request->validate(['email' => ['required', 'email']]);

        NewsletterSubscriber::where('email', $validated['email'])
            ->update(['status' => 'unsubscribed']);

        return response()->json(['message' => 'You have been successfully unsubscribed.'], 200);
    }
}
