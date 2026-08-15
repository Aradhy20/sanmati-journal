<?php

namespace App\Services;

use App\Models\News;
use App\Models\Paper;
use App\Models\Book;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use App\Models\Issue;

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
        $selectFields = ['id', 'title', 'authors', 'doi', 'citations', 'category', 'is_featured', 'created_at'];

        $featured = Paper::select($selectFields)
            ->where('is_featured', true)
            ->orderBy('created_at', 'desc')
            ->take($limit)
            ->get();

        if ($featured->isEmpty()) {
            return Paper::select($selectFields)
                ->orderBy('created_at', 'desc')
                ->take($limit)
                ->get();
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
            
            // Sort files to ensure deterministic seeding (e.g. by filename)
            usort($files, function ($a, $b) {
                return strcmp($a->getFilename(), $b->getFilename());
            });

            $realBooks = [
                ["title" => "मन्नू भंडारी के कथा साहित्य में स्त्री विमर्श", "author" => "Dr. Namrta Jain"],
                ["title" => "डी.एल.एड. प्रथम सेमेस्टर एवं चतुर्थ सेमेस्टर (SCERT, उ.प्र.) हेतु हिंदी शिक्षण", "author" => "Dr. Namrta Jain"],
                ["title" => "मूल मनोवैज्ञानिक प्रक्रियाएं", "author" => "Dr. Namrta Jain"],
                ["title" => "प्रयोजनमूलक भाषा एवं अनुवाद", "author" => "Dr. Namrta Jain"],
                ["title" => "Development of Education System in India", "author" => "Dr. Namrta Jain"],
                ["title" => "भारतीय शिक्षा प्रणाली का बदलता स्वरूप", "author" => "Dr. Namrta Jain"],
                ["title" => "भारतीय समाज एवं मनोविज्ञान", "author" => "Dr. Namrta Jain"],
                ["title" => "सामाजिक परिवर्तन और सामाजिक आंदोलनों का समाजशास्त्र", "author" => "Dr. Namrta Jain"],
                ["title" => "भारतीय ज्ञान परम्परा: विज्ञान, दर्शन, संस्कृति और स्वास्थ्य की विरासत", "author" => "Dr. Namrta Jain"],
                ["title" => "टीजीटी एवं पीजीटी (हिंदी व संस्कृत) विषयों पर प्रतियोगी पुस्तकों का लेखन", "author" => "Dr. Namrta Jain"],
                ["title" => "डी.एल.एड. प्रथम, तृतीय एवं चतुर्थ सेमेस्टर (SCERT, उ.प्र.) हेतु विज्ञान शिक्षण", "author" => "Dr. Ratnesh Kumar Jain"],
                ["title" => "Microbiology & Plant Pathology", "author" => "Dr. Ratnesh Kumar Jain"],
                ["title" => "Core Science", "author" => "Dr. Ratnesh Kumar Jain"],
                ["title" => "महाविद्यालयीन स्तर पर शैक्षिक प्रशासन एवं प्रबन्धन में प्राचार्यों की भूमिका", "author" => "Dr. Ratnesh Kumar Jain"],
                ["title" => "राष्ट्र निर्माण का युवा मंच: राष्ट्रीय सेवा योजना", "author" => "Dr. Ratnesh Kumar Jain"],
                ["title" => "वैश्विक विचारधाराओं का मूल : भारतीय ज्ञान परंपराएँ", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "वैश्विक चिंतन एवं भारतीय ज्ञान परंपराएँ", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय ज्ञान परंपराओं का वैश्विक दृष्टिकोण", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "यथार्थ के धरातल पर मानवीय विचारों की दिशाएँ", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "New Education Policy: Different Dimensions of Education", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "राष्ट्रीय शिक्षा नीति 2020 : वर्तमान परिदृश्य में शिक्षा के विभिन्न आयाम", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय लोकतंत्र का चतुर्थ स्तंभ : मीडिया (भाग-1)", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय लोकतंत्र का चतुर्थ स्तंभ : मीडिया (भाग-2)", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "समकालीन साहित्य और स्त्री विमर्श", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "पंडित श्रीराम शर्मा आचार्य की सामाजिक क्रांति और नारी जागरण", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "स्वामी विवेकानंद की सामाजिक क्रांति", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "प्रेमचंद के साहित्य में प्रतिरोध के स्वर", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारत की गतिशील प्रवृत्ति के आधार स्तंभ : महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुष", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय परिवेश में किन्नर जीवन की भूमिका", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय समाज के विविध आयाम", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारत के महान शिक्षाशास्त्री, दार्शनिक, साहित्यकार एवं महापुरुषों का पथ-प्रदर्शन : एक संगोष्ठी", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "शिक्षा, शिक्षक एवं शिक्षार्थी : त्रिध्रुवीय प्रक्रिया का बृहद् अवलोकन", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "महान शिक्षाशास्त्रियों, साहित्यकारों, महापुरुषों एवं दार्शनिकों का भारत के विकास में महत्वपूर्ण अवदान", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय साहित्य, सिनेमा और संस्कृति के विविध आयाम", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारत के महान शिक्षाशास्त्रियों, दार्शनिकों, साहित्यकारों एवं महापुरुषों का योगदान", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "आत्मनिर्भर भारत के विविध आयाम : आवश्यकताएँ, चुनौतियाँ एवं समाधान (भाग-1)", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "आत्मनिर्भर भारत के विविध आयाम : आवश्यकताएँ, चुनौतियाँ एवं समाधान (भाग-2)", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "भारतीय शोध प्रकाशन के परिदृश्य और शोध प्रविधि", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "नव भारत की दिशा : शिक्षा, तकनीक, स्वास्थ्य एवं समाज", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "नव भारत का पथ : शिक्षा, तकनीक, स्वास्थ्य और समाज", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"],
                ["title" => "The Direction of New India: Education, Technology, Health and Society", "author" => "Edited by Dr. Namrta Jain & Dr. Ratnesh Kumar Jain"]
            ];

            $index = 0;
            foreach ($files as $file) {
                if (in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'webp'])) {
                    $bookData = isset($realBooks[$index]) ? $realBooks[$index] : [
                        'title' => 'Academic Volume ' . ($index + 1),
                        'author' => 'JTS Publications'
                    ];

                    Book::create([
                        'title' => $bookData['title'],
                        'author' => $bookData['author'],
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

    /**
     * Get live statistics of the journal dynamically calculated from database.
     * Cached for 24 hours to optimize performance.
     */
    public function getJournalStats()
    {
        return Cache::remember('journal_stats', 86400, function () {
            $papersCount = Paper::count();
            if ($papersCount === 0) {
                return [
                    'papers' => 0,
                    'authors' => 0,
                    'volumes' => 0,
                    'issues' => 0,
                ];
            }

            // Inexpensive extraction of unique authors
            $authorsList = Paper::pluck('authors')->toArray();
            $uniqueAuthors = [];
            foreach ($authorsList as $authors) {
                $parts = preg_split('/(,\s*|\s*&\s*|\s+and\s+)/i', $authors);
                foreach ($parts as $part) {
                    $author = trim($part);
                    if (strlen($author) > 2) {
                        $uniqueAuthors[$author] = true;
                    }
                }
            }

            return [
                'papers' => $papersCount,
                'authors' => count($uniqueAuthors),
                'volumes' => Issue::distinct('volume')->count(),
                'issues' => Issue::count(),
            ];
        });
    }
}
