<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['publisher', 'comment'])->latest();

        Inertia::share("poppularBook", $books->limit(6)->get());

        return inertia('Book', [
            'books' => $books->get()
        ]);
    }
}
