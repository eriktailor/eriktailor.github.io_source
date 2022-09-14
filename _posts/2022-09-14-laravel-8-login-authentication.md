---
layout: post
title: Laravel 8 login authentication
description: In this tutorial I will show you how to create a basic login authentication for Laravel 8.
tags: laravel node
---

## Laravel Installation

We will create laravel project using composer. Open the Terminal, and `cd` to the folder where you would like to host the project files, then type the following command to install laravel:

```shell
composer create-project --prefer-dist laravel/laravel project-name
```

---

## Database Connect

Create a new empty database in phpMyAdmin, and open up the `.env` file from the project root:

```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database-name
DB_USERNAME=database-user
DB_PASSWORD=database-pass
```

Next, open up config/database.php file, and replace the following in the `mysql` block:

```shell
'database' => env('DB_DATABASE', 'database-name'),
'username' => env('DB_USERNAME', 'database-user'),
'password' => env('DB_PASSWORD', 'database-pass'),
'unix_socket' => env('DB_SOCKET', '/Applications/MAMP/tmp/mysql/mysql.sock'),
```

---

## Install Laravel UI

We are using here Laravel UI to create application authentication sections like login, registration, password forget, etc. It will generate these files automatically. Type the following in the Terminal:

```shell
COMPOSER_MEMORY_LIMIT=-1 composer require laravel/ui
```

Once the laravel UI package is installed, you need to install the frontend scaffolding with this:

```shell
php artisan ui bootstrap --auth
```

After this command, you need to run the npm commands below. It will generate CSS and JS compiled files for authentication system. Fire the following commands afterr each other:

```shell
npm install && npm run dev
npm run dev
```

Next, we need to run migration to generate tables in database. Run this in the Terminal:

```shell
php artisan migrate
```

---

## Application Testing

Open project in the Terminal and type the following command to start the development server:

```shell
php artisan serve
```

Now, if you go to `http://127.0.0.1:8000/login` you will see the working authentication.

---

## Source

[Laravel 8 Authentication with Laravel UI Tutorial](https://onlinewebtutorblog.com/laravel-8-authentication-with-laravel-ui-tutorial/#Laravel_Installation)

