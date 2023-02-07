$(document).ready(function () {
	initImgReplace();
	initSlider();
	initScrollTop();
	initMobileMenu();
	initMobileFooter();
});
function initImgReplace() {
	'use strict;';
	$('.welcome-img').each(function () {
		let imgHolder = $(this),
			img = imgHolder.find('.img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: `url(${imgSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
			});
			img.remove();
		}
	});
}