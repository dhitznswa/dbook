<?php

use App\Http\Controllers\HomepageController;
use App\Models\Book;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomepageController::class, 'index']);
