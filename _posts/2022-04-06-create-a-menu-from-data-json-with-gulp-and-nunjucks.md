---
layout: post
title: Create a menu from data.json with Gulp & Nunjucks
description: In this tutorial I will show you how to include a data.json file in Gulp, and call variables used in Nunjucks template files.
image: false
tags: gulp html
---

## Create

Create a `data.json` file in the root of your src folder:

```other
{
    "menus": [
        {
            "title": "Item 1",
            "link": "https://444.hu"
        },
        {
            "title": "Item 2",
            "link": "https://444.hu"
        }
    ]
}
```

---

## Install

Install the `gulp-data` package:

```other
npm install gulp-data --save-dev
```

Import it in the `gulpfile.js` file:

```other
const data = require('gulp-data');
```

---

## Include

Include the `data.json` file in the html rendering function:

```other
.pipe(data(function() {
  return require('./src/data.json')
}))
```

So for example, here is a complete html rendering function example:

```other
function renderHtml() {
    return src([
        './src/html/pages/*.+(html|njk)',
        '!src/html'
    ])
        .pipe(data(function () {
            return require('./src/data.json')
        }))
        .pipe(njk({ path: ['src/html'], }))
        .pipe(beautify.html({ indent_size: 4, preserve_newlines: false }))
        .pipe(dest(paths.html.dest))
}
```

---

## Usuage

Finally, let’s add some markup to `index.nunjucks` so it uses the data we’ve added:

```other
<nav>
	{% for item in menus %}
			<a href="{{ item.link }}">{{ item.title }}</a>
	{% endfor %}
</nav>
```

---

## Source

[How to Modularize HTML Using Template Engines and Gulp](https://medium.com/free-code-camp/how-to-modularize-html-using-template-engines-and-gulp-d1cb8af54138)
