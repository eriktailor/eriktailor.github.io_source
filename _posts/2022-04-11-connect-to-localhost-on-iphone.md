---
layout: post
title: Connect to localhost on iPhone
description: In this tutorial I will show you how to live connect to your local site from an iphone with MAMP, WordPress and Jekyll.
tags: mamp wordpress jekyll
---

## Preparations

All three methods require a short preliminary setup on Mac's local hostname. This will be used as an alias to `localhost` and will be typed as the web address on mobile. So let's set up your local host:

1. Go to **System Preferences > Sharing**
2. Near the "Computers on your local network..." text, click the **Edit** button
3. Add your preferred name, like `yourname.local`
4. Use this name instead of `localhost` everywhere in your workflow

---

## Using MAMP

1. Fire up MAMP and hit **Start Servers**
2. Connect your iphone to your Mac with an **USB**
3. Go to **System Preferences > Sharing**
4. From the left side menu, select **Internet sharing**
5. On the right side, check **iPhone USB**
6. Check the **Internet sharing** checkbox
7. If an insurance prompt window appears, go on with **Start**

![Screenshot 2022-04-12 at 1.43.27.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/FF2A5D4E-48D1-49F8-98DD-C2FF1A76029A/D7F41039-C764-4E11-8F41-DEFC7D6B0426_2/fi3xcHg6yBo57hZvO1IGtQbAsxGYslxVestOv9GuZFQz/Screenshot%202022-04-12%20at%201.43.27.png)

Now grab your iphone and go to h`ttp://yourname.local` in a web browser. You will see that the contents of your MAMP folder is shown, containing with your local sites.

---

### Using WordPress

If you would like to use with local WordPress sites, just repeat the steps above, and change the WordPress `Site URL` and `Page URL` settings according to your Mac's host name.

For example: let's say that your local WordPress install is at `http://localhost/mysite`. We need to change this url, so go to **Dashboard > Settings > General** and change the Page and Site URL to `http://yourname.local/mysite` where `name.local` is your local Mac host name and `mysite` is the WordPress folder.

> > Now check your custom link on your iphone, and see that your WordPresss site appears.

---

## Using Jekyll

Jekyll serve doesn’t expose the site on the local network (for security reasons), but you can open it with using the `--host` flag. Use `0.0.0.0` to bind the local IP address of the host:

```shell
bundle exec jekyll serve --host 0.0.0.0
```

> > If a prompt comes up with "do you accept incoming network connections", just hit **Allow**

Type your local Mac host name in your iPhone's web address bar in Safari, and add the Jekyll port after the url (it is `:4000` by default). Now you can visit your site from any device on the local network, like `http://yourname.local:4000`

![my-local-site.jpeg](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/FF2A5D4E-48D1-49F8-98DD-C2FF1A76029A/5FBE025A-8A6E-4DFA-B294-66D65581345F_2/HIkKUy4nPXYY0yyK0dxEyQaViPPAUzmF2VBvdaLEH6gz/my-local-site.jpeg)

---

## Troubleshooting

I ran into an issue when using this method with MAMP: everything was set up correctly, `hostname.local/website` showed the requested local content on a computer, but when I tried to access it from my iphone, it refused to load the page.

After a bit digging into this, I found out that the problem is the Mac firewall blocks the site from being rendered on mobile. To fix this, follow these steps:

1. Go to **System Preferences > Security & Privacy**
2. Select the **Firewall** tab and click on **Firewall Options**
3. You might need to click on the **lock** icon to unlock modifications
4. With the `+` button, add **MAMP** as an exception
5. Make sure that **MAMP** is "Allowing incoming connections"

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/FF2A5D4E-48D1-49F8-98DD-C2FF1A76029A/067FCE2A-A875-4001-AA4D-96CA8EBBAE72_2/0o4um1qvz2tD6l0DLMY4xQPqLfYxwNB2NMmcxhc0ykMz/Image.png)

---

Source: [Connecting to localhost from an iPhone](https://mtm.dev/iphone-localhost-mac)
