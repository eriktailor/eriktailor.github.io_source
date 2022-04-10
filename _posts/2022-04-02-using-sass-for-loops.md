---
layout: post
title: Using Sass for loops
description: In this tutorial I will show you how to use the built-in @for function of Sass to batch create helper classes.
image: using-sass-for-loops.jpg
tags: sass css
comments: true
---

## Scss

An example for creating `margin-bottom` helper classes from 0 to 50px by tens:

```sass
@for $i from 0 through 5 {
    .mb-#{$i} {
        margin-bottom: $i * 10px;
    }
}
```

---

## Output

The `css` output of the function above:

```css
.mb-0 {
    margin-bottom: 0px;
}

.mb-1 {
    margin-bottom: 10px;
}

.mb-2 {
    margin-bottom: 20px;
}

.mb-3 {
    margin-bottom: 30px;
}

.mb-4 {
    margin-bottom: 40px;
}

.mb-5 {
    margin-bottom: 50px;
}
```
