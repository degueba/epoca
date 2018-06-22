const home = {
	slide:() => {
		$('.js-slide').slick({
			nextArrow: '<i class="slick-arrow slick-next fa fa-chevron-right"></i>',
  			prevArrow: '<i class="slick-arrow slick-prev fa fa-chevron-left"></i>',
		})
	},

	parallax: () => {
  		$('.rellax').parallax(
	  			{
	  				imageSrc: 'https://i.ytimg.com/vi/xg5CDA14dns/maxresdefault.jpg'
	  			}
  			);
	},

	menu: () => {
		$('.js-open-menu').on('click touchstart', function() {
			$('body').addClass('no-scroll')
			$('.menu-mobile').addClass('is-active')
		})

		$('.js-close-menu').on('click touchstart', function() {
			$('body').removeClass('no-scroll')
			$('.menu-mobile').removeClass('is-active')
		})
	},

	init:() => {
		home.slide()
		home.parallax()
		home.menu()
	}
}

$(() => {
	if(!$('body').hasClass('home')) return false

	home.init()
})