$(document).ready(function () {
	initImgReplace();
	initHeader();
});
function initImgReplace() {
	'use strict;';
	$('.section.welcome, .footer').each(function () {
		let imgHolder = $(this),
			img = imgHolder.find('img'),
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
function initHeader() {
	'use strict;';
	var header = $('.header'),
		welcomeSection = $('.section.welcome').innerHeight();
	$(window).scroll(function () {
		var windowScroll = $(this).scrollTop();
		if (windowScroll >= welcomeSection) {
			header.addClass('transform');
		} else {
			header.removeClass('transform');
		}
	});
}
