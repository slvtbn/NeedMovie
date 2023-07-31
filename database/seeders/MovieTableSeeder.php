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
                'thumbnail' => "https://wallpapercave.com/dwp1x/wp2014258.jpg",
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=a3OtNRvLa0E&t=4s', 
                'thumbnail' => 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/07/14/4186926147.jpg',
                'rating' => 4.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=a3OtNRvLa0E&t=4s', 
                'thumbnail' => 'https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/07/29/1812697777.jpg',
                'rating' => 4.0,
                'is_featured' => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
