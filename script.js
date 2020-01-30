'use strict';

let min = 1,
    max = 100;
function randomAmount() {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
randomAmount(min, max);

let userAmount = [+prompt('Угадай число от 1 до 100')];
console.log(typeof(userAmount));

function checker () {
    if (typeof(userAmount) === isNaN || typeof(userAmount) === 'string') {
        userAmount = +prompt('Введи число!');
        // здесь надо рекурсия на введите число
        // это ещё одно повторение
        // if (typeof(userAmount) !== 'number' || typeof(userAmount) === isNaN || typeof(userAmount) === 'string') {
        //     userAmount = prompt('Введи число!');
        // }
    } else if (typeof(userAmount) === null) {
        return false;
    } else {
        if (userAmount > randomAmount()) {
            alert('Загаданное число больше');
            // здесь надо рекурсия чтобы игра продолжалась пока не отменят
            userAmount = +prompt('Угадай число от 1 до 100');
        } else if (userAmount < randomAmount()) {
            alert('Загаданное число меньше');
            // здесь надо рекурсия чтобы игра продолжалась пока не отменят
            userAmount = +prompt('Угадай число от 1 до 100');
        }
    }
    console.log(typeof(userAmount));
    console.log(typeof(randomAmount()));
    console.log(randomAmount());
}
checker();
