---
layout: post
title: Create components with Gulp & Nunjucks
description: In this tutorial I will show you how to create a repeatable blockquote component template in Gulp.js using Nunjucks html modulizer.
image: false
tags: gulp html
comments: true
---

## Create

Let's create our template file called `quote.njk`, which will contain the markup of the blockquote:

{% raw %}

```html
{% macro params(content) %}
<blockquote>{{ content }}</blockquote>
{% endmacro %}
```

{% endraw %}

---

## Import

Import out newly created file in the `layouts.njk` template:

{% raw %}

```html
{% import "partials/quote.njk" as quote %}
```

{% endraw %}

---

## Usuage

Use it in `.njk` template files around your project, like this:

{% raw %}

```html
{{ quote.params('This is the blockquote sample text') }}
```

{% endraw %}
