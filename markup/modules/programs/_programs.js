jQuery(document).ready(function($) {
	var programs = $('.programs__item');
	programs.hover(function() {
		$(this).find('.programs__item-menu').toggleClass('programs__item-menu_active');

	});

});
