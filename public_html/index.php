<?php
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Resolve sanmati-core path dynamically
$corePath = realpath(__DIR__ . '/../sanmati-core') ?: realpath(__DIR__ . '/../../sanmati-core') ?: realpath(__DIR__ . '/../../../sanmati-core') ?: __DIR__ . '/../sanmati-core';

// Auto-create Laravel storage directories if they are missing
$storageDirs = [
    $corePath . '/storage/framework/cache/data',
    $corePath . '/storage/framework/sessions',
    $corePath . '/storage/framework/views',
    $corePath . '/storage/app/public',
];
foreach ($storageDirs as $dir) {
    if (!file_exists($dir)) {
        @mkdir($dir, 0775, true);
    }
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = $corePath.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require $corePath.'/vendor/autoload.php';

// Bootstrap the application and handle the request...
(require_once $corePath.'/bootstrap/app.php')
    ->handleRequest(Request::capture());
