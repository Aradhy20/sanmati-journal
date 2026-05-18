<?php

namespace App\Services;

use App\Models\News;
use App\Models\Paper;
use App\Models\Book;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;

class JournalService
{
    /**
     * Fetch active news items compiled via cache.
     */
    public function getActiveNews(int $limit = 10)
    {
        return Cache::remember('active_news', 3600, function () use ($limit) {
            return News::where('is_active', true)
                ->orderBy('created_at', 'desc')
                ->take($limit)
                ->get();
        });
    }

    /**
     * Fetch featured papers, gracefully falling back to latest if none are featured.
     */
    public function getFeaturedPapers(int $limit = 3)
    {
        $featured = Paper::where('is_featured', true)
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();

        if ($featured->isEmpty()) {
            return Paper::orderBy('created_at', 'desc')->take($limit)->get();
        }

        return $featured;
    }

    /**
     * Fetch all published books, with an automatic seeder from public filesystem if empty.
     */
    public function getPublishedBooks()
    {
        try {
            $books = Book::where('is_published', true)->orderBy('created_at', 'desc')->get();

            if ($books->isEmpty()) {
                $this->seedBooksFromFilesystem();
                $books = Book::where('is_published', true)->orderBy('created_at', 'desc')->get();
            }

            return $books;
        } catch (\Exception $e) {
            // Table may not exist yet (pre-migration deploy). Return empty gracefully.
            return collect([]);
        }
    }

    /**
     * Fetch all active testimonials. Auto-seeds default schema if table is empty.
     */
    public function getActiveTestimonials()
    {
        try {
            return Cache::remember('active_testimonials', 3600, function () {
                $records = Testimonial::where('is_active', true)->get();

                if ($records->isEmpty()) {
                    $this->seedDefaultTestimonials();
                    $records = Testimonial::where('is_active', true)->get();
                }

                return $records;
            });
        } catch (\Exception $e) {
            // Table may not exist yet (pre-migration deploy). Return empty gracefully.
            return collect([]);
        }
    }

    /* ==========================================================
     * Private Seeders (Used only once to boot empty databases)
     * ========================================================== */

    private function seedBooksFromFilesystem()
    {
        $booksPath = public_path('images/books');
        
        if (File::exists($booksPath)) {
            $files = File::files($booksPath);
            $index = 1;

            foreach ($files as $file) {
                if (in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp'])) {
                    Book::create([
                        'title' => 'Academic Volume ' . $index,
                        'author' => 'JTS Publications',
                        'image_url' => '/images/books/' . $file->getFilename(),
                        'is_published' => true
                    ]);
                    $index++;
                }
            }
        }
    }

    private function seedDefaultTestimonials()
    {
        Testimonial::insert([
            ['name' => 'Dr. Amit Sharma', 'role' => 'Professor, IIT Delhi', 'text' => "Sanmati's book publications are of exceptional quality. The peer-review process is rigorous and the editorial team is highly responsive.", 'image_url' => '/fistudy-assets/team/team-1-2.jpg', 'stars' => 5],
            ['name' => 'Prof. Ritu Verma', 'role' => 'Researcher, JNU', 'text' => "The multidisciplinary focus and premium hardcover quality make their publications stand out. I'd recommend to every academic author.", 'image_url' => '/fistudy-assets/team/team-2-1.jpg', 'stars' => 5],
            ['name' => 'Dr. Pradeep Kumar', 'role' => 'Associate Professor, BHU', 'text' => "From manuscript to final book, the journey was smooth and professional. The global distribution is a huge plus for visibility.", 'image_url' => '/fistudy-assets/team/team-2-2.jpg', 'stars' => 5]
        ]);
    }
}
