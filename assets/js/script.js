jQuery(document).ready(function ($) {
	// ---------------------------------------------------

	// Technologies img tooltips init
	$(".tech-list img").each(function () {
		var alt = $(this).attr("alt");
		$(this).attr("title", alt);
		$(this).simpletooltip({
			position: "bottom",
			color: "#FFFFFF",
			background_color: "rgba(0,0,0,0.75)",
			border_width: 4,
		});
	});

	// Make anchor headings hash in url
	$(function () {
		$("h2, h3, h4, h5, h6")
			.not(".no-anchor")
			.prepend(
				'<a class="anchor"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="19" height="19" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>'
			);
		$(".anchor").click(function (e) {
			window.location.hash = $(this).parent().attr("id");
			e.preventDefault();
		});
	});

	// Make outgoing links target blank
	$(document.links)
		.filter(function () {
			return this.hostname != window.location.hostname;
		})
		.attr("target", "_blank");

	// Redirect to thank you page after contact form submit
	$(document).on("submit", "#contact-form", function () {
		window.location.href = "https://eriktailor.github.io/thank-you.html";
	});

	// Create a lightbox for post images
	$(function () {
		var lightbox = $("#lightbox");
		lightbox.hide();
		$(".single-post img").click(function () {
			var src = $(this).attr("src");
			$("body").addClass("lightbox-opened");
			lightbox.fadeIn().css("display", "flex");
			lightbox.find("img").attr("src", src);
		});
		$("#lightbox .close").click(function () {
			lightbox.fadeOut();
			$("body").removeClass("lightbox-opened");
		});
	});

	// ---------------------------------------------------
});
