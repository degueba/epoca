const home = {
	slide:() => {
		$('.js-carousel').slick({
			slidesToShow: 3,
		    slidesToScroll: 3,
			nextArrow: '<i class="slick-arrow slick-next fa fa-chevron-right"></i>',
  			prevArrow: '<i class="slick-arrow slick-prev fa fa-chevron-left"></i>',
		})
	},

	init:() => {
		home.slide()
	}
}

$(() => {
	if(!$('body').hasClass('home')) return false

	home.init()
})