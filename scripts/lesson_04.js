document.write('<h2>Lesson 4</h2>');

document.write('<p><b>1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.</b></p>');

var obj = {};
function f(number) {
    obj.units = number[2];
    obj.dozens = number[1];
    obj.hundreds = number[0];
    return (obj.hundreds + ' сотен; ' + obj.dozens + ' десятков; ' + obj.units + ' единиц.');
}

var number;
do {
    number = prompt('Введите трёхзначное число');
} while (number.length != 3);
alert(f(number));

document.write('<p>Введено число: ' + number + '.</p>');
document.write('<p>Результат: ' + f(number) + '</p>');


document.write('<p><b>2. Для игры Квест, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем).</b></p>');

var action, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    action = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (action == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, action);
    }
} while (!ok);
switch (action) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push([works.a00, works.a1, action]);
        do {
            ok = false;
            action = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (action == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, action);
            }
        } while (!ok);
        switch (action) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers.push([works.b00, works.b1, action]);
                do {
                    ok = false;
                    action = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (action == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, action);
                    }
                } while (!ok);
                if (action == 1) {
                    answers.push([works.d00, works.d1, action]);
                }
                else if (action == 2) {
                    answers.push([works.d00, works.d2, action]);
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers.push([works.b00, works.b2, action]);
                do {
                    ok = false;
                    action = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (action == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, action);
                    }
                } while (!ok);
                if (action == 1) {
                    answers.push([works.d00, works.d1, action]);
                }
                else if (action == 2) {
                    answers.push([works.d00, works.d2, action]);
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push([works.a00, works.a2, action]);
        do {
            ok = false;
            action = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (action == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, action);
            }
        } while (!ok);
        switch (action) {
            case 1: // Второе действие
                answers.push([works.c00, works.c1, action]);
                do {
                    ok = false;
                    action = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (action == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, action);
                    }
                } while (!ok);
                if (action == 1) {
                    answers.push([works.d00, works.d1, action]);
                }
                else if (action == 2) {
                    answers.push([works.d00, works.d2, action]);
                }
                break;
            case 2: // Второе действие
                answers.push([works.c00, works.c2, action]);
                do {
                    ok = false;
                    action = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (action == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, action);
                    }
                } while (!ok);
                if (action == 1) {
                    answers.push([works.d00, works.d1, action]);
                }
                else if (action == 2) {
                    answers.push([works.d00, works.d2, action]);
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

function info(discover) {
    return ('Информация по вопросу №' + discover + ':\nТекст вопроса:\n' + answers[discover - 1][0] + '\nВаш ответ №' + answers[discover - 1][2] + ':\n' + answers[discover - 1][1])
}

var discover;
do {
    discover = +prompt('Хотите узнать свой ответ по интересуемому вопросу (1, 2 или 3)?\nВведите номер вопроса или "-1" для выхода.');
    if (isNaN(discover) || !isFinite(discover)) {
        alert('Введено недопустимое значение!');
        continue;
    }
    else if (discover == -1) {
        break;
    }
    else if (discover < 1 || discover > 3) {
        alert('Введено недопустимое значение!');
        continue;
    }
    else {
        alert(info(discover));
        document.write('<p>' + info(discover) + '</p>');
    }
} while (1);
alert('Конец!');

//------------------------------------------
function isAnswer(q, action) {
    if (isNaN(action) || !isFinite(action)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (action < 1 || action > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}


document.write('<p><b>3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»</b></p>');

alert('Игра "Кто хочет стать миллионером"');

function gameRun(answer) {
    if (answer == -1) {
        return false;
    }
    return true;
}

function correctValidation(answer) {
    if (answer == 'a' || answer == 'b' || answer == 'c' || answer == 'd') {
        return true;
    }
    return false;
}

function correctAnswer(answer, number) {
    if (answer == qustions[number - 1].correct) {
        return true;
    }
    return false;
}

var ok;
var number = 1;
var sum = 0;
var reward = [100, 200, 300];
var myStop = false;
var vin = false;
do {
    answer = prompt('Вопрос №' + number + ':\n' + qustions[number - 1].q00 + '\nВыберите правильный ответ (a, b, c или d):\n' + qustions[number - 1].a1 + '\n' + qustions[number - 1].a2 + '\n' + qustions[number - 1].a3 + '\n' + qustions[number - 1].a4 + '\n\nИли введите "-1" для выхода из игры.');
    
    keepPlaying = gameRun(answer);
    okValidation = correctValidation(answer);
    okCorrect = correctAnswer(answer, number);

    if (!keepPlaying) {
        myStop = true;
        break;
    }
    else if (!okValidation) {
        alert('Введено недопустимое значение!');
        continue;
    }
    else if (!okCorrect) {
        break
    }
    else {
        sum += reward[number - 1];
        if (number == qustions.length) {
            vin = true;
        }
        else {
            alert('Это правильный ответ!\n\nВаш выигрыш: ' + sum + ' рублей.\n\nВнимание:\nПри неправильном ответе весь выигрыш сгорает!');
        }
    }
    
    number++;
} while (number <= qustions.length);

function gameVin(vin, myStop, number) {
    if (vin) {
        return ('Поздравляем!\nВы выиграли игру!!!\n\nВаш выигрыш составил: ' + sum + ' рублей.')
    }
    else if (myStop) {
        return ('Игра прервана на вопросе №' + number + '!');
    }
    else {
        return ('Ответ неверный!\nПравильный ответ: "' + qustions[number - 1].correct + '".\n\nВаш выигрыш: 0 рублей.\n\nВсего правильных ответов: ' + (number - 1) + '.');
    }
}

alert(gameVin(vin, myStop, number));
document.write('<p>' + gameVin(vin, myStop, number) + '</p>')
