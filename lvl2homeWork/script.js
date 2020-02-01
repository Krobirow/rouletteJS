'use strict';
function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

const game = function() {
    const randomNum =  Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);

    return function question(count) {

        function closingFunc() {
            if(count > 1) {
                count--;
                question(count);
            } else if (count <= 1) {
                return;
            }
        }

        let userAmount = prompt('Попробуй угадать число от 1 до 100 в рулетке! Количество попыток ограничено в: ' + count);

        if (isNum(userAmount)) {
            userAmount = +userAmount;

            if (userAmount < 101 && userAmount > randomNum) {
                alert('Загаданное число меньше, осталось попыток: ' + count);

            } else if (userAmount < 101 && userAmount < randomNum) {
                alert('Загаданное число больше, осталось попыток: ' + count);

            } else if (userAmount === randomNum) {
                alert("Поздравляю, вы угадали цифру! Перезагрузите страницу для новой игры!");
            } else {
                alert('Вы ввели число больше 100! Oсталось попыток: ' + count);
                
            }
        } else if(userAmount === null) {
            alert('Вы прервали игру! Перезагрузите страницу для новой игры!');
        } else {
            alert('Введите число!');
            question();
        }
        closingFunc();
    };
};

let playGame = game();
playGame(10);