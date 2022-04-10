---
layout: post
title: Mac show hidden folders
description: In this tutorial I will show you how to show and hide folders on a Mac.
tags: mac
---

Open the terminal and enter the following to reveal hidden folders:

```shell
defaults write com.apple.Finder AppleShowAllFiles true
```

Then relaunch Finder with:

```shell
killall Finder
```

To hide the files again, change the `true` in the step above to `false`
