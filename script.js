'use strict';
function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

const game = function() {
    const randomNum =  Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);

    return function question() {
        let userAmount = prompt('Угадай число от 1 до 100');

        if (isNum(userAmount)) {
            userAmount = +userAmount;
            
            if (userAmount < 101 && userAmount > randomNum) {
                alert('Загаданное число меньше');
                question();
            } else if (userAmount < 101 && userAmount < randomNum) {
                alert('Загаданное число больше');
                question();
            } else if (userAmount === randomNum) {
                alert("Поздравляю, вы угадали цифру! Перезагрузите страницу для новой игры!");
            } else {
                alert("Вы ввели число больше 100!");
                question();
            }
        } else if(userAmount === null) {
            alert('Вы прервали игру! Перезагрузите страницу для новой игры!');
        } else {
            alert('Введите число!');
            question();
        }
    };
};

let playGame = game();
playGame();