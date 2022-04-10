---
layout: post
title: How to create a copy code block button
description: In this tutorial I will show you how to add a working copy button to every code block on your page.
tags: html css javascript
comments: true
---

## Intro

This tutorial was based on [SPDUK Steve's great article](https://spdevuk.com/how-to-create-code-copy-button/) with a little twist that the copy button is hidden by default, and only reveals when the user hovers over the code block. The text of the button also changes to "Copied" when it is clicked.

---

## Html

Create a basic code block:

```html
<pre>
<code>
function(){
    console.log('lala');
}
</code>
</pre>
```

---

## Javascript

This code will create a copy button inside each `pre` elements, and makes it copy the contens to the clipboard, once the button is clicked. The code is well commented thanks to [Steve](https://spdevuk.com/), so you can see what's happening through the process. Add the following code to your `script` file:

```javascript
// get the list of all highlight code blocks
const highlights = document.querySelectorAll("pre");

highlights.forEach((pre) => {
    // create the copy button
    const copy = document.createElement("button");
    copy.innerHTML = "Copy";
    // add the event listener to each click
    copy.addEventListener("click", handleCopyClick);
    // append the copy button to each code block
    pre.append(copy);
});

const copyToClipboard = (str) => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = str; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0) // Store selection if found
            : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
    }
};

function handleCopyClick(evt) {
    // get the children of the parent element
    const { children } = evt.target.parentElement;
    // grab the first element (we append the copy button on afterwards, so the first will be the code element)
    // destructure the innerText from the code block
    const { innerText } = Array.from(children)[0];
    // copy all of the code to the clipboard
    copyToClipboard(innerText);
    // Change the button's text to "Copied"
    this.textContent = "Copied";
    // Change back the button text to "Copy" after 2 sec
    setTimeout(() => {
        this.textContent = "Copy";
    }, 2000);
}
```

---

## Css

The following code adds a little styling to the copy button and makes it invisible to reveal when the code block is hovered with the mouse. Add these styles to your `css` file:

```css
pre button {
    position: absolute;
    right: 5px;
    top: 5px;
    border: 0;
    background: #e7e7e7;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 13px;
    color: #666;
    opacity: 0;
    cursor: pointer;
}

pre button:hover {
    background: #d5dae2;
    color: black;
    transition: background-color 0.2s;
}

pre:hover button {
    opacity: 1;
    transition: opacity 0.3s;
}
```
