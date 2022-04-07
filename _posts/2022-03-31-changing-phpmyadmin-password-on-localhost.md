---
layout: post
title: Changing phpmyadmin password on localhost
description: In this tutorial I will show you how to change the phpmyadmin login password on localhost using Mac.
image: false
tags: php
---

Open phpMyAdmin and select the `SQL` tab and type this command:

```other
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('your_root_password');
```

Change to this line in `config.inc.php` to make phpMyAdmin prompts for your MySQL username and password.

```other
$cfg['Servers'][$i]['auth_type'] = 'cookie';
```
