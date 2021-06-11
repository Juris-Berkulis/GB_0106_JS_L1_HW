document.write('<h2>Lesson 3</h2>');

document.write('<p><b>1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100</b></p>');

var a = 0;
while (a <= 100) {
    if (a == 100) {
        document.write('<span>' + a + '.</span>');
    }
    else {
        document.write('<span>' + a + '; </span>');
    }
    a++;
}

document.write('<p><b>2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.</b></p>');

document.write('<p><b>3. Товары в корзине хранятся в массиве. Задачи:</b></p>');

document.write('<p><b>a) Организовать такой массив для хранения товаров в корзине;</b></p>');


var min = 1;
var max = 11;
var a = Math.floor(min + Math.random() * (max - min + 1));
var b = Math.floor(min + Math.random() * (max - min + 1));
var c = Math.floor(min + Math.random() * (max - min + 1));
var basket = [{product: 'milk', price: a * 100}, {product: 'Tomatoes', price: b * 100}, {product: 'Potato', price: c * 100}];

document.write('<p><b>b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.</b></p>');

var sum = 0;
function countBasketPrice(basket) {
    document.write('<span>Список товаров: [</span>');
    for (var item of basket) {
        sum += item.price;
        document.write('<span>{' + item.product + ': ' + item.price + '}, </span>');
    }
    document.write('<span>]</span>');
    document.write('<p>Цена за все товары: ' + sum + '.</p>');
}

countBasketPrice(basket);

document.write('<p><b>4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: <br>for(…){// здесь пусто}.</b></p>');

for (var i = 0; i <=9; i == 9 ? document.write('<span>' + i + '.</span>') : document.write('<span>' + i + '; </span>'), i++) {

}

document.write('<p><b>5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:<br>x<br>xx<br>xxx<br>xxxx<br>xxxxx</b></p>');

var i = 1;
var str = '';
while (i <= 20) {
    str += 'x';
    console.log(str);
    document.write('<p>' + str + '</p>');
    i++;
}
