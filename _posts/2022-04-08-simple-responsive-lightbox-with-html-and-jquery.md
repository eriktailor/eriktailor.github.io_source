---
layout: post
title: Simple responsive lightbox with Html and jQuery
description: In this tutorial I will show you how to create a simple responsive lightbox with Html & jQuery, without using a third-party plugin.
tags: html css javascript
---

## Html

Add some basic html content as a placeholder:

```html
<h1>Simple HTML Lightbox with jQuery</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed condimentum leo. Fusce ligula nibh, ullamcorper vitae nibh in, consequat tempor ligula. Nunc urna arcu, euismod volutpat aliquet hendrerit, fringilla id velit. In consectetur diam metus, eget vulputate leo cursus non. Morbi rutrum blandit urna, vel tempor sem placerat id. Cras eget erat ac nisi tincidunt blandit at vel ex. Donec eleifend nisl sit amet leo fringilla, vitae venenatis orci vestibulum. Nunc ornare dolor augue, ac molestie lorem rutrum quis. In rhoncus elit dignissim, tempus est a, rhoncus felis. Suspendisse eu sodales risus. Nam auctor ullamcorper nulla, quis aliquet lectus interdum ac. Donec nec dui eget nibh tincidunt hendrerit.</p>
<p>Aenean sem nunc, gravida non ante vestibulum, elementum gravida arcu. Donec tincidunt tempus eleifend. Sed nec lacus in nisi sagittis faucibus. Suspendisse faucibus mauris odio, id maximus dui iaculis non. Cras pulvinar sit amet dui nec fringilla. Vivamus vulputate lorem id dictum eleifend. Proin tortor urna, imperdiet eu diam vitae, euismod ultrices lorem. Vestibulum ut urna cursus, posuere lectus non, malesuada elit. Sed vitae est non turpis consequat gravida id non sem. Vivamus vel consectetur leo, ac venenatis turpis. Vestibulum faucibus ligula eget nisl venenatis, vel auctor libero pharetra.</p>
<p>Proin accumsan tincidunt sollicitudin. Phasellus a tortor nec neque pulvinar lobortis. Sed dignissim aliquet elit eu placerat. Duis eu feugiat quam, et ultrices turpis. Cras nec pharetra lacus, ac consequat felis. Morbi vehicula rhoncus ex at cursus. Morbi eu enim ex. Nam sit amet hendrerit elit. Curabitur dignissim luctus eleifend. Nam nec felis aliquet, bibendum eros at, fringilla risus. Suspendisse in convallis diam.</p>
```

Add three sample images below with `thumbnail` class:

```html
<img class="thumbnail" src="https://i.picsum.photos/id/16/800/600.jpg?hmac=OrMjYuOpFb-vJGm_iqQ8K_qAGMLOpcQ39bXAO10XUdI" />
<img class="thumbnail" src="https://i.picsum.photos/id/134/800/600.jpg?hmac=ODRZVRHsxY4P4j2hjMlmgYTJBrINi3rI90157vM_3zA" />
<img class="thumbnail" src="https://i.picsum.photos/id/877/800/600.jpg?hmac=ep6C9w4soT9Z0zSfoCV2wje02ICpDt2OT1fPVZVOTko" />
```

Add the lightbox code at the end of the document, just above the `</body>` tag:

```html
<div class="lightbox">
    <div>
        <img src="" />
    </div>
    <button class="close">x</button>
</div>
```

---

## Css

Add the following most basic styling for the lightbox parts:

```css
.thumbnail {
    width: 180px;
    cursor: pointer;
}

.lightbox {
    width: 100%;
    height: 100%;
    display: none;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
}

.lightbox > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
}

.lightbox img {
    max-width: 100%;
}

.close {
    position: absolute;
    right: 15px;
    top: 15px;
    background: transparent;
    color: #fff;
    border: 0;
    font-size: 24px;
    cursor: pointer;
}
```

---

## jQuery

First, let's define our lightbox. We will use the `lb` variable referring to the lightbox container:

```javascript
var lb = $(".lightbox");
```

Then, create the lightbox opening function triggered when a `thumbnail` image is clicked:

```javascript
$(".thumbnail").click(function () {
    var source = $(this).attr("src");
    lb.fadeIn("1000");
    lb.find("img").attr("src", source);
    $("body").css("overflow-y", "hidden");
});
```

Finally, create the lightbox closing function, triggered when the `close` button is clicked:

```javascript
$(".close").click(function () {
    lb.fadeOut("1000");
    $("body").css("overflow-y", "auto");
});
```

---

Check out the [live example](https://codepen.io/eriktailor/pen/dyJKeXp) at CodePen.
