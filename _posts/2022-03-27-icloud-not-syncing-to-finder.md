---
layout: post
title: iCloud not syncing to Finder
description: Sometimes the iCloud syncing on a Mac stuck without a reason. In this tutorial, I will show you how to get iCloud sync to Mac working again.
tags: mac
---

## Solution

Open Terminal and type:

```shell
killall bird
```

If this not fix the issue, go back to Terminal and type:

```shell
cd ~/Library/Application Support
rm -rf CloudDocs
```

---

Source: [iCloud drive sync stop](https://superuser.com/questions/1045791/icloud-drive-sync-stuck/1315071#1315071?newreg=1a46305a963646539bea3ac2f4973a45)
