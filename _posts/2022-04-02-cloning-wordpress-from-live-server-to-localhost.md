---
layout: post
title: Cloning WordPress from live server to localhost
description: In this tutorial we will go through how to clone a WordPress site from a live server to localhost (even with large databases).
image: false
tags: wordpress
comments: true
---

## Copy files

First you need to copy all files from the live host and export it's database.

1. Download all files from the live site to your MAMP `htdocs` folder
2. Log in to the phpmyadmin of the live site, and export the database

---

## Increase file upload limit

If you have a large database, you will need to import via the Terminal instead of phpmyadmin. First you need to increase the file size limits of MAMP.

Find your php version by opening MAMP settings, and look for the current version in the **PHP** tab:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/9AB2D761-10FC-49C9-9E7F-596F7CDBED5A_2/TTO9zjlovLqfFAgQSRQZh0sykbZB3woW5uUTesKEdscz/Image.png)

Open `/Applications/MAMP/bin/php/php7.4.2/conf/php.ini` file (replace the number at the php part for your php version) and edit the following values:

```html
upload_max_filesize = 1024M post_max_size = 1024M max_execution_time = 3000 memorylimit = 512M
```

---

## Create database

Open the Terminal app, and type this:

```html
/Applications/MAMP/Library/bin/mysql --host=localhost -uUSER -pPASSWORD
```

Replace the `USER` with your localhost username (typically `root`) and `PASSWORD` with your localhost password (it is `root` by default on Mac). If you did everything ok, the command prompt will change from your username to "`mysql>"`.

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/40FE1871-7929-4386-9397-95FDB8B889C1_2/Q2oKeGEkQykquuSU4wvcaj66QQN1blNGLkpP4Nxtf8Yz/Image.png)

```other
/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -pfelix
```

Before uploading the database, you need to create the **same database name** and use it in the mysql Terminal prompt. Enter the following command to create a database with the name `test_db`.

```html
CREATE DATABASE test_db;
```

Remember you should create **exactly the same database name** that you download in step 2 from live site. Now enter the command below to check if the new database was created successfully:

```html
show databases;
```

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/43F2F672-84B7-4D87-9BB6-0373614ED99E_2/c5gHFXpxWF1kLxELpmhrbjPhknVQ6yYq3dQpCVJoQ0wz/Image.png)

Finally enter the command below to use the newly created database for importing:

```html
use test_db;
```

You will see a messages what says that `Database changed`

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/CCCBD62F-F9A9-4D16-B75C-95976C72BB0A_2/5dqPRRFv5mlwbmbCkRSlQUllofFK9EGFF3FrsYzCsmcz/Image.png)

---

## Import database

Enter the command below to import the database you have download from live server (in step 2.)

```html
SET autocommit=0 ; source /Applications/MAMP/htdocs/test_db.sql ; COMMIT ;
```

Don't forget to replace the path after source to the path where your importable database is located. Finish typing the command and hit enter. Terminal will start dumping the database and show query running status.

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/86BCA162-A7E1-4456-B175-EB860C097A9F_2/fJmkKzeR41AY85u5t51DEgB9ZkzhUmpyYZaIJwbYh6Mz/Image.png)

After the Terminal dumping is finished, open `phpMyAdmin` and check if the database was created successfully. In our example, we have `test_db` successfully uploaded with the tables.

![Database-Tables-Uploaded-Successfully-.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/BA415894-9086-4C66-A161-DB93BA96605E/18881960-A223-432C-8860-E8E6FCBFF8B6_2/0GHaQ8wPu1D2PomcdKEclFQMrcIflFNfQWqWJS9Swi8z/Database-Tables-Uploaded-Successfully-.png)

---

> [Import Large MySQL Database in phpMyAdmin in MAMP](https://www.webnots.com/how-to-import-large-mysql-database-in-mamp-using-terminal/)

## Replace URLs

Now that you have uploaded live site’s database to local server but the tables will still have live site’s URL references instead of localhost which you need to change it. Copy the below query and replace the site name and the localhost name your own URL.

```html
UPDATE wp_options SET option_value = replace(option_value, 'https://www.yoursitename.com', 'http://localhost') WHERE option_name = 'home' OR option_name = 'siteurl'; UPDATE wp_posts SET post_content = replace(post_content, 'https://www.yoursitename.com', 'http://localhost'); UPDATE wp_postmeta SET meta_value = replace(meta_value,'https://www.yoursitename.com','http://localhost');
```

Go to the phpMyAdmin section of your localhost site and select the database. Click on the “SQL” tab and paste the query in the box and hit "Go".

---

## Replace site files

Copy the `plugins` and `themes` folders from the live site backup, and simply replace with the ones in your localhost install.

---

> [How to Move Live WordPress Site to Localhost?](https://www.webnots.com/how-to-move-live-wordpress-site-to-localhost/)

or.... alternatively you can use [WP All In One Migration](https://hu.wordpress.org/plugins/all-in-one-wp-migration/) plugin ⭐️⭐️⭐️⭐️⭐️
