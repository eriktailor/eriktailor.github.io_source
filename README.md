# eriktailor-jekyll

This is my personal blog website.

# Deploy to live site

To deploy the project to GitHub pages, use these commands:

```
git add .
git commit -am "Test commit"
git push origin gh-pages
```

<!------------------------------------------------------------------------------------------------------------->

Source: [TaniaRascia](https://www.taniarascia.com/make-a-static-website-with-jekyll/#pushing-jekyll-site-to-github-pages)

# Run locally

To run the project in local environment, use this command:

```
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

<!------------------------------------------------------------------------------------------------------------->

# Generate webp files with cwebp

Navigate exactly in the directory where your images are located and execute this:

```
$ for file in assets/img/posts/*
> do
> cwebp -q 80 "$file" -o "${file%.png}.webp"
> done
```

### Delete all webp files:

```
find . -name "*.webp" -type f -delete
```

<!------------------------------------------------------------------------------------------------------------->

# Todos

-   Html output formatting
-   Add comments feature with GitHub Issues API
-   Add code highlighting
-   404 page wrong place footer
-   Style and order simple jekyll search plugin
-   Add date to search results

<!------------------------------------------------------------------------------------------------------------->

# Changelog

### v1.0.0

-   Initial release

### v1.0.1

-   Create an `scss` folder and get Sass files from it
-   Set prettier to not break meta tags in separate lines
-   Set prettier to not merge jekyll includes in one separated line
-   Install and use `jekyll-webp` plugin
-   Create contact page with form
-   New posts added

### v1.0.2

-   Divide `scss` files separately
-   Create a `post` layout for blog posts
-   Add dynamicly latest posts to homepage
-   Margin helper classes added
-   Install and use `jekyll-seo` plugin
-   Install and use `jekyll-tagging` plugin
-   New posts added

### v1.0.3

-   Blog page added
-   New posts added
-   Add site favicons

### v1.0.4

-   Use picture element for post main images
-   Remove the picture component
-   Remove `jekyll-webp` as webp is not supported by GitHub Pages
-   Add `jekyll-compress-images` for image optimalization
-   Add anchors into headings
-   New posts added
-   Page image auto generates from page title
-   Add links to technology icons
-   New blog layout added
-   Home layout changed
-   Add outgoing links target blank
-   Home layout updated

### v1.1.0

-   Blog posts structure reordered
-   Picture include variable added
-   Generate `webp` files for blog posts
-   All images changed to `.webp` source
-   404 page added
-   Black & white variables added
-   Contact page with form added
-   Thank you page added
-   Make contact form responsive
-   Responsive stylings added
-   Get back `html` icons in VSCode
-   Webp files are unavailable on live site fix
-   Remove `page-title` class and style `h1` instead

### v1.1.1

-   Remove `jekyll-tagging` plugin (not supported by GH pages)
-   New tagging method added
-   Tagcloud added
-   404 page styling added

### v1.1.2

-   Pagination with `jekyll-paginate` plugin added
-   New posts added
-   Back button added to tag pages
-   Removed `jekyll-image-compress` plugin as it isn't suitable with GH pages

### v1.1.3

-   New posts added

### v1.2.0

-   Add `jekyll-webp` plugin
-   Remove `base.html` from includes
-   New posts added
-   New tag page created
-   Add `jekyll-tagging` plugin
-   Added a lightbox for post images
-   Style single tag on single post pages
-   Contact form PHP script added
-   Redirect to `thank-you.html` page after form submit
