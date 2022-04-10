---
layout: post
title: Set virtual hosts in MAMP
description: Here's how I set up MAMP with virtual hosts on my Mac.
image: false
tags: mamp
---

## 1. Edit hosts file

The `/etc/hosts` file on your local machine maps custom domain names to the IP addresses. It's protected, so you'll likely have to use `sudo` to open it and enter your Mac password.

To edit your hosts file in nano, open your preferred terminal and enter:

```shell
sudo nano /etc/hosts
```

You'll see something like:

```shell
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
```

Don't delete anything, just add new line below the localhost line with your desired host name like:

```shell
127.0.0.1       localhost
127.0.0.1       yoursite.loc
```

Then exit (with saving the file) using `Ctrl + X` with `Y` means yes as save after.

> > I like to end mine with .loc but you can use .dev or something else as well. It should be unique but easy for you to remember.

---

## 2. Edit MAMP Apache config file

Now go to the directory your MAMP install is located in. Mine is at `/Applications/MAMP` which is the default, so that's what I'll use as the path for the following examples.

Find the Apache config file at `/Applications/MAMP/conf/apache/httpd.conf` and open it in an editor. There's likely a bunch of stuff in here, scroll through and find these lines:

```shell
# Virtual hosts
# Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
```

All you need to do here is un-comment that second line, so it looks like this:

```shell
# Virtual hosts
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
```

Save the file.

---

## 3. Edit your virtual hosts file

Next, open the virtual hosts file at `/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf`

There will probably be some comments and a couple of examples of blocks there. Leave the comments or delete as you'd like, then replace the examples with the information below. The second block includes the path to the site you're developing and the local domain name you added in the first step. So your file should look something like this:

```shell
NameVirtualHost *:80

<VirtualHost *:80>
    DocumentRoot "/Applications/MAMP/htdocs"
    ServerName localhost
</VirtualHost>

<VirtualHost *:80>
    DocumentRoot "/Users/youruser/your/site/root"
    ServerName yoursite.loc
</VirtualHost>
```

---

## 4. You're Done!

Restart MAMP and head to the domain you added. Your site should be live there!

> #### Just in case
>
> If you run into errors, you may also need to go back to the `httpd.conf` file we edited above and allow SymLink override. Open that file, find the block below, and make sure `AllowOverride` is set to All rather than None. So it should look like this:

```shell
<Directory />
    Options Indexes FollowSymLinks
    AllowOverride All
</Directory>
```

---

### Source

[Configuring Virtual Hosts with MAMP](https://dev.to/crankysparrow/configuring-virtual-hosts-with-mamp-f3i)
