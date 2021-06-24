var body = document.querySelector('body');

var p = document.createElement('p');
p.innerHTML = '3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.';
p.style.fontWeight = 'bold';
body.append(p);

var divImgBig2 = document.createElement('div');
var divImgSmall2 = document.createElement('div');
var divButton = document.createElement('div');
var products = ['cheese', 'sausage', 'bread'];

function f(event) {
    var imgBig = document.createElement('img');
    imgBig.width = '300';
    imgBigSrc = event.target.src;
    imgBig.src = imgBigSrc;
    var parts1 = imgBigSrc.split('/');
    var parts2 = parts1[parts1.length - 1].split('.');
    imgBig.alt = parts2[0];
    divImgBig2.innerHTML = '';
    divImgBig2.append(imgBig);
    var i = 0;
    for (var product of products) {
        if (product == imgBig.alt) {
            productIndex = i;
            break;
        }
        i++;
    }
}

function images() {
    for (var i = 1; i <= products.length; i++) {
        var img = document.createElement('img');
        var imgSrc = 'img/small/' + products[i - 1] + '.jpg'
        img.src = imgSrc;
        img.alt = products[i - 1];
        img.style.width = '100px';
        img.style.height = '100px';
        img.onclick = f;
        divImgSmall2.append(img);
    }
}

images();

var productIndex = 0;

function imgBigParam() {
    var imgBig = document.createElement('img');
    imgBig.width = '300';
    imgBigSrc = 'img/small/' + products[productIndex] + '.jpg'
    imgBig.src = imgBigSrc;
    var parts1 = imgBigSrc.split('/');
    var parts2 = parts1[parts1.length - 1].split('.');
    imgBig.alt = parts2[0];
    divImgBig2.append(imgBig);
}

imgBigParam();

function imgBack() {
    (productIndex == 0) ? productIndex = products.length - 1 : productIndex--;
    divImgBig2.innerHTML = '';
    imgBigParam();
}

function imgNext() {
    (productIndex == products.length - 1) ? productIndex = 0 : productIndex++;
    divImgBig2.innerHTML = '';
    imgBigParam();
}

var buttonBack = document.createElement('button');
var buttonNext = document.createElement('button');
buttonBack.innerText = 'Назад';
buttonNext.innerText = 'Вперёд';
buttonBack.onclick = imgBack;
buttonNext.onclick = imgNext;
divButton.append(buttonBack);
divButton.append(buttonNext);

body.append(divButton);
body.append(divImgSmall2);
body.append(divImgBig2);
