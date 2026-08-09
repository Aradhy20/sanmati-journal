<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo('/login');
        $middleware->validateCsrfTokens(except: [
            'api/submission/precheck',
            'api/newsletter/subscribe',
        ]);
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
        ]);
        $middleware->append(\App\Http\Middleware\SecurityHeaders::class);
        $middleware->alias([
            'admin'    => \App\Http\Middleware\EnsureUserIsAdmin::class,
            'editor'   => \App\Http\Middleware\EnsureUserIsEditor::class,
            'reviewer' => \App\Http\Middleware\EnsureUserIsReviewer::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();

$app->usePublicPath(__DIR__.'/../../public_html');

return $app;
