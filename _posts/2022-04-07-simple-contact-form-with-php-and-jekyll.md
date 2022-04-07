---
layout: post
title: Simple contact form with PHP and Jekyll
description: In this tutorial I will show you how to create a simple working contact form with pure Jekyll and PHP for free, without using a third-party service.
tags: github jekyll php html css
---

I'm a big fan of Jekyll, and when I was creating my [contact page](https://eriktailor.github.io/contact.html), I wanted to have a simple contact form what sends me an email each time when the form is submitted. I was searching around the internet for a basic solution, and I only found third-party (premium) based solutions only, like the ones listed in the [Jekyll contact forms](https://jekyllthemes.io/resources/jekyll-contact-forms) page.

---

## What is the problem with third-party form providers?

My problem is simple: using these - by the way, pretty good - services, you are not able to have a custom thank you page, you can use only use the default ones with company branding, coming from the service provider. **Let's be honest... it's lame.** 😃

---

## The regular way

If you don't care about branded thank you pages, you should probably use the free plans of a third-party form solution provider, like these ones:

-   [Formspree](https://formspree.io/create/jekyllthemes)
-   [GetForm](https://getform.io/)
-   [Basin](https://usebasin.com/)
-   [FormKeep](https://formkeep.com/)
-   [FormBucket](https://www.formbucket.com/)
-   [FormCarry](https://formcarry.com/)

These are fully compatible with Jekyll, and very easy to integrate and use. There are many tutorials about this around the web. But when I was searching for another solution, I realised that there are no tutorials about how to create a simple contact form **without** using a third-party service at all, so I decided to write my own.

---

## Creating manually

If you decided to create your own form with mailing function, keep going on this article. In the following, I will cover how to create a simple, working contact form using a separate `php` file to use within your Jekyll site hosted on [GitHub Pages](https://pages.github.com/).

---

## Html

We will use a pretty basic `html` form with a name, email and message fields:

```other
<form action="" method="post">

	<label for="name">Name:</label>
	<input type="text" id="name" name="name">

	<label for="email">Email:</label>
	<input type="text" id="email" name="email">

	<label for="message">Message:</label>
	<textarea id="message" name="message"></textarea>

	<button type="submit">Submit</button>

</form>
```

Just leave the `action` attribute empty, we will get on this later. You can also check my [example pen](https://codepen.io/eriktailor/pen/xxpWLRd) on CodePen using this form.

---

## Css

I know that `css` is not relevant in this case, but I felt that there's a need for a minimum styling:

```other
label {
	display: block;
	width: 100%;
	margin-bottom: 5px;
}

input, textarea {
	margin-bottom: 15px;
	width: 200px;
	padding: 10px;
}

button {
	display: block;
	padding: 10px 15px;
	cursor: pointer;
}
```

---

## Php

Let's create the `php` script what will use to send messages through the form:

```other
<?php

// Your email address below
$myemail = 'youremail@domain.com';

// Fetch html fields
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Message headers
$to = $myemail;
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
$subject = "Contact form submission: $name";

// Message content
$email_body = "You have received a new message: " .
"Name: $name \n" .
"Email: $email \n" .
"Message: $message";

// The php mail() function
mail($to, $subject, $email_body, $headers);

// Redirect to 'thank you' page
header('Location: /thank-you.html');
```

---

## Final tasks

1. Replace `youremail@domain.com` with your email address (where you would like to receive form submissions)
2. Save the php script in a file called `mailer.php` and upload it to your website (server)
3. Grab the `url` where you can access the script, eg: `http://yoursite.com/mailer.php`
4. Insert this link into the `action` attribute of the html form:

```other
<form action="http://yoursite.com/mailer.php" method="post">
```

> > **Note:** this is the most basic mailer script can be used, probably you will need to add a client or server side form validation on the fields to work correctly on a regular basis.

---

## Conclusion

As [Jekyll](https://jekyllrb.com/) is a static html site generator, you can use the html form above just as it is, and place somewhere in your pages, for example in a `contact.html` file, just like I did.

Don't forget to create a `thank-you.html` page, where the user will be redirected when the form was submitted successfully. You can change the link of the thank you page in the php script if needed.
