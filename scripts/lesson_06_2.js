//! Вариант 2 для первого задания шестого урока
//! (Переместить в index.html и раскомментировать):
//! {/* <div class="img_small">
//!     <img src="img/small/cheese.jpg" alt="cheese" width="200px" height="200px">;
//!     <img src="img/small/sausage.jpg" alt="sausage" width="200px" height="200px">;
//!     <img src="img/small/bread.jpg" alt="bread" width="200px" height="200px">;
//! </div>
//! <div class="img_big"></div> */}

var body = document.querySelector('body');
var divSmall = document.querySelector('.img_small');
var divBig = document.querySelector('.img_big');
var images = document.querySelectorAll('img');
var errorImg = 'Большое изображение не найдено!';

for (var itemImg of images) {
    itemImg.onclick = f;
}

function f(event) {
    var imgBigSrc = event.target.src.replace('small', 'big');
    var imgBig = document.createElement('img');
    imgBig.width = '1000';
    imgBig.src = imgBigSrc;
    imgBig.onerror = ImgNotFound;
    divBig.innerHTML = '';
    divBig.append(imgBig);
}

function ImgNotFound() {
    var p = document.createElement('p');
    p.innerHTML = errorImg;
    divBig.innerHTML = '';
    divBig.append(p);
    alert(errorImg);
}

body.append(divBig);
