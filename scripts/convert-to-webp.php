<?php

// Convert JPG, JPEG, PNG to WebP using GD
$publicPath = dirname(__DIR__) . '/public_html';

if (!extension_loaded('gd')) {
    echo "GD extension is not loaded. Cannot perform WebP conversion.\n";
    exit(1);
}

function convertToWebp($sourcePath, $destinationPath) {
    $info = getimagesize($sourcePath);
    if (!$info) {
        return false;
    }

    $mime = $info['mime'];
    switch ($mime) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($sourcePath);
            break;
        case 'image/png':
            $image = imagecreatefrompng($sourcePath);
            // Preserve transparency for PNG
            imagepalettetotruecolor($image);
            imagealphablending($image, false);
            imagesavealpha($image, true);
            break;
        default:
            return false;
    }

    if (!$image) {
        return false;
    }

    // Save as WebP with 85% quality
    $success = imagewebp($image, $destinationPath, 85);
    imagedestroy($image);

    return $success;
}

// Recursively find images
$directory = new RecursiveDirectoryIterator($publicPath);
$iterator = new RecursiveIteratorIterator($directory);
$pattern = '/\.(jpg|jpeg|png)$/i';

$convertedCount = 0;
$skippedCount = 0;

foreach ($iterator as $file) {
    if ($file->isFile()) {
        $filePath = $file->getPathname();
        
        // Skip files inside build directory
        if (strpos($filePath, DIRECTORY_SEPARATOR . 'build' . DIRECTORY_SEPARATOR) !== false) {
            continue;
        }

        if (preg_match($pattern, $filePath)) {
            $webpPath = preg_replace($pattern, '.webp', $filePath);
            
            if (file_exists($webpPath)) {
                echo "Skipped (already exists): " . basename($filePath) . "\n";
                $skippedCount++;
                continue;
            }

            echo "Converting " . basename($filePath) . " to WebP... ";
            if (convertToWebp($filePath, $webpPath)) {
                echo "Done.\n";
                $convertedCount++;
            } else {
                echo "Failed.\n";
            }
        }
    }
}

echo "\nConversion complete! Converted: $convertedCount, Skipped: $skippedCount\n";
