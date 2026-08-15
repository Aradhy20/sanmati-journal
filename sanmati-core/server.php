<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

$publicPath = __DIR__ . '/../public_html';
if ($uri !== '/' && is_file($publicPath . $uri)) {
    $filePath = $publicPath . $uri;
    $ext = pathinfo($filePath, PATHINFO_EXTENSION);
    $mimeTypes = [
        'css'  => 'text/css',
        'js'   => 'application/javascript',
        'json' => 'application/json',
        'txt'  => 'text/plain',
        'xml'  => 'application/xml',
        'webp' => 'image/webp',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png'  => 'image/png',
        'svg'  => 'image/svg+xml',
        'pdf'  => 'application/pdf',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    $contentType = $mimeTypes[strtolower($ext)] ?? mime_content_type($filePath);
    header("Content-Type: $contentType");
    header("Content-Length: " . filesize($filePath));
    readfile($filePath);
    exit;
}

require_once __DIR__.'/../public_html/index.php';
