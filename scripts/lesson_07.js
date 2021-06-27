var body = document.querySelector('body');

var p = document.createElement('p');
p.innerHTML = '1. Выводить счёт в режиме реального времени.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '2. Генерировать временные препятствия на поле.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '3. * Убрать границы поля. Т.е., при пересечении границы поля змейка появляется с противоположной стороны.';
p.style.fontWeight = 'bold';
body.append(p);

var divWrap = document.createElement('div');
divWrap.setAttribute('class', 'wrap');

var divField = document.createElement('div');
divField.setAttribute('id', 'snake-field');

var divButtons = document.createElement('div');
divButtons.setAttribute('class', 'buttons');

var divStart = document.createElement('div');
divStart.setAttribute('id', 'snake-start');
divStart.innerText = 'Старт';

var divRenew = document.createElement('div');
divRenew.setAttribute('id', 'snake-renew');
divRenew.innerText = 'Новая игра';

var divScore = document.createElement('div');
divScore.setAttribute('id', 'score');

divButtons.append(divStart);
divButtons.append(divRenew);

divWrap.append(divField);
divWrap.append(divButtons);
divWrap.append(divScore);

body.append(divWrap);
