var body = document.querySelector('body');

var p = document.createElement('p');
p.innerHTML = '2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.';
p.style.fontWeight = 'bold';
body.append(p);

var foodstuffs = [
    {
        name: 'Сыр', 
        price: 200,
        imgSrc: 'img/small/cheese.jpg'
    }, 
    {
        name: 'Колбаса', 
        price: 300,
        imgSrc: 'img/small/sausage.jpg'
    }, 
    {
        name: 'Хлеб', 
        price: 100,
        imgSrc: 'img/small/bread.jpg'
    }, 
];

var divFoodstuffsCatalog = document.createElement('div');
divFoodstuffsCatalog.style.display = 'flex';
var divBasket = document.createElement('div');
divBasket.style.minHeight = '100px';

var i = 1;
for (var product of foodstuffs) {
    var card = document.createElement('div');
    var productName = document.createElement('p');
    productName.innerText = product.name;
    var productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    var productImg = document.createElement('img');
    productImg.src = product.imgSrc;
    productImg.width = '100';
    productImg.height = '100';
    var productButton = document.createElement('button');
    productButton.innerText = 'Купить';
    productButton.id = 'btn_' + i;
    productButton.onclick = f;

    card.append(productImg);
    card.append(productName);
    card.append(productPrice);
    card.append(productButton);

    divFoodstuffsCatalog.append(card);
    i++;
}

var basketTotalAmount = document.createElement('p');
var totalAmount = 0;
function f(event) {
    var btnNumber = event.target.id.split('_')[1];
    var basketCard = document.createElement('div');
    var basketCardNameText = foodstuffs[btnNumber - 1].name;
    var basketCardPriceText = foodstuffs[btnNumber - 1].price;
    totalAmount += foodstuffs[btnNumber - 1].price;
    basketTotalAmount.innerText = '';
    basketTotalAmount.append('Итого: ' + totalAmount + ' руб.');
    productCount(basketCardNameText, basketCardPriceText);

    divBasket.innerText = '';
    for (var item of mas) {
        var basketCard = document.createElement('div');
        basketCard.append(item[0] + ' за ' + item[1] + ' руб.: ' + item[2] + ' шт. - ' + (item[2] * item[1]) + ' руб.');
        divBasket.append(basketCard);
    }
}

var mas = [];
function productCount(basketCardNameText, basketCardPriceText) {
    for (var item of mas) {
        if (item[0] == basketCardNameText) {
            item[2]++;
            return mas;
        }
    }
    var count = 1;
    var list = [];
    list.push(basketCardNameText);
    list.push(basketCardPriceText);
    list.push(count);
    mas.push(list)
    return mas;
}

body.append(divFoodstuffsCatalog);

var p = document.createElement('p');
p.innerHTML = 'Корзина:';
p.style.fontWeight = 'bold';
body.append(p);

body.append(basketTotalAmount);
body.append(divBasket);
