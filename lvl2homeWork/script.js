'use strict';
function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

const quantityOfRepeats = 4;

const game = function() {

    return function question(count) {
        const randomNum =  Math.floor(Math.random() * 100) + 1;

        
        function tryingCounter() {
            if(count > 1) {
                count--;
                question(count);
            } else if (count === 1) {
                alert('Вы не угадали число, игра окончена!');
                return;
            }
        }
        let userAmount = prompt('Попробуй угадать число от 1 до 100 в рулетке! Количество попыток ограничено в: ' + count);

        if (isNum(userAmount)) {
            userAmount = +userAmount;

            if (userAmount <= 100 && userAmount > randomNum ) {
                alert('Загаданное число рулетки меньше, осталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (userAmount <= 100 && userAmount < randomNum ) {
                alert('Загаданное число рулетки больше, осталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (userAmount > 100 || userAmount < 0) {
                alert('Вы ввели число больше 100! Oсталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (count === 0) {
                alert('Вы не угадали число, игра окончена!');
                return false;
                
            } else {
                let repeat = confirm("Поздравляю, вы угадали цифру! Хотели бы сыграть ещё ?!");
                if (repeat === true) {
                    question(quantityOfRepeats);
                } else if (repeat === false) {
                    return;
                }
            } 
        } else if(userAmount === null) {
            alert('Вы прервали игру! Перезагрузите страницу для новой игры!');
            return;
        } else {
            alert('Введите число! ' + ' Oсталось попыток: ' + (count - 1));
            tryingCounter();
        }
    };
};

let playGame = game();
playGame(quantityOfRepeats);