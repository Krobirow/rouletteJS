'use strict';
let randomAmount = function(min, max) {
    min = 1;
    max = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

let num = randomAmount();
let userAmount =  +prompt('Угадай число от 1 до 100');

let firstQuestion = function() {

    if ( Number.isNaN(userAmount) === true) {
        userAmount = +prompt('Введи число!');
    
    } else if(userAmount === 0 || userAmount === null) {
        alert('Игра прервана! Перезагрузите страницу для новой игры!');
        return;

    } else if (Number.isNaN(userAmount) === false) {
        if (userAmount > num) {
            alert('Загаданное число больше');
            userAmount =  +prompt('Угадай число от 1 до 100');

        } else if ( userAmount < num) {
            alert('Загаданное число меньше');
            userAmount =  +prompt('Угадай число от 1 до 100');

        } else if (userAmount === num) {
            alert("Поздравляю, вы угадали цифру! Перезагрузите страницу для новой игры!");
            return;
        }
    } else {
        console.log('Что-то пошло не так!');
    }
    return firstQuestion();
};



let closeFunc = function() {
    // Вывожу цифру после первой попытки для тестов и вида что она не меняется.
    console.log(num);

    firstQuestion();
}();
