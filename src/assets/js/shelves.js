Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

class Shelves {
	constructor(url, container){
		this.url = url || 'http://desenv.epocacosmeticos.com.br/teste-front-end/index.php?prod='
		this.container = container || '.prateleira.shelf'
		this.get = function(shelf = 'clarins') {
			this.requestShelf(shelf).done(data => {console.log(data)})
		}
		this.open = function() {
			$(this.container).fadeIn()
		}

		this.close = function() {
			$(this.container).fadeOut()
		}

		this.appendShelfItem()
	}

	requestShelf(shelfName) {
		const self = this
		let urlShelf = self.url + (shelfName || 'clarins')

		return $.ajax({
			type: "GET",
			url: urlShelf,
			dataType: "json"
		})
	}

	buildShelveItem(item, percent) {
		return 	`<div class="shelf__item">
					<a class="shelf__item-link" href="${item.link}">
						<span class="shelf__item-discount">-${percent}%</span>
					</a>
		  			<div class="shelf__item-image"><img src="${((item.img != undefined) ? item.img : 'http://via.placeholder.com/300x300') }"/></div>
		  			<div class="shelf__item-brand">
		    			<h2>${item.marca}</h2>
		  			</div>
		 		 	<div class="shelf__item-name"><span>${item.nome}</span></div>
		  			<div class="shelf__item-price">
		  				<span class="shelf__item-price--de">R$ ${item.precoDe}</span>
		  				${(item.precoPor) ? `<span class="shelf__item-price--por">R$ ${item.precoPor}</span>` : ''} 
		  			</div>
				</div>`
	}

	appendShelfItem() {
		const self = this
		var shelfItems = ''
		
		self.requestShelf('clarins').done((data) => {
			
			data.map(function(item){
				shelfItems += self.buildShelveItem(item, [20, 50, 99, 30, 66, 33, 22,25, 10].sample())
			})

			$(this.container).append(shelfItems)
		})
	}

}

$(document).ready(function(){
  window.Shelves = new Shelves()
})