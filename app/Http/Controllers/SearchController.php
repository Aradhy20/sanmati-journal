<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Paper;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q', '');
        
        if (strlen($query) < 2) {
            return response()->json(['papers' => [], 'books' => []]);
        }

        $papers = Paper::where('title', 'like', "%{$query}%")
            ->orWhere('abstract', 'like', "%{$query}%")
            ->orWhere('authors', 'like', "%{$query}%")
            ->limit(5)
            ->get(['id', 'title', 'authors']);

        $books = Book::where('title', 'like', "%{$query}%")
            ->orWhere('author', 'like', "%{$query}%")
            ->orWhere('isbn', 'like', "%{$query}%")
            ->limit(5)
            ->get(['id', 'title', 'author', 'cover_image']);

        return response()->json([
            'papers' => $papers,
            'books' => $books
        ]);
    }
}
