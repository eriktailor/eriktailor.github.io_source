---
layout: post
title: Custom html list with styled numbers
description: In this tutorial I will show you how to create html ordered lists with custom styled numbering.
tags: html css
---

## Html

The html source is a basic ordered list with either shorter and longer texts:

```html
<ol>
    <li>List item 1 -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet neque dui. Vivamus nisi ex, fermentum in vehicula eget, sollicitudin sit amet enim. Sed est lectus, consectetur sed blandit placerat, accumsan et ligula. Donec venenatis felis ut dolor auctor, eu placerat tortor dapibus.</li>
    <li>List item 2 -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet neque dui. Vivamus nisi ex, fermentum in vehicula eget, sollicitudin sit amet enim. Sed est lectus, consectetur sed blandit placerat, accumsan et ligula. Donec venenatis felis ut dolor auctor, eu placerat tortor dapibus.</li>
    <li>List item 3 -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet neque dui. Vivamus nisi ex, fermentum in vehicula eget, sollicitudin sit amet enim. Sed est lectus, consectetur sed blandit placerat, accumsan et ligula. Donec venenatis felis ut dolor auctor, eu placerat tortor dapibus.</li>
    <li>List item 4</li>
    <li>List item 5</li>
</ol>
```

---

## Css

First we need to disable the default style of the list, add a left padding and define a `counter-reset` attribute, what can be any word you would like to use for the list styling:

```css
ol {
    list-style: none;
    counter-reset: my-counter;
    padding-left: 35px;
}
```

Next, add a `counter-increment` attribute (with the same name you defined in the previous step), a negative text indentation, and a bottom margin for a better separated look:

```css
ol li {
    counter-increment: my-counter;
    margin-bottom: 15px;
    text-indent: -35px;
}
```

Then we add a `:before` pseudo class to the list items containing numbers and the stylings:

```css
ol li::before {
    content: counter(my-counter);
    color: white;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: inline-block;
    background: #39c346;
    border-radius: 100%;
    margin-right: 10px;
    text-indent: 0;
}
```

Finally our basic ordered list with custom numbers looks like this:

![Image.png](https://res.craft.do/user/full/34d81fee-a2e7-021c-d5fc-2e46d6c760cb/doc/DD0BD5AB-B713-4596-887B-20E855AAB64A/DB084662-5982-4A1D-A479-021DE58E5558_2/1ybcJDFvLsPnIcev1AxKVy8xprOhrsJKMOddd15N14Yz/Image.png)

---

Check out the [live example](https://codepen.io/eriktailor/pen/GRyxqLx) on CodePen.
