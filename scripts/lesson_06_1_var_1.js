var body = document.querySelector('body');

var h2 = document.createElement('h2');
h2.innerText = 'Lesson 6';
body.append(h2);

var p = document.createElement('p');
p.innerHTML = '1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.';
p.style.fontWeight = 'bold';
body.append(p);

var divImgBig = document.createElement('div');
var divImgSmall = document.createElement('div');
var divButton = document.createElement('div');
var products = ['cheese', 'sausage', 'bread'];
var errorImg = 'Большое изображение не найдено!';

function f(event) {
    var imgBigSrc = event.target.src.replace('small', 'big');
    var imgBig = document.createElement('img');
    imgBig.width = '300';
    imgBig.src = imgBigSrc;
    var parts1 = imgBigSrc.split('/');
    var parts2 = parts1[parts1.length - 1].split('.');
    imgBig.alt = parts2[0];
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

function images() {
    for (var i = 1; i <= products.length; i++) {
        var img = document.createElement('img');
        img.src = 'img/small/' + products[i - 1] + '.jpg';
        img.alt = products[i - 1];
        img.style.width = '100px';
        img.style.height = '100px';
        img.onclick = f;
        divImgSmall.append(img);
    }
}

images();

body.append(divImgSmall);
body.append(divImgBig);
