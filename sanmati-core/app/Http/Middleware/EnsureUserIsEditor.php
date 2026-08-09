<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsEditor
{
    /**
     * Handle an incoming request for Editor routes.
     * Allows access ONLY if user is authenticated AND has 'editor' or 'admin' role.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (! $user || ! in_array($user->role, ['editor', 'admin'])) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Unauthorized. Editor role required.'], 403);
            }
            abort(403, 'Unauthorized access. Editorial role privileges required.');
        }

        return $next($request);
    }
}
