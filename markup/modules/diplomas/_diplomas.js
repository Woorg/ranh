$(document).ready(function($) {

	// $(window).scroll(function(event) {
	// 	/* Act on the event */
	// 	var scrollPos = $(window).scrollTop();
	// 	var topLine = $('.diplomas__item_big');
	// 	if(scrollPos > 50) {
	// 		console.log('true');
	// 		topLine.css('position', 'fixed');
	// 	} else {
	// 		topLine.css('position', 'static');
	// 	}
	// });

	var stickyDiplomas = $('.diplomas__w-w-w').stick_in_parent({
		offset_top : 44,
		parent : '.diplomas__w-w'
	});

});
