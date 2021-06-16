var body = document.querySelector('body');

var h2 = document.createElement('h2');
h2.innerText = 'Lesson 5';
body.append(h2);

var p = document.createElement('p');
p.innerHTML = '1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.';
p.style.fontWeight = 'bold';
body.append(p);

var p = document.createElement('p');
p.innerHTML = '3. *Заменить буквы, обозначающие фигуры картинками.';
p.style.fontWeight = 'bold';
body.append(p);

var table = document.createElement('table');
table.style.borderSpacing = '0';
table.style.borderCollapse = 'collapse';

var masLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// Ладья, Конь, Слон, Ферзь, Король, Слон, Конь, Ладья, Пешка.
var masChessmenBlack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '&#9823;']; // Чёрные.
var masChessmenWhite = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '&#9817;']; // Белые.

function f() {
    for (var i = 1; i <= 10; i++) {
        var tr = document.createElement('tr');
        table.append(tr)
        for (var j = 1; j <= 10; j++) {
            var td = document.createElement('td');
            td.style.textAlign = 'center';
            td.style.boxSizing = 'border-box';
            if (j != 1 && j != 10 && i != 1 && i != 10){
                td.style.height = '70px';
                td.style.width = '70px';
                td.style.border = '1px solid gray';
                td.style.fontSize = '50px';
                if ((i + j) % 2 == 1) {
                    td.style.backgroundColor = '#664d1c';
                }
                else if ((i + j) % 2 == 0) {
                    td.style.backgroundColor = '#e0bf7e';
                }
                if (i == 2) {
                    td.innerHTML = '<span>' + (masChessmenBlack[j - 2]) + '</span>';
                }
                else if (i == 3) {
                    td.innerHTML = '<span>' + (masChessmenBlack[8]) + '</span>';
                }
                else if (i == 8) {
                    td.innerHTML = '<span>' + (masChessmenWhite[8]) + '</span>';
                }
                else if (i == 9) {
                    td.innerHTML = '<span>' + (masChessmenWhite[j - 2]) + '</span>';
                }
            }
            else {
                td.style.backgroundColor = '#fff27d';
                td.style.fontSize = '15px';
                td.style.color = '#8f8b82';
                td.style.fontWeight = 'bold';
                if (j == 1 && i != 1 && i != 10) {
                    td.innerHTML = '<span>' + (10 - i) + '</span>';
                    td.style.width = '30px';
                }
                else if (j == 10 && i != 1 && i != 10) {
                    td.innerHTML = '<span>' + (10 - i) + '</span>';
                    td.style.width = '30px';
                    td.style.transform = 'rotateZ(180deg)';
                }
                else if (i == 1 && j != 1 && j != 10) {
                    td.innerHTML = '<span>' + (masLetters[j - 2]) + '</span>';
                    td.style.height = '30px';
                    td.style.transform = 'rotateZ(180deg)';
                }
                else if (i == 10 && j != 1 && j != 10) {
                    td.innerHTML = '<span>' + (masLetters[j - 2]) + '</span>';
                    td.style.height = '30px';
                }
            }
            tr.append(td);
        }
    }
    body.append(table);
}

f();
