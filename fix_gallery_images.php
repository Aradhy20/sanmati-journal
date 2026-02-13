<?php

use App\Models\Gallery;
use Illuminate\Support\Facades\File;

echo "Starting gallery import...\n";

// Truncate table to remove invalid paths
Gallery::truncate();
echo "Truncated gallery table.\n";

$count = 0;

// Process News
$newsPath = public_path('gallery/news');
if (File::exists($newsPath)) {
    $files = File::files($newsPath);
    foreach ($files as $file) {
        Gallery::create([
            'image_url' => 'gallery/news/' . $file->getFilename(),
            'caption' => 'News Image', 
            'category' => 'news'
        ]);
        $count++;
    }
    echo "Imported news images.\n";
} else {
    echo "News directory not found: $newsPath\n";
}

// Process Photos
$photosPath = public_path('gallery/photos');
if (File::exists($photosPath)) {
    $files = File::files($photosPath);
    foreach ($files as $file) {
        Gallery::create([
            'image_url' => 'gallery/photos/' . $file->getFilename(),
            'caption' => 'Gallery Photo', 
            'category' => 'photo'
        ]);
        $count++;
    }
    echo "Imported photo images.\n";
} else {
    echo "Photos directory not found: $photosPath\n";
}

echo "Total imported: $count\n";
