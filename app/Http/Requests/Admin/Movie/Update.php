<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // unique berasal dari table movies dengan kolom nama, artinya yang unik adalah namanya ditable movies
             'name' => 'nullable|unique:movies,name,'.$this->movie->id,
             'category' => 'nullable',
             'video_url' => 'nullable|url',
             'thumbnail' => 'nullable|image',
             'rating' => 'nullable|numeric|min:0|max:5',
             'is_featured' => 'nullable|boolean',
        ];
    }
}
