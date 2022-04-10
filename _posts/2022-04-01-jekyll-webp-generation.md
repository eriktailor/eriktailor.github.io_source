---
layout: post
title: Jekyll webp generation
description: In this tutorial I will show how to automatically generate webp files from jekyll image assets and include them to the html with a shortcode.
tags: jekyll html
---

## Install Plugin

Go to the project root folder and install with:

```shell
gem install jekyll-webp
```

Add to the `Gemfile` as a plugin:

```shell
group :jekyll_plugins do
  gem 'jekyll-webp'
end
```

Add in the `_config.yml` file:

```shell
# Site configuration for the WebP Generator Plugin

# The values here represent the defaults if nothing is set
webp:
  enabled: true

  # The quality of the webp conversion 0 to 100 (where 100 is least lossy)
  quality: 75

  # List of directories containing images to optimize, nested directories will only be checked if `nested` is true
  img_dir: ["/img"]

  # Whether to search in nested directories or not
  nested: false

  # add ".gif" to the format list to generate webp for animated gifs as well
  formats: [".jpeg", ".jpg", ".png", ".tiff"]

  # File extensions for animated gif files
  gifs: [".gif"]

  # Set to true to always regenerate existing webp files
  regenerate: false

  # Local path to the WebP utilities to use (relative or absolute)
  webp_path: nil

  # List of files or directories to exclude
  # e.g. custom or hand generated webp conversion files
  exclude: []

  # append '.webp' to filename after original extension rather than replacing it.
  append_ext: false
```

To start the generation:

```shell
bundle exec jekyll serve
```

---

## Create Shortcode

Create a new file in the \_includes folder:

{% raw %}

```shell
touch _includes/picture.html
```

{% endraw %}

Add the following code to the file:

{% raw %}

```html
{% assign webp_filename = include.url | replace: ".jpg", ".webp" | replace: ".jpeg", ".webp" | replace: ".png", ".webp" | replace: ".tiff", ".webp" %}

<figure>
    <picture>
        <!-- Use the webp file -->
        <source srcset="assets/img/{{ webp_filename }}" type="image/webp" />

        <!-- Fallback to the file you added -->
        <img src="assets/img/{{ include.url }}" alt="{{ include.alt }}" />
    </picture>

    {% if include.caption%}
    <figcaption>{{ include.caption }}</figcaption>
    {% endif %}
</figure>
```

{% endraw %}

Use it in the html files like this:

{% raw %}

```html
{% include picture.html url="link-to-image.png" alt="Image alt text" caption="Image caption" %}
```

{% endraw %}

> > The plugin will automatically generate .webp versions of items in your img folder. The webp images will be stored in the generated \_site/ folder only.
