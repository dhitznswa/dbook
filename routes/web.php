<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\HomepageController;
use App\Models\Book;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomepageController::class, 'index']);

// Routing for handle book
Route::get('/book', [BookController::class, 'index']);
