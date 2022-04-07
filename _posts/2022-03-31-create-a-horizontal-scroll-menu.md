---
layout: post
title: Create a horizontal scrolling menu
description: In this tutorial I will show you how to create a horizontal scrolling navigation menu on mobile.
tags: html css
---

## Html

This is the html structure of the menu:

```other
<nav class="horizontal-menu">
    <ul>
        <li><a href="#">First Item</a></li>
        <li><a href="#">Second Item</a></li>
        <li><a href="#">Third Item</a></li>
        <li><a href="#">Fourth Item</a></li>
        <li><a href="#">Fifth Item</a></li>
        <li><a href="#">Sixth Item</a></li>
        <li><a href="#">Seventh Item</a></li>
        <li><a href="#">Eight Item</a></li>
        <li><a href="#">Nineth Item</a></li>
        <li><a href="#">Tenth Item</a></li>
    </ul>
</nav>
```

---

## Css

Add this to the stylesheet:

```other
.horizontal-menu {
    overflow: auto;
    white-space: nowrap;
}

.horizontal-menu li {
    display: inline-block;
    padding: 15px;
}
```
