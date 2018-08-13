var budget = prompt('ваш бюджет на месяц:');
var nameShop = prompt('название вашего магазина:');

var shopGoods = [];
var employers = {};
var open

var mainList = {
	budget, nameShop, shopGoods, employers, open
};

shopGoods[0] = [prompt('какой тип товаров будем продавать:')];
shopGoods[1] = [prompt('какой тип товаров будем продавать:')];
shopGoods[2] = [prompt('какой тип товаров будем продавать:')];

alert('ваш бюджет на 1 день: ' + budget / 30 + ' руб');