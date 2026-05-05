<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Generate a nonce for this request
        $nonce = base64_encode(random_bytes(16));
        \Illuminate\Support\Facades\Vite::useCspNonce($nonce);

        $response = $next($request);

        // Security Headers
        $response->headers->set('X-Frame-Options', 'SAMEORIGIN');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-XSS-Protection', '1; mode=block');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
        $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        
        // Content Security Policy
        $scriptSrc = "'self' 'nonce-{$nonce}' https://www.googletagmanager.com https://www.google-analytics.com";
        $styleSrc = "'self' 'unsafe-inline' https://fonts.googleapis.com"; // unsafe-inline often needed for dynamic styles in React
        $connectSrc = "'self' https://www.google-analytics.com";
        $fontSrc = "'self' data: https://fonts.gstatic.com";

        if (app()->environment('local')) {
            $scriptSrc .= " 'unsafe-eval' http://localhost:5173"; // Vite needs unsafe-eval in dev
            $styleSrc .= " http://localhost:5173";
            $connectSrc .= " http://localhost:5173 ws://localhost:5173";
        }

        $csp = "default-src 'self'; " .
               "script-src $scriptSrc; " .
               "style-src $styleSrc; " .
               "img-src 'self' data: https:; " .
               "font-src $fontSrc; " .
               "connect-src $connectSrc; " .
               "frame-src 'self' https://www.googletagmanager.com;";
        
        $response->headers->set('Content-Security-Policy', $csp);

        return $response;
    }
}
