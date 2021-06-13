document.write('<h2>Lesson 2</h2>');

document.write('<p><b>1. Дан код:</b></p>');
document.write('<p>var a = 1, b = 1, c, d;</p>'); 
document.write('<p>c = ++a; alert(c);           // 2 - Сначала к значению a прибавляем 1, потом присваеваем к c</p>'); 
document.write('<p>d = b++; alert(d);           // 1 - Сначала значение b присваеваем к d, потом потом к b прибавляем 1</p>'); 
document.write('<p>c = (2+ ++a); alert(c);      // 5 - К a=2 прибавляем 1, присваеваем с=2+3</p>'); 
document.write('<p>d = (2+ b++); alert(d);      // 4 - Прсвеваем d=2+2, затем к значению b=2 прибавляем 1</p>'); 
document.write('<p>alert(a);                    // 3 - Выводим значение a=3</p>'); 
document.write('<p>alert(b);                    // 3 - Выводим значение b=3</p>'); 
document.write('<p><b>Почему код даёт именно такие результаты?</b></p>');

document.write('<p><b>2. Чему будет равен x в примере ниже?</b></p>');

document.write('<p>var a = 2;<br>var x = 1 + (a *= 2);</p>')
document.write('<p>Значение a домнажаем на 2 и прибавляем 1<br>Ответ: 5</p>')

document.write('<p><b>3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:<br>если a и b положительные, вывести их разность;<br>если а и b отрицательные, вывести их произведение;<br>если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.</b></p>')

var a, b;
var min = -10;
var max = 10;
var a = Math.floor(min + Math.random() * (max - min + 1));
var b = Math.floor(min + Math.random() * (max - min + 1));
document.write('<p>a = ' + a + '<br>b = ' + b + '</p>')
if (a >= 0 && b >= 0) {
    document.write('<p>Разность а и b равна: ' + (a - b) + '</p>')
}
else if (a < 0 && b < 0) {
    document.write('<p>Произведение а и b равно: ' + (a * b) + '</p>')
}
else {
    document.write('<p>Сумма а и b равна: ' + (a + b) + '</p>')  
}

document.write('<p><b>4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. Дополнительное задание. Сделайте решение вторым способом, используя рекурсию.</b></p>')

var min = 0;
var max = 15;
var a = Math.floor(min + Math.random() * (max - min + 1));
document.write('<p>a = ' + a + '</p>');
document.write('<span>При помощи switch:</span>');
switch(a){
    case 0:
        document.write('<span> ' + 0 + '</span>');
    case 1:
        document.write('<span> ' + 1 + '</span>');
    case 2:
        document.write('<span> ' + 2 + '</span>');
    case 3:
        document.write('<span> ' + 3 + '</span>');
    case 4:
        document.write('<span> ' + 4 + '</span>');
    case 5:
        document.write('<span> ' + 5 + '</span>');
    case 6:
        document.write('<span> ' + 6 + '</span>');
    case 7:
        document.write('<span> ' + 7 + '</span>');
    case 8:
        document.write('<span> ' + 8 + '</span>');
    case 9:
        document.write('<span> ' + 9 + '</span>');
    case 10:
        document.write('<span> ' + 10 + '</span>');
    case 11:
        document.write('<span> ' + 11 + '</span>');
    case 12:
        document.write('<span> ' + 12 + '</span>');
    case 13:
        document.write('<span> ' + 13 + '</span>');
    case 14:
        document.write('<span> ' + 14 + '</span>');
    case 15:
        document.write('<span> ' + 15 + '</span><br>');
}

document.write('<span>При помощи рекурсии:</span>');
function f(a) {
    if (a <= 15) {
        document.write('<span> ' + a + '</span>');
        f(a + 1);
    }
}

f(a);

document.write('<p><b>5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.</b></p>');

function addition(n1, n2) {
    document.write('<p>' + n1 + ' + ' + n2 + ' = ' + (n1 + n2) + '</p>');
    return n1 + n2;
}

function subtraction(n1, n2) {
    document.write('<p>' + n1 + ' - ' + n2 + ' = ' + (n1 - n2) + '</p>');
    return n1 - n2;
}

function multiplication(n1, n2) {
    document.write('<p>' + n1 + ' * ' + n2 + ' = ' + (n1 * n2) + '</p>');
    return n1 * n2;
}

function division(n1, n2) {
    document.write('<p>' + n1 + ' / ' + n2 + ' = ' + (+(n1 / n2).toFixed(2)) + '</p>');
    return +(n1 / n2).toFixed(2);
}

var min = -10;
var max = 10;
var range1 = Math.floor(min + Math.random() * (max - min + 1));
var range2 = Math.floor(min + Math.random() * (max - min + 1));

addition(range1, range2);
subtraction(range1, range2);
multiplication(range1, range2);
division(range1, range2);

document.write('<p><b>6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).</b></p>');

var min = 1;
var max = 4;
var operation = Math.floor(min + Math.random() * (max - min + 1))
switch(operation) {
    case 1:
        operation = '+';
        break;
    case 2:
        operation = '-';
        break;
    case 3:
        operation = '*';
        break;
    case 4:
        operation = '/';
        break;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            addition(arg1, arg2);
            break;
        case '-':
            subtraction(arg1, arg2);
            break;
        case '*':
            multiplication(arg1, arg2);
            break;
        case '/':
            division(arg1, arg2);
            break;
    }
}

var min = 0;
var max = 10;
var arg1 = Math.floor(min + Math.random() * (max - min + 1));
var arg2 = Math.floor(min + Math.random() * (max - min + 1));
mathOperation(arg1, arg2, operation);

document.write('<p><b>7. *Сравнить null и 0. Попробуйте объяснить результат.</b></p>');

document.write('<p>null < 0 = ' + (null < 0) + '<br>null > 0 = ' + (null > 0) + '<br>null == 0 = ' + (null == 0) + '<br>null != 0 = ' + (null != 0) + '<br>null <= 0 = ' + (null <= 0) + '<br>null >= 0 = ' + (null >= 0) + '</p>');
document.write('Сравнение в JavaScript выполняется по трём разным алгоритмам в зависимости от знака сравнения: 1. < или >; 2. == и 3. <=, >= или !=.<br>Если знак < или >, то в теле алгоритма null получает значение 0, и после сравнения 0 < 0 и 0 > 0 получается false.<br>Если знак ==, то в случае, если один из сравниваемых элементов равен null, все шаги алгоритма пропускаются и выражению автоматически присваевается значение false.<br>Если знак <= или >=, то соответствующий нестрогий знак заменяется на противоположный строгий, после чего выполняется первый алгоритм с той лишь разницей, что в конце полученное булевое значение меняется на противоположное, т.е. true.<br>Если знак !=, то сравнение выполняется, очевидно, аналогичным образом: знак != заменяется на ==, выполняется проверка по второму алгоритму, после чего результат сравнения меняется на противоположный, т.е. true.');

document.write('<p><b>8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.</b></p>');

var answer = 1;
function power(val, pow) {
    if (pow > 0) {
        answer *= val;
        power(val, pow - 1);
    }
    else if (pow == 0) {
        document.write('<p>' + v + ' в степени ' + p + ' равно ' + answer + '</p>');
    }
    return answer;
}

var min = 0;
var max = 10;
var v = Math.floor(min + Math.random() * (max - min + 1));
var p = Math.floor(min + Math.random() * (max - min + 1));
power(v, p);
