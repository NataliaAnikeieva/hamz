$(document).ready(function () {
	initImgReplace();
	initHeader();
	initTabs();
});
function initImgReplace() {
	'use strict;';
	$(
		'.section.welcome, .footer, .events-card .events-img, .blog-right .card .blog-img'
	).each(function () {
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
function initTabs() {
	'use strict';
	var tabsHolder = $('.products-content'),
		tabsTitle = tabsHolder.find('.products-list .products-item'),
		tabsContent = tabsHolder.find('.products-hodler .products-tab');
	console.log(tabsTitle);
	tabsTitle.each(function (index) {
		$(this).attr('data-tab', index);
		$('[data-tab="0"]').addClass('active');
	});
	tabsContent.each(function (index) {
		$(this).attr('data-content', index);
		$('[data-content="0"]').addClass('active');
	});
	$('[data-tab]').on({
		click: function (e) {
			$(this).addClass('active').siblings().removeClass('active');
			$('[data-content=' + $(this).data('tab') + ']')
				.addClass('active')
				.siblings('[data-content]')
				.removeClass('active');
			e.preventDefault();
		},
	});
}
