---
layout: post
title: Create anchor links from headings
description: In this tutorial I will show you how to create anchor links in h1-h6 headings, which scrolls to the proper part of the website and adds hashtag id to url.
tags: javascript sass css
---

## Javascript

First you need to create an unique id for each heading, based on it's text:

```javascript
// Create id-s from heading text
$("h1, h2, h3, h4, h5, h6").each(function () {
    var str = $(this).text();
    str = str.replace(/\s+/g, "-").toLowerCase();
    $(this).attr("id", str);
});
```

Then, you have to add a link chain icon to each heading:

```javascript
// Add link icon to headings
$("h2, h3, h4, h5, h6").prepend('<a class="anchor"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="19" height="19" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>');
```

This will create the following `html` output:

```html
<h2 id="heading-title">
	<a class="anchor">
		<svg chain icon>
	</a>
	Heading Title
</h2>
```

Add a hashtag to the url with the id of the clicked link icon's parent heading:

```javascript
// Add a hashtag with the heading id to the url
$(".anchor").click(function (e) {
    window.location.hash = $(this).parent().attr("id");
    e.preventDefault();
});
```

---

## Css

Finally, we need to style the chain icon a little with placement and hover effects:

```other
h1 .anchor,
h2 .anchor,
h3 .anchor,
h4 .anchor,
h5 .anchor,
h6 .anchor {
  float: left;
  margin-left: -25px;
  line-height: 1;
  opacity: 0;
  padding-right: 5px;
  cursor: pointer;
}

h1 .anchor:hover,
h2 .anchor:hover,
h3 .anchor:hover,
h4 .anchor:hover,
h5 .anchor:hover,
h6 .anchor:hover {
  opacity: 1;
}

h1:hover .anchor,
h2:hover .anchor,
h3:hover .anchor,
h4:hover .anchor,
h5:hover .anchor,
h6:hover .anchor {
  opacity: 0.4;
}

h1:hover .anchor:hover,
h2:hover .anchor:hover,
h3:hover .anchor:hover,
h4:hover .anchor:hover,
h5:hover .anchor:hover,
h6:hover .anchor:hover {
  opacity: 0.7;
}
```

---

## Sass

Optionally, as an advanced user, you can use `scss` instead:

```other
h1, h2, h3, h4, h5, h6 {
	.anchor {
		float: left;
		margin-left: -25px;
		line-height: 1;
		opacity: 0;
		padding-right: 5px;
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
	}
	&:hover {
		.anchor {
			opacity: 0.4;
			&:hover {
				opacity: 0.7;
			}
		}
	}
}
```
