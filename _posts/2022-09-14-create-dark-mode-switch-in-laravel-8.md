---
layout: post
title: Create dark mode switch in Laravel 8
description: In this tutorial I will show you how to create a light / dark mode switch as a new setting based on the user's choice from scratch. The value of the setting will be saved in the database, so if the user signs out, the setting will remain in the future logins.
tags: laravel node
---

## Install Laravel

With composer installed on your computer, in the Terminal go to the folder where you would like to install the app, and create a new laravel project with the following command:

```shell
composer create-project laravel/laravel laravel-dark-switch
```

---

## Setup Authentication

Let's create the auth pages with Laravel UI to have user profiles, where we will assign the dark / light modes of user choice. The method is detailed in the referred tutorial: [Laravel 8 login authentication](https://eriktailor.github.io/blog/laravel-8-login-authentication/)

---

## Setup Database

Now the project is installed, you need to set up the database to store the data. Locate the `.env` file in your laravel project's root and set up the database name like this:

```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel-dark-switch
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

---

## Create Tables

Let's create the database tables, so open `database/migrations/create_users_table.php` file and add a line in the `up()` function to create a table for the dark mode. The final file looks like this:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('dark_mode');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
```

Then run migrations with the following command:

```shell
php artisan migrate
```

---

## Create Routes

In this step, you need to create a route for displaying the home page, and an other one for saving the data, so open `routes/web.php` file and add the following routes replacing others:

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Auth::routes();

Route::get('/', function () {
    return view('index');
});

Route::get('enableDarkMode', [UserController::class, 'enableDarkMode']); 

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
```

---

## Create Controller

In this point, your should create a new controller called `UserController` which will manage the layout and getting data request and return response, so create the controller with this command:

```shell
php artisan make:controller UserController
```

Then open your newly created controller a `app/Http/Controllers/UserController.php` and add a new function between the main brackets, so the final file looks like this:

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Function to enable dark mode
     */
    public function enableDarkMode(Request $request)
    {
        //$user = User::find($request->user_id);
        $user = Auth::user();
        $user->dark_mode = $request->dark_mode;
        $user->save();

        return response()->json(['success'=>'Dark mode changed successfully.']);
    }
}
```

---

## Create View

In the last step, let’s create a new view at `resources/views/index.blade.php` for the layout, what will contain the front-end view of the app. We will use a basic bootstrap sample layout to present the dark / light functionality. Add the following content to the file:

```html
<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Dark Mode Switch</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
    <style type="text/css">
    #darkModeSwitch {
        transform: scale(1.6);
        -webkit-transform: scale(1.6);
    }

    #darkModeSwitch:focus {
        box-shadow: none;
    }

    .dark-mode {
        background: #1a1a1d;
        color: rgba(255, 255, 255, 0.5);
    }

    .dark-mode .text-dark {
        color: white !important;
    }

    .dark-mode .border-bottom {
        border-color: rgba(255, 255, 255, 0.3) !important;
    }
    </style>
</head>

<body class="{{ Auth::user()->dark_mode == 1 ? 'dark-mode' : '' }}">

    <div class="container-fluid pb-md-4">
        <header class="d-flex flex-wrap justify-content-between py-3 mb-lg-4 border-bottom">
            <a href="/" class="d-flex align-items-center me-md-auto text-dark text-decoration-none">
                <img class="d-block me-2" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="35" height="28">
                <span class="d-none d-sm-block fs-5 text-dark">User Dark Switch</span>
            </a>
            <div class="form-check form-switch mb-0 d-flex flex-row-reverse align-items-center me-3">
                <input class="form-check-input ms-4 mb-1" type="checkbox" id="darkModeSwitch" data-id="{{ Auth::user()->id }}" role="switch" {{ Auth::user()->dark_mode ? 'checked' : '' }}>
                <label class="form-check-label fs-5" for="darkModeSwitch">Dark mode</label>
            </div>
        </header>
    </div>

    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="72" height="57">
        <h1 class="display-5 fw-bold text-dark">Centered hero</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Check out the dark mode switch on the upper right corner of this page! It stores the state of the switch in the database, and every user can decide separately to which mode they prefer. We hope that you like it!</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
    $(function() {
        $('#darkModeSwitch').change(function() {
            var dark_mode = $(this).prop('checked') == true ? 1 : 0;
            var user_id = $(this).data('id');
            $.ajax({
                type: "GET",
                dataType: "json",
                url: '/enableDarkMode',
                data: {
                    'dark_mode': dark_mode,
                    'user_id': user_id
                },
                success: function(data) {
                    console.log(data.success)
                }
            });
        });
        $(document).ajaxStop(function() {
            window.location.reload();
        });
    });
    </script>

</body>

</html>
```

---

## Run Server

Now we are ready for a test, so fire the following command then head to `localhost:8000/login` and after your authentication, you can check out what we did so far:

```shell
php artisan serve
```

---

## Source: 

[Laravel Update User Status Using Toggle Button Example](https://onlinecode.org/laravel-update-user-status-using-toggle-button-example-2/)

