---
layout: post
title: Display data in ajax modal with Laravel
description: In this tutorial I will show you how to create a modal what shows user details, where the requested data is dynamically injected with ajax in Laravel 8.
tags: laravel
---

Assuming that you have a fresh install of Laravel, with database and `.env` file is setup correctly. If you need further guidance on how to install and set up Laravel, you may find it in the first part of my previous tutorial: [Laravel 8 login authentication](craftdocs://open?blockId=AA5FC604-DEA4-4D9F-9597-83E54D86A68D&spaceId=34d81fee-a2e7-021c-d5fc-2e46d6c760cb). So let's get started!

---

## Extend Controller

Extend the existing `UserController` with the following two functions:

```shell
/**
 * Display a listing of users
 */
public function index() 
{   
    $users = User::all();
    return view('index', compact('users'));
}

/**
 * Display user details modal
 */
public function showUser($id)
{
    $user = User::find($id);
    return response()->json($user);
}
```

---

## Add Routes

Head to `routes/web.php` and add the following lines:

```shell
use App\Http\Controllers\UserController;

// Users
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'showUser']);
```

---

## Create View

Now we are almost done, only need to create a view what contains the listing of the users, and the modal what will show up once Details button is clicked! Create a new file called `resources/views/index.php`:

```shell
<!DOCTYPE html>
<html>

<head>
    <title>Ajax call in modal</title>

    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">

    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">

    <!-- Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>

</head>

<body>

    <!-- Content -->
    <div class='container my-5'>
        <div class="w-50 mx-auto">

            <h1>Users</h1>

            <table class="table">
                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->name }}
                        <td class="text-end">
                            <a class="btn btn-primary show-user" href="#userModal" data-id="{{ $user->id }}" data-bs-toggle="modal">Details</a>
                        </td>
                    </tr>
                @endforeach
            </table>

        </div>
    </div>

    <!-- Modal -->
    <div class="et-modal modal fade" id="userModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <p>Id: <span id="id"></span></p>
                    <p>Name: <span id="name"></span></p>
                    <p>Username: <span id="username"></span></p>
                    <p>Email: <span id="email"></span></p>
                    <p>Age: <span id="age"></span></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Script -->
    <script type="text/javascript">
        $(document).ready(function() {
            $('body').on('click', '.show-user', function () {
                event.preventDefault();
                var id = $(this).data('id');
                $.ajax({
                    type: "get",
                    url: "/users/" + id,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: {id: id},
                    success: function (data) {
                        $('#id').html(data.id);
                        $('#name').html(data.name);
                        $('#username').html(data.username);
                        $('#email').html(data.email);
                        $('#age').html(data.age);
                    },
                });
            });
        });
    </script>
</body>

</html>
```

---

## Run Server

Now if you go to `http://localhost:8000/users`, you will see what we have created so far:

```shell
php artisan serve
```

