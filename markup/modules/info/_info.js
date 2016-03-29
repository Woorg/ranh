jQuery(document).ready(function($) {
	var infoSlider = $('.info__w').bxSlider({
		// mode : 'fade',
		slideMargin: 0,
		infiniteLoop: true,
		pager: true,
		controls: false,
		slideWidth: 1300


	});
	$('.info-nav__link_back').click(function(event) {
		event.preventDefault();

		infoSlider.goToPrevSlide();
	});
	$('.info-nav__link_next').click(function(event) {
		event.preventDefault();
		infoSlider.goToNextSlide();
	});
});
