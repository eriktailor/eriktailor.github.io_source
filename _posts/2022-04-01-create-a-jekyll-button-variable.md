---
layout: post
title: Create a Jekyll button variable
description: In this tutorial I will explain how to create inline variables in Jekyll.
tags: jekyll html
comments: true
---

## Create

In the `/_includes` folder, create a file named `button.html` with this content:

{% raw %}

```html
<a href="{{ include.url }}" class="btn btn-primary">{{ include.label }}</a>
```

{% endraw %}

---

## Usuage

Use it around the projekt like this:

{% raw %}

```html
{% include button.html label="Button Text" url="https://444.hu" %}
```

{% endraw %}

---

### Source

[How to build customizable HTML widgets in Jekyll](https://www.sitepoint.com/quick-tip-how-to-build-customizable-html-widgets-in-jekyll/)
