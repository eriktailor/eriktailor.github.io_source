---
layout: post
title: Easy gallery lightbox with jQuery
description: In this tutorial, I will show you how to create an easy, simple image gallery lightbox using jQuery, Html and Css without a plugin.
tags: html css jquery javascript
---

## 1. Add images

Add a container and some placeholder images from [lorem picsum](https://picsum.photos/):

```html
<div class="gallery">
	<img src="https://picsum.photos/600">
	<img src="https://picsum.photos/599">
	<img src="https://picsum.photos/598">
	<img src="https://picsum.photos/597">
	<img src="https://picsum.photos/596">
	<img src="https://picsum.photos/595">
	<img src="https://picsum.photos/594">
</div>
```

----

## 2. Add the lightbox

Create a the lightbox with the basic buttons (close, next, prev) and an empty image, and place it just above the closing `</body>` tag:

```html
<div id="lightbox">
	<div class="close">x</div>
	<div class="prev">&lt;</div>
	<div class="next">&gt;</div>
	<img src="#">
</div>
```

----

## 3. Style the gallery

Add some basic styling to the gallery using `css` and make images look like a grid with thumbnails:

```css
.gallery {
	display: grid;
	grid-template-columns: auto auto auto auto;
	gap: 20px;
	max-width: 600px;
}

.gallery img {
	width: 150px;
	border-radius: 10px;
}
```

Now your gallery should look like this:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/C6FBF9CB-5DA7-4DC4-A06F-273396497101/FB44B7C8-F858-4010-B3CD-A272C9DE92E3_2/B3y2RlMcAeKjTvWjDKrBe7viBpKU7VTDXN0XqP3FHEIz/Image.png)

----

## 4. Style the lightbox

Now let's create the outfit of the lightbox with shaded black overlay and white icons as the buttons. Complete your `css` with this:

```css
#lightbox {
	background: rgba(0,0,0,0.8);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: none;
	justify-content: center;
	align-items: center;
	color: #fff;
}

.close, .prev, .next {
	position: absolute;
	cursor: pointer;
}

.close {
	right: 10px;
	top: 10px;
}

.prev {
	left: 10px;
}

.next {
	right: 10px;
}
```

----

## 5. Create the function

Now we have the gallery structure set up in `html` and the stylings in `css`, it's time to add some javascript to get it work.

First include [jQuery](https://jquery.com/) library with adding this inside the `<head>` of your document:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

Then, add the lightbox function to your `js` file:

```javascript
$(function(){
	
	// Lightbox function
	var lightbox = function(){
		var src = $('.active').attr('src');
		$('#lightbox img').attr('src', src);
	}

	// Image is clicked
	$('img').click(function(){
		$('#lightbox').css('display','flex');
		$(this).addClass('active');
		lightbox();
	});

	// Close button clicked
	$('.close').click(function(){
		$('img').removeClass('active');
		$('#lightbox').hide();
	});

	// Next button clicked
	$('.next').click(function(){
		if( $('.active').parent('.gallery').children('img:last').hasClass('active') ) {
			$('.active').removeClass().parent('.gallery').children('img:first').addClass('active');
			lightbox();
		} else {
			$('.active').removeClass().next('img').addClass('active');
			lightbox();
		}
	});
	
	// Prev button clicked
	$('.prev').click(function(){
		if( $('.active').parent('.gallery').children('img:first').hasClass('active') ) {
			$('.active').removeClass().parent('.gallery').children('img:last').addClass('active');
			lightbox();
		} else {
			$('.active').removeClass().prev('img').addClass('active');
			lightbox();
		}
	});
	
});
```

It handles the following:

- Opens the lightbox when an image is clicked
- Closes the lightbox when the `X` button is clicked
- Go to the next image when the `>` button is clicked
- Shows the previous image once the `<` button is clicked

----

You can see a nice [live example](https://codepen.io/eriktailor/pen/WNdmwJO) of this on CodePen.