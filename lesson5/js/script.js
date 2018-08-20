//получаем доступ к элементам
let menu = document.getElementsByClassName('menu-item'),
	img = document.querySelectorAll('.body'),
	header = document.getElementById('title'),
	adv = document.getElementsByClassName('adv'),
	quest = document.getElementById('prompt');

//создаем новую кнопку меню
let newMenu = document.createElement('li');

//добавляем к новой кнопке класс меню
newMenu.classList.add('menu-item');

//добавляем новую кнопку на страницу
document.body.insertBefore(newMenu, menu[4]);

//заменяем вторую и третью кнопку меню
document.body.replaceChild(menu[2], menu[1]);

//создаем новый задний фон
let newImg = ?

//заменяем задний фон на странице
document.body.replaceChild(newImg, img)

//создаем новый текстовый блок
let text = document.createTextNode('Мы продаем только подлинную технику Apple');

//заменяем текстовые блоки местами
document.body.replaceChild(text, header);

//удаляем рекламный блок
document.body.removeChild(adv);

//задаем пользователю вопрос и записываем его в переменную
quest = prompt('как вы относитесь к технике Apple?');

//проверяем ответ
console.log(quest);
