<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('cover')->nullable();
            $table->string('title', 255);
            $table->text('description');

            // Relasi ke model User
            $table->unsignedBigInteger('publisher_id');
            $table->foreign('publisher_id')->references('id')->on('users');

            $table->timestamps();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('comment');

            // Relasi ke Model Books
            $table->unsignedBigInteger('book_id');
            $table->foreign('book_id')->references('id')->on('books');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
        Schema::dropIfExists('comments');
    }
};
