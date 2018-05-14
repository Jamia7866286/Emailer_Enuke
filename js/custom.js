/************* Sticky Header Js ********************/

$(window).on("scroll", function() {
		if ($(this).scrollTop() > 30) {
		   $("header").addClass("sticky");
		   $(".top-header").addClass("hide");
		}
		else {
		   $("header").removeClass("sticky");
		   $(".top-header").removeClass("hide");
		}
	 });
