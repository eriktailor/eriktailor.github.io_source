---
layout: post
title: Image upload in Laravel 8
description: In this tutorial I will show you how to create an image uploader form with using Laravel 8. The uploaded images will be saved in the storage directory, and called back in the view.
tags: laravel
---

Assuming that you have a fresh install of Laravel, with database and `.env` file is setup correctly. If you need further guidance on how to install and set up Laravel, you may find it in the first part of my previous tutorial: [Laravel 8 login authentication](craftdocs://open?blockId=AA5FC604-DEA4-4D9F-9597-83E54D86A68D&spaceId=34d81fee-a2e7-021c-d5fc-2e46d6c760cb). So let's get started!

---

## Create Model & Migration

Head to the terminal with your project folder set as the base path, and enter the following command to create a model. The `-m` at the end means that it will create a migration file too for this model:

```shell
php artisan make:model CategoryImage -m
```

Go to `database/migrations/create_category_images_table.php` which is the new migration file created, and edit the function as below:

```shell
public function up()
{
	Schema::create('category_images', function (Blueprint $table) {
		$table->id();
		$table->string('image')->nullable();
		$table->timestamps();
	});
}
```

Now you need to migrate it to the database (meaning that the rows added in this file will be columns in the new `category_images` table) using this artisan command:

```shell
php artisan migrate
```

---

## Create Routes

Now we need to make the routes. Open `routes/web.php` file, and add the following to the bottom:

```shell
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryImageController;

//For adding an image
Route::get('/add-image',[CategoryImageController::class,'addImage'])->name('images.add');

//For storing an image
Route::post('/store-image',[CategoryImageController::class,'storeImage'])->name('images.store');

//For showing an image
Route::get('/view-image',[CategoryImageController::class,'viewImage'])->name('images.view');
```

---

## Create Controller

After creating the routes, now we need a controller. You can create one with this command:

```shell
php artisan make:controller CategoryImageController
```

A new file was created: `App/Http/Controllers/CategoryImageController.php` let's edit it:

```shell
<?php

namespace App\Http\Controllers;

use App\Models\CategoryImage;
use Illuminate\Http\Request;

class CategoryImageController extends Controller
{
    //Add image
    public function addImage(){
        return view('add_image');
    }

    //Store image
    public function storeImage(Request $request){
        $data= new CategoryImage();

        if($request->file('image')){
            $file= $request->file('image');
            $filename= date('YmdHi').$file->getClientOriginalName();
            $file-> move(storage_path('app/public/category-images'), $filename);
            $data['image']= $filename;
        }
        $data->save();
        return redirect()->route('images.view');
       
    }

	//View image
    public function viewImage(){
        $imageData= CategoryImage::all();
        return view('view_image', compact('imageData'));
    }
    
}
```

---

## Create Link

If you have a fresh laravel install, you have to create a link between storage and the public folders:

```shell
php artisan storage:link
```

---

## Create Views

Let's create a new file, `resources/views/layouts/app.blade.php`  which will be the skeleton of our view files. So add the content to this file as below:

```shell
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Image upload | Laravel 8</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="d-flex h-100 justify-content-center vh-100 bg-light p-3">
    @yield('content')
</body>

</html>
```

Notice that `@yield('content')` will be replaced with the view files added later. Create a new one as `resources/views/add_image.blade.php` with the following content:

```shell
@extends('layouts.app')

@section('content')
<div class="col-12 col-sm-6">
    <div class="card shadow-lg p-5">
        <form method="post" action="{{ route('images.store') }}" enctype="multipart/form-data">
            @csrf
            <h1 class="h1 fw-bold mb-5">Browse image</h1>

            <div class="form-group mb-3">
                <input class="form-control form-control-lg" type="file" name="image" required>
            </div>

            <button class="btn btn-lg btn-primary w-100" type="submit">Upload</button>
        </form>
    </div>
</div>
@endsection
```

Create a new file as `resources/views/view_image.blade.php` for previewing the images:

```shell
@extends('layouts.app')

@section('content')
<div class="col-12 col-sm-6">
    <div class="card shadow-lg p-5 my-5">
        <form method="post" action="{{ route('images.store') }}" enctype="multipart/form-data">
            @csrf
            <h1 class="h1 fw-bold mb-5">View images</h1>

            @foreach($imageData as $data)
                <div class="mb-3">
                    <img class="img-fluid" src="{{ url('storage/category-images/'.$data->image) }}">
                </div>
            @endforeach

        </form>
    </div>
</div>
@endsection
```

---

## Run Server

Now if you go to run the following command, you will see what we have created so far:

```shell
php artisan serve
```

---

Source: [Complete laravel 8 image upload tutorial](https://codesource.io/complete-laravel-8-image-upload-tutorial-with-example/)

