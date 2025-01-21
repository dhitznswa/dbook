<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Comment;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Book::factory(10)->recycle(User::factory(5)->create())->create();
        Comment::factory(50)->recycle(Book::factory(10)->recycle(User::factory(5)->create())->create())->create();
    }
}
