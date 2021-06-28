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

if (!("a" in window)) { // Не выполняется.
    var a = 1;
}
alert(a);
var b = function a(x) { // Выполняется, пока x не дойдёт до нуля.
    x && a(--x);
};
alert(a);
function a(x) { // Не вызывается.
    return x * 2;
}
var a;
alert(a);
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
function a() {
    alert(this);
}
a.call(null);

var p = document.createElement('p');
p.innerHTML = 'Я так понимаю ход выполнения программы:';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '1). Объекту "a" присваевается функция:<br>function a() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(this);<br>}';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '2). Объекту "b" присваевается функция:<br>function a(x) {<br>&nbsp;&nbsp;&nbsp;&nbsp;x && a(--x);<br>}';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '3). Т.к. в тело оператора if не входим, потому что объект "a" присутствует в окне и при этом находится в области видимости программы, то значение 1 объекту "a" не присваевается. ';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '4. Далее, поочерёдно срабатывают три alert(a), высвечивая три раза значение объекта "a", т.е.:<br>function a() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(this);<br>}';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '5). Затем, b(1, 2, 3) вызывает функцию:<br>function a(x) {<br>&nbsp;&nbsp;&nbsp;&nbsp;x && a(--x);<br>},<br>являющуюся значением объекта "b", в которую в качестве первого аргумента передаётся единица. Эта функция срабатывает, пока переменная "x" не станет равной нулю, т.е. 2 раза, однако на значение объект "a" это не влияет.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '6). Затем, a.call(null) вызывает функцию: <br>function a() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(this);<br>},<br>являющуюся значением объекта "a", после чего alert(this) высвечивает объект, для которого была вызвана функция "a". Т.к. в данном случае функция "a" вызывается для null, то this остаётся со своим значением по умолчанию, т.е. "[object window]".';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = 'Т.о., при выполнении кода последовательно высвечивается 3 раза:<br>"function a() {<br>&nbsp;&nbsp;&nbsp;&nbsp;alert(this);<br>}",<br>а затем - "[object window]".';
p.style.fontWeight = 'bold';
body.append(p);
