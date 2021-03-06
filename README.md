# eriktailor-jekyll

This is my personal blogging website's source code.

<!------------------------------------------------------------------------------------------------------------->

# Todos

-   Add recaptcha to comment form
-   Make comments work on live site (not not publish immediately)
-   Change reply-to text to icon in comments
-   Check SEO setups

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

### v1.2.1

-   Page loader added
-   Date added to search results
-   Rouge highlighter added
-   Jekyll search styled

### v1.2.2

-   New posts added
-   Add max height to code blocks
-   Search script only loads on blog page fix
-   404 page wrong footer position fixed
-   Posts add ``` rouge syntaxes
-   Style inline code attributes
-   Change html code highlighting color
-   Disqus comments function added

### v1.3.0

-   Disqus commenting removed
-   Staticman comment function added

### v1.3.1

-   Staticman downgraded to v2
-   Comment reply function added
-   Deleted sample comments
-   Change order of tags & comments
-   Put comment included to partials folder
-   Remove lightbox from comment avatars
-   Add a border-radius sass variable and use it
-   Make `page.description` a lead
-   Updated 404 & thank-you pages

### v1.3.2

-   Add check check icon svg to comment response output
-   Add date to single posts
-   Add read time to single posts

### v1.3.3

-   Make one config file
-   Html compress (minifier) added
-   404 page moved to `_pages` folder
-   Update `jekyll-minifier` to work
-   Removed html compress layout
-   New post added
-   Fix too big images in lightbox

<!------------------------------------------------------------------------------------------------------------->

# Tutorials

## Deploy to live site

To deploy the content of the `_site` folder to GitHub pages, use these commands:

```shell
git add .
git commit -am "Test commit"
git push -u origin master
```

<!------------------------------------------------------------------------------------------------------------->

## Build for production

Run the following command to serve as production:

```shell
JEKYLL_ENV=production bundle exec jekyll serve
```

<!------------------------------------------------------------------------------------------------------------->

## Using webp files with cwebp

Navigate exactly in the directory where your images are located and execute this:

```shell
$ for file in assets/img/posts/*
> do
> cwebp -q 80 "$file" -o "${file%.png}.webp"
> done
```

To delete all webp files:

```shell
find . -name "*.webp" -type f -delete
```
