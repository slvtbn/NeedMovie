<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
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
             'name' => 'required|unique:movies,name',
             'category' => 'required',
             'video_url' => 'required|url',
             'thumbnail' => 'required|image',
             'rating' => 'required|numeric|min:0|max:5',
             'is_featured' => 'nullable|boolean',
        ];
    }
}
