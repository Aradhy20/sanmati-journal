<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Paper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q', '');
        
        if (strlen($query) < 2) {
            return response()->json(['papers' => [], 'books' => []]);
        }

        $driver = DB::connection()->getDriverName();

        if ($driver === 'sqlite') {
            // SQLite standard LIKE fallback since SQLite does not support standard FULLTEXT indices in Laravel out-of-the-box
            $papers = Paper::where(function($q) use ($query) {
                $q->where('title', 'like', "%{$query}%")
                  ->orWhere('abstract', 'like', "%{$query}%")
                  ->orWhere('authors', 'like', "%{$query}%");
            })
            ->limit(5)
            ->get(['id', 'title', 'authors']);

            $books = Book::where(function($q) use ($query) {
                $q->where('title', 'like', "%{$query}%")
                  ->orWhere('author', 'like', "%{$query}%")
                  ->orWhere('isbn', 'like', "%{$query}%");
            })
            ->limit(5)
            ->get(['id', 'title', 'author', 'cover_image']);
        } else {
            // Use FULLTEXT indexing for title, abstract, authors
            $papers = Paper::whereFullText(['title', 'abstract', 'authors'], $query)
                ->limit(5)
                ->get(['id', 'title', 'authors']);

            // Use FULLTEXT for title and author, but keep LIKE for exact ISBN matches
            $books = Book::whereFullText(['title', 'author'], $query)
                ->orWhere('isbn', 'like', "%{$query}%")
                ->limit(5)
                ->get(['id', 'title', 'author', 'cover_image']);
        }

        return response()->json([
            'papers' => $papers,
            'books' => $books
        ]);
    }
}

