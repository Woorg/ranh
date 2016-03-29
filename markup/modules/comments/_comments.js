jQuery(document).ready(function($) {
	var commentsSlider = $('.comments__list').bxSlider({
		minSlides: 4,
		maxSlides: 8,
		moveSlides: 4,
		slideWidth: 330,
		pager: false,
		controls: false,
		slideMargin: 0,
		infiniteLoop: true
	});

	$('.comments-nav__link_back').click(function(event) {
		event.preventDefault();

		commentsSlider.goToPrevSlide();
	});
	$('.comments-nav__link_next').click(function(event) {
		event.preventDefault();
		commentsSlider.goToNextSlide();
	});
});

