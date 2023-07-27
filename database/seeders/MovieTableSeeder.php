<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shashank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=a3OtNRvLa0E&t=4s', 
                'thumbnail' => 'https://unsplash.com/photos/tloFnD-7EpI',
                'rating' => 9.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=a3OtNRvLa0E&t=4s', 
                'thumbnail' => 'https://unsplash.com/photos/tloFnD-7EpI',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=a3OtNRvLa0E&t=4s', 
                'thumbnail' => 'https://unsplash.com/photos/tloFnD-7EpI',
                'rating' => 9.0,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
