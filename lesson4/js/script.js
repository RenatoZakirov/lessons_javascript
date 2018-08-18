//обьявлем переменные
var budget,
	nameShop,
	time,
	price;

var shopGoods = [];
var employers = {};
var open = false;
var discount = false;
var shopItems = [];

//создаем стартовую функцию
function start() {
	budget = prompt('ваш бюджет на месяц:', '');

while (isNaN(budget) || budget == '' || budget == null) {
	budget = prompt('ваш бюджет на месяц:', '');
}

	nameShop = prompt('название вашего магазина:', '').toUpperCase();
	time = 10;

}
//вызываем стартовую функцию
//start();

//создаем основной словарь
var mainList = {
	budget,
	nameShop,
	shopGoods,
	employers,
	open,
	shopItems,
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('какой тип товаров будем продавать:');
		
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('все верно!');
				mainList.shopGoods[i] = a;
			} else {

			}
		}
	},
	workTime: function workTime(time) {
			if (time < 0) {
				console.log('такого не может быть...');
			} else if (time > 8 && time < 20) {
				console.log('время работать!');
				mainList.open = true;
			} else if (time < 24) {
				console.log('уже слишком поздно...');
			} else {
				console.log('в сутках только 24 часа!');
			}
	},
	daysBudget: function daysBudget() {
		alert('ваш бюджет на 1 день: ' + budget / 30 + ' руб');
	},
	discount: function discount() {
		price = prompt('введите стоимость товара:')
		discount = confirm("есть ли у вас скидка?");

		if (discount == true) {
		price = (price / 100) * 80;
			alert('ваша итоговая цена ' + price)
	} else {
		alert('цена остается без изменений ' + price)
	}
	},
	emploYers: function emploYers() {
		for (let i = 0; i < 4; i++) {
		employers[i] = prompt('имя сотрудника ' + (i + 1));
	}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
		let items = prompt('перечислите через запятую товары:', '');

		//делаем проверку по первому вопросу 
		if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
			mainList.shopItems = items.split(',');
			} else {
				i--;
			}
		};

		for (let i = 0; i < 1; i++) {
		let y = prompt('подождите, еще нужен один:', '');

		//делаем проверку по второму вопросу
		if ((typeof(y)) === 'string' && (typeof(y)) != null && y != '') {
			mainList.shopItems.push(y);
		} else {
				i--;
		}
	};
		//сортируем
		mainList.shopItems.sort();
}}
//вызываем метод заданный в дз
mainList.chooseShopItems();

//перебираем массив через форИч
mainList.shopItems.forEach(function(items, i, arr) {
		i++
		alert('у нас вы можете купить: ' + i + ' ' + items)
	})

//перебираем словарь через форИн
for (let key in mainList) {
	console.log('наш магазин включает в себя: ' + mainList[key])
}