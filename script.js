'use strict';

let userAmount =  +prompt('Угадай число от 1 до 100');
        
let headFunction = function() {
    
    let randomAmount = function(min, max) {
        min = 1;
        max = 100;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    let num = randomAmount();

    let question = function() {

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
        }
        return question();
    };
    console.log(num);
    return question();
};

let closeFunc = function() {
    headFunction();
}();