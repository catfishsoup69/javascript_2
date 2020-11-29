// каталог

// класс товара
class good {
	title = ''
	img = ''
	price = 0
	id = 0

	constructor({
		title,
		img,
		price,
		id
	}) {
		this.title = title;
		this.img = img;
		this.price = price;
		this.id = id;
	}
}

// класс товара в каталоге
class goodCard extends good {
	constructor(goods) {
		super(goods);
	}

	render() {
		const cardBlock = document.querySelector('.goods__card-block');
		let card, cardTitle, cardImg, cardPrice, cardBtn;

		if (cardBlock) {
			card = document.createElement('div');
			card.classList.add('goods__card');
			cardBlock.appendChild(card);

			cardTitle = document.createElement('h3');
			cardTitle.classList.add('goods__card__title');
			card.appendChild(cardTitle).innerHTML = `${this.title}`;

			cardImg = document.createElement('img');
			cardImg.classList.add('goods__card__img');
			cardImg.setAttribute('id', 'img-' + `${this.id + 1}`);
			card.appendChild(cardImg).src = `${this.img}`;
			// cardImg.onclick = openGallery;

			cardPrice = document.createElement('span');
			cardPrice.classList.add('goods__card__price');
			card.appendChild(cardPrice).innerHTML = '$' + `${this.price}`;

			cardBtn = document.createElement('button');
			cardBtn.classList.add('goods__card__btn');
			cardBtn.setAttribute('id', 'btn-' + `${this.id + 1}`);
			card.appendChild(cardBtn).innerText = 'Купить';
			// cardBtn.onclick = addToBasket;
		}

		// addToBasket(e); {
		// 	let n = this.id.substr(4);

		// 	let k;
		// 	for (k = 0; k < basket.length; k++) {
		// 		if (basket[k].id == n) {
		// 			++basket[k].count;
		// 			let itemCount = document.querySelector('#c-' + n);
		// 			itemCount.innerHTML = basket[k].count;
		// 			break;
		// 		}
		// 	}

		// 	if (k == basket.length) {
		// 		console.log(this.basket);
		// 		this.basket.forEach(good => {
		// 			good.render();
		// 		})
		// 	}
		// }
	}
}

class list {
	goods = [];

	constructor() {
		this.goods = [];
		let goodItems = this.fetchGoods();
		goodItems = goodItems.map(cur => {
			return new goodCard(cur);
		})
		this.goods.push(...goodItems);
		this.render();
	}

	fetchGoods() {
		return [{
				title: 'Бежевый',
				img: 'img/small/beige.jpg',
				price: 11,
				id: 0
			},
			{
				title: 'Белый',
				img: 'img/small/white.jpg',
				price: 8,
				id: 1
			},
			{
				title: 'Оранжевый',
				img: 'img/small/orange.jpg',
				price: 9,
				id: 2
			},
			{
				title: 'Зеленый',
				img: 'img/small/light-green.jpg',
				price: 10,
				id: 3
			},
			{
				title: 'Красный',
				img: 'img/small/red.jpg',
				price: 12,
				id: 4
			},
			{
				title: 'Сиреневый',
				img: 'img/small/violet.jpg',
				price: 11,
				id: 5
			},
			{
				title: 'Желтый',
				img: 'img/small/yellow.jpg',
				price: 8,
				id: 6
			},
			{
				title: 'Розовый',
				img: 'img/small/pink.jpg',
				price: 9,
				id: 7
			},
			{
				title: 'Реалистичный кот',
				img: 'img/small/cat.jpg',
				price: 10,
				id: 8
			},
			{
				title: 'Вообще пингвин',
				img: 'img/small/pinguin.jpg',
				price: 15,
				id: 9
			}
		]
	}

	render() {
		console.log(this.goods);
		this.goods.forEach(good => {
			good.render();
		})
	}
}

// класс блока товаров на сайте
class goodsList extends list {
	constructor() {
		super();
	}
}

const goodsListInstance = new goodsList();
goodsListInstance.fetchGoods();
goodsListInstance.render();

// корзина
// класс товара в корзине
class goodInBasket extends good {
	count = 1;
	constructor({
		title,
		img,
		price,
		id,
		count
	}) {
		super({
			title,
			img,
			price,
			id
		}); {
			this.title = title;
			this.img = img;
			this.price = price;
			this.id = id;
			this.count = count;
		}

	}

	// render() {
	// 	const basketBlock = document.querySelector('div.basket-block');
	// 	let basketItem, basketTitle, basketCount, basketPrice, basketSum

	// 	if (basketBlock) {
	// 		basketItem = document.createElement('div');
	// 		basketItem.classList.add('basket__item');
	// 		basketBlock.appendChild(basketItem);

	// 		basketTitle = document.createElement('span');
	// 		basketTitle.classList.add('basket__item__title');
	// 		basketItem.appendChild(basketTitle).innerHTML = `${this.title}`;

