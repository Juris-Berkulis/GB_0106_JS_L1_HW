var body = document.querySelector('body');

var h2 = document.createElement('h2');
h2.innerText = 'Lesson 6';
body.append(h2);

var p = document.createElement('p');
p.innerHTML = 'Выполнить любое из заданий:';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.';
p.style.fontWeight = 'bold';
body.append(p);

var divImgBig = document.createElement('div');
var divImgSmall = document.createElement('div');
var products = ['cheese', 'sausage', 'bread'];
var errorImg = 'Большое изображение не найдено!';

function f(event) {
    var imgBigSrc = event.target.src.replace('small', 'big');
    var imgBig = document.createElement('img');
    imgBig.width = '1000';
    imgBig.src = imgBigSrc;
    imgBig.onerror = ImgNotFound;
    divImgBig.innerHTML = '';
    divImgBig.append(imgBig);
}

function ImgNotFound() {
    var p = document.createElement('p');
    p.innerHTML = errorImg;
    divImgBig.innerHTML = '';
    divImgBig.append(p);
    alert(errorImg);
}

for (var i = 1; i <= products.length; i++) {
    var img = document.createElement('img');
    img.src = 'img/small/' + products[i - 1] + '.jpg';
    img.alt = products[i - 1];
    img.style.width = '200px';
    img.style.height = '200px';
    img.onclick = f;
    divImgSmall.append(img);
}

body.append(divImgSmall);
body.append(divImgBig);
