var body = document.querySelector('body');

var h2 = document.createElement('h2');
h2.innerText = 'Lesson 8';
body.append(h2);

var p = document.createElement('p');
p.innerHTML = '1. Для практикума из занятия 7 продумать, где можно применить замыкания.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = 'Замыкание:<br>Вынес счётчик "score" в отдельную анонимную функцию, которую возвращает функция "createFood" и вызывает из функции "haveFood" функция "addScore";<br>Вынес таймеры движения, создания еды, создания яда и удаления яда в отдельную анонимную функцию, которую возвращает функция "respawn" и вызывает из функции "startGame" функция "createTimers".';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '2. Не выполняя кода, ответить, что выведет браузер и почему:';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = 'if (!("a" in window)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;var a = 1;<br>}<br>alert(a);<br><br>var b = function a(x) {<br>&nbsp;&nbsp;&nbsp;&nbsp;x && a(--x);<br>};<br>alert(a);<br><br>function a(x) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return x * 2;<br>}<br>var a;<br>alert(a);<br><br>function b(x, y, a) {<br>&nbsp;&nbsp;&nbsp;&nbsp;arguments[2] = 10;<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(a);<br>}<br>b(1, 2, 3);<br><br>function a() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(this);<br>}<br>a.call(null);';
body.append(p);
