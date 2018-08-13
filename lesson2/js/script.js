var budget = prompt('ваш бюджет на месяц:');
var nameShop = prompt('название вашего магазина:');

var shopGoods = [];
var employers = {};
var open

var time = 10;

var mainList = {
	budget, nameShop, shopGoods, employers, open
};

for (let i = 0; i < 5; i++) {
	let a = prompt('какой тип товаров будем продавать:');
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {

	}
}

if (time < 0) {
	console.log('такого не может быть...');
} else if (time > 8 && time < 20) {
	console.log('время работать!');
} else if (time < 24) {
	console.log('уже слишком поздно...');
} else {
	console.log('в сутках только 24 часа!');
};

// повторяем тот же цикл, но через конструкцию - вайл;
let i = 0

while (i < 5) {
	let a = prompt('какой тип товаров будем продавать:');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {

	}

	i++;
}

// еще раз повторяем этот цикл, теперь через конструкцию - ду вайл;
i = 0

do {
	let a = prompt('какой тип товаров будем продавать:');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {

	}

	i++;
}

while (i < 5);

alert('ваш бюджет на 1 день: ' + budget / 30 + ' руб');

console.log(mainList);