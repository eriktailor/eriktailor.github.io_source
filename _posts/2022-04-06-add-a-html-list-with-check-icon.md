---
layout: post
title: Add a html list with check icon
description: In this tutorial I will show you how to create a list with check (or any other) icon as bullets.
tags: html css
---

## Html

This is our base html, a plain list:

```other
<ul>
	<li>List item 1</li>
	<li>List item 2</li>
	<li>List item 3</li>
	<li>List item 4</li>
	<li>List item 5</li>
</ul>
```

---

## Css

First we need to remove the default styling of the list:

```other
ul {
	list-style: none;
	padding: 0;
}
```

Then, add a `:before` element to the list items with the svg icon as a background image:

```other
ul li:before {
	content: "";
	display: inline-block;
	width: 15px;
	height: 15px;
	background: url('https://www.svgrepo.com/show/169312/check-mark.svg');
	margin-right: 10px
}
```

The whole block needs to be styled a bit, you will see the problem is you add a longer text to the list items, like in the image below:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/F850DE9B-A4CE-4206-915C-C788C96881D6/B35E5BF5-323B-43FD-A407-19EA6350E898_2/OH2W1P7Xmwt3z1uKYPGeXmoGcxQR18ShOxir15u57B4z/Image.png)

We want to have the icons nicely aligned to the left side of the list item blocks, and separate the items a little bit. So add this code to fix these:

```other
ul li {
	text-indent: -25px;
	padding-left: 20px;
	margin-left: 5px;
	margin-bottom: 20px;
}
```

Finally, our list looks like this:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/F850DE9B-A4CE-4206-915C-C788C96881D6/2F4AD166-6AFF-4F45-89A9-4FFD93BDCD2B_2/1wkdU7UEorOHjDP8U9WnT0OnLcww6EoZCvFpuPxRsQkz/Image.png)

---

### Source

Check out the [live example](https://codepen.io/eriktailor/pen/mdpxEEW) on CodePen.
