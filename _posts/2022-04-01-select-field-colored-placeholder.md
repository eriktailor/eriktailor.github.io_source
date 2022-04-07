---
layout: post
title: Select field colored placeholder
description: In this tutorial I will show how make colored placeholders for a select input field, without changing the selected color.
tags: html css javascript
---

## Html

Add a basic select field in the html:

```html
<form class="select-form">
	<label>Select Technology</label>
	<select class="select-box">
		<option value="">Select....</option>
		<option value="css">CSS</option>
		<option value="html">HTML</option>
		<option value="worpdress">WordPress</option>
		<option value="javascript">Javascript</option>
	</select>
</form>
```

---

## Css

Add the following to your stylesheet:

```css
.select-placeholder {
	color: red;
}

option {
	color: black;
}
```

---

## Javascript

Add the following to your js file:

```javascript
function select_placeholder() {
	$(".form-select").each(function () {
		var select_val = $(this).val();
		if (select_val != "") {
			$(this).removeClass("select-placeholder");
		} else {
			$(this).addClass("select-placeholder");
		}
	});
}

$(document).on("change", ".form-select", function () {
	select_placeholder();
});
select_placeholder();
```

---

### Source

[How to change placeholder color on select field](https://www.thecodehubs.com/how-to-change-placeholder-color-on-select-field/)
