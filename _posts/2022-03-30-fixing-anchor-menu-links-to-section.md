---
layout: post
title: Fixing anchor menu links to section
description: This method fixes the scroll difference at the top of the section when using a sticky navbar.
tags: html css
---

## Html

Add this before the start of the section:

```html
<div class="anchor" id="my-anchor"></div>
```

---

## Css

Add this style to the hidden anchor div:

```css
.anchor {
	display: block;
	position: relative;
	top: -150px;
	visibility: hidden;
}
```

---

Now if you click on a nav menu link and set the anchor div as the scroll target, you will see that the page scrolls to the right place exactly.