	// 		basketCount = document.createElement('span');
	// 		basketCount.classList.add('basket__item__count');
	// 		// basketCount.setAttribute('id', 'c-' + n);
	// 		basketItem.appendChild(basketCount).innerHTML = `${this.count}`;

	// 		basketPrice = document.createElement('span');
	// 		basketPrice.classList.add('basket__item__price');
	// 		basketItem.appendChild(basketPrice).innerHTML = `${this.price}`;
	// 	}
	// 	basketSum = document.querySelector('span.basket__sum__count');
	// 	basketSum.innerHTML = '$' + countBasketPrice(basket);

	// 	//функция расчета суммы корзины
	// 	function countBasketPrice(array) {
	// 		var sum = 0;
	// 		for (item of array) {
	// 			sum += goods[item.id - 1].price.substr(1) * item.count;
	// 		}
	// 		return sum;
	// 	}
	// }
}


// класс корзины
class basketList extends list {

	constructor() {
		super();
	}

	render() {
		console.log(this.goods);
		this.goods.forEach(goodInBasket => {
			goodInBasket.render();
		})
	}
}


const basketListInstance = new basketList();

// // var basketBlock = document.querySelector('div.basket-block');
// // var basketItem, basketTitle, basketCount, basketPrice, basketSum



// // функция добавления товара в корзину
// // function addToBasket(e) {
// // 	var item = {};
// // 	item.count = 1;

// // 	var n = e.target.id.substr(4);

// // var k;
// // for (k = 0; k < basket.length; k++) {
// // 	if (basket[k].id == n) {
// // 		++basket[k].count;
// // 		var itemCount = document.querySelector('#c-' + n);
// // 		itemCount.innerHTML = basket[k].count;
// // 		break;
// // 	}
// // }

// // if (k == basket.length) {
// // 	basket.push(item);
// // 	basket[k].id = n;

// // 	basketItem = document.createElement('div');
// // 	basketItem.classList.add('basket__item');
// // 	basketBlock.appendChild(basketItem);

// // 	basketTitle = document.createElement('span');
// // 	basketTitle.classList.add('basket__item__title');
// // 	basketItem.appendChild(basketTitle).innerHTML = goods[n - 1].title;

// // 	basketCount = document.createElement('span');
// // 	basketCount.classList.add('basket__item__count');
// // 	basketCount.setAttribute('id', 'c-' + n);
// // 	basketItem.appendChild(basketCount).innerHTML = basket[k].count;

// // 	basketPrice = document.createElement('span');
// // 	basketPrice.classList.add('basket__item__price');
// // 	basketItem.appendChild(basketPrice).innerHTML = goods[n - 1].price;
// // }

// // basketSum = document.querySelector('span.basket__sum__count');
// // basketSum.innerHTML = '$' + countBasketPrice(basket);
// // }

// // галерея
// var gallery = document.querySelector('section.gallery');
// var closeGalleryBtn = document.querySelector('div.gallery-close');
// closeGalleryBtn.onclick = closeGallery;
// var galleryImg;

// function openGallery(e) {
// 	gallery.style.display = "block";

// 	var j = e.target.id.substr(4);
// 	galleryImg = document.querySelector('img.gallery__img');
// 	galleryImg.src = goods[j - 1].img.replace('small', 'big');
// 	galleryImg.setAttribute('id', ('g_img-' + (j - 1)));

// 	galleryImg.onerror = function () {
// 		alert(this.src + " отсутствует");
// 	};


// 	// слайдер в галерее
// 	var prev = document.querySelector('#prev'),
// 		next = document.querySelector('#next'),
// 		l;

// 	prev.onclick = prevSlide;
// 	next.onclick = nextSlide;

// 	function prevSlide() {
// 		l = galleryImg.id.substr(6);
// 		--l;

// 		if (l >= 0) {
// 			galleryImg.src = goods[l].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (l));
// 		} else {
// 			galleryImg.src = goods[goods.length - 1].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (goods.length - 1));
// 		}

// 		galleryImg.onerror = function () {
// 			alert(this.src + " отсутствует");
// 			--l;
// 			galleryImg.src = goods[l].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (l));
// 		};

// 	}

// 	function nextSlide() {
// 		l = galleryImg.id.substr(6);
// 		++l;
// 		if (l < goods.length) {
// 			galleryImg.src = goods[l].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (l));
// 		} else {
// 			galleryImg.src = goods[0].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (0));
// 		};

// 		galleryImg.onerror = function () {
// 			alert(this.src + " отсутствует");
// 			++l;
// 			galleryImg.src = goods[l].img.replace('small', 'big');
// 			galleryImg.id = ('g_img-' + (l));
// 		};
// 	}

// }


// function closeGallery() {
// 	gallery.style.display = "none";
// }