(function ($) {
	"use strict"; // Start of use strict

	// Show the navbar when the page is scrolled up
	var MQL = 992;
	var is_touch_device = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;

	//primary navigation slide-in effect
	if ($(window).width() > MQL) {
		var headerHeight = $("#mainNav").height();
		$(window).on(
			"scroll", {
				previousTop: 0,
			},
			function () {
				var currentTop = $(window).scrollTop();
				//check if user is scrolling up
				if (currentTop < this.previousTop) {
					//if scrolling up...
					if (currentTop > 0 && $("#mainNav").hasClass("is-fixed")) {
						$("#mainNav").addClass("is-visible");
					} else {
						$("#mainNav").removeClass("is-visible is-fixed");
					}
				} else if (currentTop > this.previousTop) {
					//if scrolling down...
					$("#mainNav").removeClass("is-visible");
					if (currentTop > headerHeight && !$("#mainNav").hasClass("is-fixed")) $("#mainNav").addClass("is-fixed");
				}
				this.previousTop = currentTop;
			}
		);
	}
	$(document).ready(function () {
		// scroll to top button
		$("#scroller").click(function () {
			$("html, body").animate({
					scrollTop: 0,
				},
				"slow"
			);
		});
		$('[data-toggle="popover"]').popover({
			trigger: is_touch_device ? "click" : "hover"
		});
		$('.circular-menu-container').toggleClass('touch', is_touch_device);
		$('.handwritten').each(function () {
			var numLow = -20,
				numHigh = 20;
			var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
			var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numLow);
			$(this).css('transform', 'rotate(' + numRand + 'deg)');
		});
		if ($('footer.site-footer').length) {
			let footer_height = "4.5rem";
			$('body').css('margin-bottom', footer_height);
			$('footer.site-footer').css('height', footer_height);
		}
	});
})(jQuery); // End of use strict