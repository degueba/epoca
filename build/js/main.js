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
class Shelves {
	constructor(){
		this.url = 'http://desenv.epocacosmeticos.com.br/teste-front-end/index.php?prod='
		this.buildShelve()
	}

	buildShelve() {
		const self = this

		self.getShelf('clarins').done((data) => {
			return data.map(function(item,array,index) {
				console.log(item.name)
				console.log(item.img)
				console.log(item.precoDe || '')
				console.log(item.precoPor || '')
				console.log(item.link)
			})
		})
	}


	getShelf(shelfName) {
		const self = this
		let urlShelf = self.url + (shelfName || 'clarins')

		return $.ajax({
			type: "GET",
			url: urlShelf,
			dataType: "json"
		})
	}

}

$(() => {
	window.Shelves = new Shelves()
})