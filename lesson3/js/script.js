//обьявлем переменные
var budget,
	nameShop,
	time,
	price

var shopGoods = [];
var employers = {};
var open;
var discount;

//создаем стартовую функцию
function start() {
	budget = prompt('ваш бюджет на месяц:');

while (isNaN(budget) || budget == '' || budget == null) {
	budget = prompt('ваш бюджет на месяц:');
}

	nameShop = prompt('название вашего магазина:').toUpperCase();
	time = 10;

}
//вызываем стартовую функцию
start();

//создаем основной словарь
var mainList = {
	budget, nameShop, shopGoods, employers, open
};

//создаем функцию покупки
function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('какой тип товаров будем продавать:');
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('все верно!');
			mainList.shopGoods[i] = a;
		} else {

		}
	}
}
//вызываем функцию покупки
chooseGoods();

//создаем функцию рабочее время
function workTime(time) {
if (time < 0) {
	console.log('такого не может быть...');
} else if (time > 8 && time < 20) {
	console.log('время работать!');
} else if (time < 24) {
	console.log('уже слишком поздно...');
} else {
	console.log('в сутках только 24 часа!');
}
}
//вызываем функцию рабочее время
workTime(18);

//создаем функцию ежедневный бюджет
function daysBudget() {
	alert('ваш бюджет на 1 день: ' + budget / 30 + ' руб');
}
//вызываем функцию бюджет
daysBudget();

//создаем функцию дисконт
function discount() {
	price = prompt('введите стоимость товара:')
	discount = confirm("есть ли у вас скидка?");

	if (discount == true) {
		price = (price / 100) * 80;
			alert('ваша итоговая цена ' + price)
	} else {
		alert('цена остается без изменений ' + price)
	}
}
//вызываем функцию дисконт
discount();

//создаем функцию сотрудники
function emploYers() {
	for (let i = 0; i < 4; i++) {
		employers[i] = prompt('имя сотрудника ' + (i + 1));
	}
}
//вызываем функцию сотрудники
emploYers();

//проверяем что в итоге записалось в переменную эмплоерс
console.log(employers);


//теперь просим браузер показать нам в консоли содержимое самого основного словаря 
console.log(mainList);