$(document).ready(function () {

	$('#fullpage').fullpage({
		navigation: true,
		showActiveTooltip: true,
		afterLoad: function (anchorLink, index) {
			if (index == 1 || index == 2 || index == 3 || index == 4 || index == 5) {
				if ($(window).width() > 1200) {
					$('header').addClass('black');
				}

			} else {
				if ($(window).width() > 1200) {
					$('header').removeClass('black');
				}
			}
			if (index > 1) {
				$('header').removeClass('nav_none');
			} else {
				$('header').removeClass('nav_none');

			}
			if (index == 1) {
				$('.btn').removeClass('ac')
				$('header').removeClass('op')
			}
			if (index == 5 || index == 4) {
				$('.section4 ').addClass('last')
			} else {
				$('.section4 ').removeClass('last')
			}
		},
		afterRender: function () {
			$('header').removeClass('op')
		}
	});
	$('.btn').click(function () {
		$('header').toggleClass('op')
	})
	var section1 = new Swiper('.section1 .swiper-container', {
		pagination: '.section1 .swiper-pagination',
		nextButton: '.section1 .swiper-button-next',
		prevButton: '.section1 .swiper-button-prev',
		paginationClickable: true,
		autoplay: 3500,
		speed: 1000,
		loop: true,
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">0' + (index + 1) + '</span>';
		}
	})
	var section3 = new Swiper('.section3 .swiper-container', {
		nextButton: '.section3 .swiper-button-next',
		prevButton: '.section3 .swiper-button-prev',
		slidesPerView: 6,
		breakpoints: {
			1200: {
				slidesPerView: 1,
			}
		},
		onInit: function (swiper) {
			if($(window).width()<500){
				var index = swiper.realIndex
				$('.cpimg li').eq(index).addClass('ac').siblings().removeClass('ac')
			}
		},
		onTouchEnd: function (swiper) {
			if ($(window).width() < 500) {
				var index = swiper.realIndex
				$('.cpimg li').eq(index).addClass('ac').siblings().removeClass('ac')
			}
		},
		onSlideChangeEnd: function (swiper) {
			if ($(window).width() < 500) {
				var index = swiper.realIndex
				$('.cpimg li').eq(index).addClass('ac').siblings().removeClass('ac')
			}
		}
	})
	var section41 = new Swiper('.new_right>div:eq(0) .swiper-container', {
		nextButton: '.new_right>div:eq(0) .swiper-button-next',
		prevButton: '.new_right>div:eq(0) .swiper-button-prev',
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			414:{
				slidesPerView: 1,
			}
		}
	})
	var section42 = new Swiper('.new_right>div:eq(1) .swiper-container', {
		nextButton: '.new_right>div:eq(1) .swiper-button-next',
		prevButton: '.new_right>div:eq(1) .swiper-button-prev',
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			414: {
				slidesPerView: 1,
			}
		}
	})
	var section43 = new Swiper('.new_right>div:eq(2) .swiper-container', {
		nextButton: '.new_right>div:eq(2) .swiper-button-next',
		prevButton: '.new_right>div:eq(2) .swiper-button-prev',
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			414: {
				slidesPerView: 1,
			}
		}
	})
	$('.cpbanner .swiper-slide').hover(function () {
		$(this).find('.cp_box').stop().slideToggle()
		var index = $(this).index()
		$('.cpimg li').eq(index).addClass('ac').siblings().removeClass('ac')
	})
	$('.cbl li:last a').click(function () {
		if ($('.section').length > 1) {
			$.fn.fullpage.moveTo(1)
		} else {
			$("html, body").animate({
				scrollTop: "0px"
			}, 500);
			return false; //不要这句会有点卡顿
		}
		// return false
	})
	$('.newtab h2').click(function () {
		var index = $(this).index()
		$(this).addClass('ac').siblings().removeClass('ac')
		$('.new_right>div').eq(index).addClass('ac').siblings().removeClass('ac')
	})
});