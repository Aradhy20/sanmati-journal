<?php
use App\Models\Book;
use App\Models\TeamMember;
use Illuminate\Support\Facades\File;

echo "Starting seeding...\n";

// 1. Seed Books
$booksPath = public_path('images/books');
if (File::exists($booksPath)) {
    $files = File::files($booksPath);
    $index = Book::count() + 1;
    foreach ($files as $file) {
        if (in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp'])) {
            $path = '/images/books/' . $file->getFilename();
            if (!Book::where('image_url', $path)->exists()) {
                Book::create([
                    'title' => 'Academic Volume ' . $index,
                    'author' => 'JTS Publications',
                    'image_url' => $path,
                    'is_published' => true
                ]);
                $index++;
            }
        }
    }
    echo "Books seeded.\n";
}

// 2. Seed Team Members
$teamPath = public_path('images/team');
if (File::exists($teamPath)) {
    $files = File::files($teamPath);
    
    foreach ($files as $file) {
        if (in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp'])) {
            $path = '/images/team/' . $file->getFilename();
            // Extract name from filename
            $name = pathinfo($file->getFilename(), PATHINFO_FILENAME);
            
            // Skip logo, mam, sir since they belong to Leadership/Heroes
            if (in_array(strtolower($name), ['logo', 'mam', 'sir'])) {
                continue;
            }

            if (!TeamMember::where('name', $name)->exists()) {
                TeamMember::create([
                    'name' => $name,
                    'role' => 'Member',
                    'qualifications' => 'Ph.D. / Academic Assessor',
                    'photo_url' => $path,
                    'is_active' => true,
                    'display_order' => 10
                ]);
            }
        }
    }
    echo "Team Members seeded.\n";
}

echo "Seeding completed successfully.\n";
