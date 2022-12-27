---
layout: post
title: Ajax form submission in Laravel
description: In this tutorial I will show you how to create an ajax file upload field (with image preview) when other form fields present also.
tags: laravel
---

Assuming that you have a fresh install of Laravel, with database and `.env` file is setup correctly. If you need further guidance on how to install and set up Laravel, you may find it in the first part of my previous tutorial: [Laravel 8 login authentication](craftdocs://open?blockId=AA5FC604-DEA4-4D9F-9597-83E54D86A68D&spaceId=34d81fee-a2e7-021c-d5fc-2e46d6c760cb). So let's get started!

---

## Create Model

Head to the terminal with your project folder set as the base path, and enter the following command to create a model. The `-m` at the end means that it will create a migration file too:

```shell
php artisan make:model ImageForm -m
```

Next open our newly created model `App/Models/ImageForm.php` file, and replace with this:

```shell
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageForm extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'name', 'email'];
}
```

If you want to have more inputs, you need to add the `name` attributes in this model file like this.

---

## Create Migration

Go to `database/migrations/create_image_forms_table.php` which is the new migration file created with the Model, and edit the function like this:

```shell
public function up()
{
	Schema::create('image_forms', function (Blueprint $table) {
		$table->id();
		$table->string('image')->nullable();
		$table->string('name');
		$table->string('email');
		$table->timestamps();
	});
}
```

Next, you need to migrate it to the database (meaning that the rows added in this file will be columns in the new `image_forms` table) using this command:

```shell
php artisan migrate
```

Now if you log in to your phpMyAdmin, you will see the empty table with columns, we just created:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/A04119B4-020F-4E37-A33C-7F6EBA6785A8/772E50CA-AAF6-49E7-9363-B2CFDD71C833_2/bEatykXjIIYoi8hbtgtKzGCx4rpIAVTvV5RuOh5sQCYz/Image.png)

---

## Create Controller

Now we need to create a controller, what will handle our form inputs. Type this in the Terminal:

```shell
php artisan make:controller ImageFormController
```

A new file was created `App/Http/Controllers/ImageFormController.php` , so add this:

```shell
<?php

namespace App\Http\Controllers;

use App\Models\ImageForm;
use Illuminate\Http\Request;

class ImageFormController extends Controller
{

    /**
     * Display the view file of our form
     */
    public function index()
    {
        return view('imageform');
    }

    /**
     * Upload files and fill form fields
     */
    public function create(Request $request)
    {
        // Get the text fields
        $form = ImageForm::updateOrCreate([
            'id' => $request->id,
            'name' => $request->name,
            'email' => $request->email,
        ]);

        // Get the uploaded image
        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = time().'_'.$file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $location = storage_path('app/public/images');
            $file->move($location, $filename);
            $filepath = url('storage/images/'.$filename);
            $form->image = $filename;
            $form->save();
        }
    
        return $form;
    }

}
```

---

## Create Routes

Now we need to create the routes to get the newly created controller functions work as expected. Open `routes/web.php` file, and add the following content:

```shell
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageFormController;

// Image form
Route::get('/imageform', [ImageFormController::class, 'index']);
Route::post('/uploadfile', [ImageFormController::class, 'uploadFile']);
```

---

## Create Link

If you have a fresh laravel install, you have to create a link between storage and the public folders:

```shell
php artisan storage:link
```

---

## Create View

Let's create a new file `resources/views/imageform.blade.php` which will be the front-end:

```shell
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Image Form Tutorial</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark">
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-md-6">
                <div class="card p-5">

                    <!-- Image & Preview -->
                    <div class="form-group mb-3">
                        <div class="text-center">
                            <img class="image-preview rounded-circle" src="data:image/jpeg;base64,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" width="150" height="150">
                            <input class="image-input form-control d-none" type="file" id="image" name="image">
                        </div>
                    </div>

                    <!-- Other fields -->
                    <div class="form-group mb-3">
                        <label class="form-label" for="name">Name</label>
                        <input class="form-control form-control-lg fw-bold" type="text" name="name" id="name">
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control form-control-lg fw-bold" type="email" name="email" id="email">
                    </div>

                </div>
            </div>
        </div>
    </div>
</body>

</html>
```

Add the following AJAX script to the bottom of the document, just above the closing `</body>` tag:

```shell
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
$(document).ready(function(){

    /**
     * Ajax csrf initialize
     */
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    /**
     * Create new item function
     */
    $('#submit').click(function() {
   
        // define variables
        var file = $('#image')[0].files;
        var name = $('#name').val();
        var email = $('#email').val();

        // formdata object
        var fd = new FormData();

        // append data 
        fd.append('image', file[0]);
        fd.append('name', name);
        fd.append('email', email);

        // ajax request 
        $.ajax({
            url: "/uploadfile",
            method: 'post',
            data: fd,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(res){
                alert('Item saved successfully!')
            },
            error: function(res){
                console.log("error : " + JSON.stringify(res) );
            }
        });
     
    });

     /**
     * Image preview function
     */
    $(function(){

        // Load the preview image when browsed
        $('.image-input').change(function(){
            let reader = new FileReader();
            reader.onload = (e) => { 
                $('.image-preview').attr('src', e.target.result); 
            }
            reader.readAsDataURL(this.files[0]); 
        });

        // Opens the upload browser on click
        $('.image-preview').click(function(){
            $('.image-input').trigger('click'); 
        });

    });

});
</script>
```

---

## Run Server

Now if you go to run the following command and go to `/imageform` you will see what we created:

```shell
php artisan serve
```

