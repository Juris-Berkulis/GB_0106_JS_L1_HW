document.write('<h2>Lesson 3</h2>');

document.write('<p><b>1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100</b></p>');

var a = 2;
while (a <= 100) {
    var i = 2;
    while (i <= a) {
        if (a % i == 0 && a != i) {
            break;
        }
        if (a == i) {
            if (a < 100) {
                document.write('<span>' + a + '; </span>');
            }
            else if (a == 100) {
                document.write('<span>' + a + '.</span>');
            }
        }
        i++;
    }
    a++;
}

document.write('<p><b>2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.</b></p>');

document.write('<p><b>3. Товары в корзине хранятся в массиве. Задачи:</b></p>');

document.write('<p><b>a) Организовать такой массив для хранения товаров в корзине;</b></p>');


var minPr = 1;
var maxPr = 10;
var aPr = Math.floor(minPr + Math.random() * (maxPr - minPr + 1));
var bPr = Math.floor(minPr + Math.random() * (maxPr - minPr + 1));
var cPr = Math.floor(minPr + Math.random() * (maxPr - minPr + 1));
var minCount = 1;
var maxCount = 10;
var aCount = Math.floor(minCount + Math.random() * (maxCount - minCount + 1));
var bCount = Math.floor(minCount + Math.random() * (maxCount - minCount + 1));
var cCount = Math.floor(minCount + Math.random() * (maxCount - minCount + 1));
var basket = [{product: 'milk', price: aPr * 100, count: aCount}, {product: 'Tomatoes', price: bPr * 100, count: bCount}, {product: 'Potato', price: cPr * 100, count: cCount}];

document.write('<p><b>b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.</b></p>');

var sum = 0;
function countBasketPrice(basket) {
    document.write('<span>Список товаров: [</span>');
    for (var item of basket) {
        sum += item.price * item.count;
        document.write('<span>{' + item.product + ': ' + item.count + ' шт. по цене ' + item.price + ' руб.}, </span>');
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
