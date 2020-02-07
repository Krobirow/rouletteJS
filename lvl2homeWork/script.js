'use strict';

// !!  укажите здесь сколько попыток у посетителя  !!
const quantityOfRepeats = 4;
// !!  укажите здесь сколько попыток у посетителя !!

const game = function() {
    function isNum(number) {
        return (!isNaN(parseFloat(number)) && isFinite(number));
    }

    function getRandome() {
        return Math.floor(Math.random() * 100) + 1;
    }

    let randomNum = getRandome();
    console.log('Цифра которую загадала рулетка: ' +(randomNum));

    return function question(count) {
        function tryingCounter() {
            if(count > 1) {
                count--;
                question(count);
            } else if (count === 1) {
                if (confirm("У вас закончились попытки! Хотели бы сыграть ещё ?!")) {
                    randomNum = getRandome();
                    console.log('После перезапуска цифра уже: ' + randomNum);
                    return question(quantityOfRepeats);
                } else {
                    return;
                }
            }
        }
        let userAmount = prompt('Попробуй угадать число от 1 до 100 в рулетке! Количество попыток ограничено в: ' + count);

        if (isNum(userAmount)) {
            userAmount = +userAmount;

            if (userAmount <= 100 && userAmount > randomNum ) {
                if (count === 1) {
                    alert('Загаданное число рулетки меньше, и у Вас не осталось попыток');
                    return tryingCounter();
                }
                alert('Загаданное число рулетки меньше, осталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (userAmount <= 100 && userAmount < randomNum ) {
                if (count === 1) {
                    alert('Загаданное число рулетки больше, и у Вас не осталось попыток');
                    return tryingCounter();
                }
                alert('Загаданное число рулетки больше, осталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (userAmount > 100 || userAmount < 0) {
                alert('Вы ввели число больше 100! Oсталось попыток: ' + (count - 1));
                tryingCounter();
            } else if (userAmount === randomNum ){
                if (confirm("Поздравляю, вы угадали цифру! Хотели бы сыграть ещё ?!")) {
                    randomNum = getRandome();
                    console.log('после перезапуска цифра уже: ' + randomNum);
                    return question(quantityOfRepeats);
                } else  {
                    return;
                }
            } else {
                if (count === 1) {
                    alert('Вы не угадали число, игра окончена!');
                    return;
                }
                alert('Введите число! ' + ' Oсталось попыток: ' + (count - 1));
                tryingCounter();
            }
        } else if(userAmount === null) {
            alert('Вы прервали игру! Перезагрузите страницу для новой игры!');
            return;
        } else {
            if (count === 1) {
                alert('Вы ввели не число, и у Вас не осталось попыток');
                return tryingCounter();
            }
            alert('Введите число! ' + ' Oсталось попыток: ' + (count - 1));
            tryingCounter();
        }
    };
};

let playGame = game();
playGame(quantityOfRepeats);