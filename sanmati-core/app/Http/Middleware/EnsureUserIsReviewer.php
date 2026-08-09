<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureUserIsReviewer
{
    /**
     * Handle an incoming request for Reviewer routes.
     * Allows access ONLY if user is authenticated AND has 'reviewer' or 'admin' role.
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        if (! $user || ! in_array($user->role, ['reviewer', 'admin'])) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Unauthorized. Peer Reviewer role required.'], 403);
            }
            abort(403, 'Unauthorized access. Peer Reviewer portal is restricted to authorized peer reviewers and administrators.');
        }

        return $next($request);
    }
}
