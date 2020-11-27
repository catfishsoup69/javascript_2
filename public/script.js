// каталог
var goods = [{
		title: 'Бежевый',
		img: 'img/small/beige.jpg',
		price: '$11',
	},
	{
		title: 'Белый',
		img: 'img/small/white.jpg',
		price: '$8',
	},
	{
		title: 'Оранжевый',
		img: 'img/small/orange.jpg',
		price: '$9',
	}
]

var basket = [];
var basketBlock = document.querySelector('div.basket-block');
var basketItem, basketTitle, basketCount, basketPrice, basketSum

//функция расчета суммы корзины
function countBasketPrice(array) {
	var sum = 0;
	for (item of array) {
		sum += goods[item.id - 1].price.substr(1) * item.count;
	}
	return sum;
}

//функция добавления товара в корзину
function addToBasket(e) {
	var item = {};
	item.count = 1;

	var n = e.target.id.substr(4);

	var k;
	for (k = 0; k < basket.length; k++) {
		if (basket[k].id == n) {
			++basket[k].count;
			var itemCount = document.querySelector('#c-' + n);
			itemCount.innerHTML = basket[k].count;
			break;
		}
	}

	if (k == basket.length) {
		basket.push(item);
		basket[k].id = n;

		basketItem = document.createElement('div');
		basketItem.classList.add('basket__item');
		basketBlock.appendChild(basketItem);

		basketTitle = document.createElement('span');
		basketTitle.classList.add('basket__item__title');
		basketItem.appendChild(basketTitle).innerHTML = goods[n - 1].title;

		basketCount = document.createElement('span');
		basketCount.classList.add('basket__item__count');
		basketCount.setAttribute('id', 'c-' + n);
		basketItem.appendChild(basketCount).innerHTML = basket[k].count;

		basketPrice = document.createElement('span');
		basketPrice.classList.add('basket__item__price');
		basketItem.appendChild(basketPrice).innerHTML = goods[n - 1].price;
	}

	basketSum = document.querySelector('span.basket__sum__count');
	basketSum.innerHTML = '$' + countBasketPrice(basket);
}

// галерея
var gallery = document.querySelector('section.gallery');
var closeGalleryBtn = document.querySelector('div.gallery-close');
closeGalleryBtn.onclick = closeGallery;
var galleryImg;


function openGallery(e) {
	gallery.style.display = "block";

	var j = e.target.id.substr(4);
	galleryImg = document.querySelector('img.gallery__img');
	galleryImg.src = goods[j - 1].img.replace('small', 'big');
	galleryImg.setAttribute('id', ('g_img-' + (j - 1)));

	galleryImg.onerror = function () {
		alert(this.src + " отсутствует");
	};


	// слайдер в галерее
	var prev = document.querySelector('#prev'),
		next = document.querySelector('#next'),
		l;

	prev.onclick = prevSlide;
	next.onclick = nextSlide;

	function prevSlide() {
		l = galleryImg.id.substr(6);
		--l;

		if (l >= 0) {
			galleryImg.src = goods[l].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (l));
		} else {
			galleryImg.src = goods[goods.length - 1].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (goods.length - 1));
		}

		galleryImg.onerror = function () {
			alert(this.src + " отсутствует");
			--l;
			galleryImg.src = goods[l].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (l));
		};

	}

	function nextSlide() {
		l = galleryImg.id.substr(6);
		++l;
		if (l < goods.length) {
			galleryImg.src = goods[l].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (l));
		} else {
			galleryImg.src = goods[0].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (0));
		};

		galleryImg.onerror = function () {
			alert(this.src + " отсутствует");
			++l;
			galleryImg.src = goods[l].img.replace('small', 'big');
			galleryImg.id = ('g_img-' + (l));
		};
	}

}


function closeGallery() {
	gallery.style.display = "none";
}

// добавление товаров из каталога на сайт
var cardBlock = document.querySelector('div.goods__card-block');
var card, cardTitle, cardImg, cardPrice, cardBtn;

for (var i = 0; i < goods.length; i++) {
	card = document.createElement('div');
	card.classList.add('goods__card');
	cardBlock.appendChild(card);

	cardTitle = document.createElement('h3');
	cardTitle.classList.add('goods__card__title');
	card.appendChild(cardTitle).innerHTML = goods[i].title;

	cardImg = document.createElement('img');
	cardImg.classList.add('goods__card__img');
	cardImg.setAttribute('id', 'img-' + (i + 1));
	card.appendChild(cardImg).src = goods[i].img;
	cardImg.onclick = openGallery;

	cardPrice = document.createElement('span');
	cardPrice.classList.add('goods__card__price');
	card.appendChild(cardPrice).innerHTML = goods[i].price;

	cardBtn = document.createElement('button');
	cardBtn.classList.add('goods__card__btn');
	cardBtn.setAttribute('id', 'btn-' + (i + 1));
	card.appendChild(cardBtn).innerText = 'Купить';
	cardBtn.onclick = addToBasket;
}