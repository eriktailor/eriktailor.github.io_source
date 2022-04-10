---
layout: post
title: Use any Jekyll plugins with GitHub Pages
description: In this tutorial I will show you how to build a workflow with Jekyll and GitHub Pages where you will be able to use any Jekyll plugins.
tags: github jekyll
---

## The Problem

While I was playing around with building a local Jekyll website and then deploying it to GitHub pages, I faced a very common issue, that [GitHub Pages](https://pages.github.com/) doesn't support all of the Jekyll plugins, means that if a plugin you have installed to your Jekyll build works fine locally, but simply doesn't work once your site is published to the web via GitHub Pages.

Check out the (very) short list of [Jekyll plugins](https://pages.github.com/versions/) allowed by GitHub Pages.

---

## Workaround

I was searching the web for a huge amount of time looking for a solution to make GitHub pages accept the Jekyll plugins I was using with my local build, and turned out that there is only one way to do this - having two git repositories at the same time:

1.  **Source** repository containing all of the source files of the project
2.  **Output** repository for only the content of the `_site/` folder

<br>

The idea is to work locally on your Jekyll project and pushing the updates to the **source** repository and when you feel ready, just deploy the production output files from the `_site/` folder to your GitHub Pages website, by pushing to the **output** repository.

> > So assuming that you have your Jekyll project ready, let's get started!

---

## Setup Source

First, we will create the **source** repository what will contain your build files:

1. Open your Jekyll project folder's root in the Terminal
2. Create a new file to the project's root called `.gitignore`
3. Open the file and add `_site/` text (means that the git project won't include the output files)
4. Save the file
5. In the Terminal type `git init`
6. Type `git add .`
7. Type `git commit -m "initial commit"`

<br>

Now you have a local git repository containing your **source** files. Let's add it to github:

1. Open [GitHub](https://github.com/) in your web browser
2. Log in to your account
3. Click the [new repository](https://github.com/new) button
4. Add `username.github.io_source` as the name of the repository
5. It is not necessary to fill or check anything else
6. Click the `Create repository` button

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/43FBCD4E-96D1-474C-BCCE-7DB3ABCA9D3E/EBBC240A-78E9-4E12-9773-10972CB2365D_2/HJ6A4A1EsOa3TDmR7jaZTwyIFFsAY0aPLlQ0qHc5i1gz/Image.png)

Now go back to the Terminal, and type the following:

```shell
git remote add origin git@github.com:username/username.github.io_source
git push -u origin master
```

> > Note that you will need [SSH](https://en.wikipedia.org/wiki/Secure_Shell) connection to GitHub to be able to use `git@github.com`. There is a great tutorial from Karl Broman about the [first steps](https://kbroman.org/github_tutorial/pages/first_time.html) of using git includes how to create your SSH key.

Now if you check the github repository, your will see that your local build files has been added to the repository.

Run `jekyll build` in the Terminal to generate the output files.

---

## Setup Output

To setup the **output** repository, we will repeat almost the same steps as we did above:

1. Go to the `_site/` folder of your Jekyll project by typing `cd _site`
2. Type `git init`
3. Type `git add .`
4. Type `git commit -m "initial commit"`
5. Open github in your web browser, and click the [new repository](https://github.com/new) button
6. Add `username.github.io` as the name of the repository
7. Click the `Create repository` button

![Github.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/43FBCD4E-96D1-474C-BCCE-7DB3ABCA9D3E/67196828-5636-4F34-83CB-E9B99FD8A739_2/s2gMObMrbZridCKDrUuXbdXdtCfpft4xVMeQAHrahtEz/Image.png)

Go back to the Terminal and type the following:

```shell
git remote add origin git@github.com:username/username.github.io
git push -u origin master
```

> Great, now you have either the **source** and the **output** repositories created!

Now if you check [https://username.github.io](https://username.github.io), you will see your nice production site (maybe you have to wait a couple of minutes until your site is uploaded to the GH Pages servers).

---

## GitHub Desktop

I really like to use the [GitHub Desktop](https://desktop.github.com/) application, it is a great tool for managing github repositories and it is both available for Mac and Windows either.

For the most transparent workflow, we need to add both repositories just created to GitHub Desktop. So let's open the application, and click on the `Add` button and select `Add Existing Repository` option.

![Github.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/43FBCD4E-96D1-474C-BCCE-7DB3ABCA9D3E/4A32D82B-71FD-4110-AFCB-1134DE6B88BC_2/e9Gpx5xulMREE9xyOPPgYGLWaxs9XwKNKaMVN2VTbkwz/Image.png)

Browse your project folder and click on the `Add Repository` button.

As you see, your **source** repository has been added to the sidebar. Do the same with your **output** repository (the only difference is that you have to choose your `_site/` folder when browsing the existing repositories).

> > So now you have both repositories in the **GitHub Desktop** application's tracked folders.

---

## Testing

It's time to see what we did until now! Open your project folder in your preferred code editor (I use [VSCode](https://code.visualstudio.com/)) and some sample code to your `index.markdown` (or any other) file:

```markdown
---
layout: default
---

# Cool Jekyll project!
```

Now run the `jekyll build` command to generate the output files.

Go back to GitHub Desktop, and you will see that both **source** and **output** repositories have changed files. Let's commit and push them.

> > Now if you check [https://username.github.io](https://username.github.io), you will see our previous sample code in the browser, meaning that your site is modified, and live!

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/43FBCD4E-96D1-474C-BCCE-7DB3ABCA9D3E/7A2C56EF-D130-4FB5-8AB4-B31371A8071E_2/V08OQsXyElFihSTkcNLyl2OkqaCys5rqnIMxkPCXnwYz/Image.png)

---

## Conclusion

Ok, but how this is related to Jekyll plugins???

The answer is that in this case you only pushes the generated production files to [username.github.io](username.github.io) (not the working project folder). So using this method, you can use any of the available Jekyll plugins, instead of using only the ones what GitHub Pages support. Happy Jekylling! 😊
