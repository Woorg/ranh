jQuery(document).ready(function($) {
	var mainSlider = $('.slider__w').bxSlider({
		mode : 'fade',
		slideMargin: 0,
		adaptiveHeight : true,
		adaptiveHeightSpeed: 100,
		startSlide: 0,
		auto : true,
		speed: 600,
		pause : 7000,
		autoDelay: 1000,
		pager: true,
		controls: false
		// onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		// 	console.log(currentSlideHtmlObject);
		// 	$('.slider__item_active').removeClass('slider__item_active');
		// 	$('.slider__item').eq(currentSlideHtmlObject + 1).addClass('slider__item_active')
		// },
		// ofSliderLoad: function() {
		// 	$('.slider__item').eq(1).addClass('slider__item_active');
		// 	$('.slider__item-slogan_one');
		// }
	});



});
