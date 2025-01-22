<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['publisher', 'comment'])->limit(6)->get();
        return inertia('Book', [
            'books' => $books
        ]);
    }
}
