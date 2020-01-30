'use strict';

let min = 1,
    max = 100;
function randomAmount() {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
randomAmount(min, max);

console.log(randomAmount());

let userAmount =  parseInt(prompt('Угадай число от 1 до 100'), 10);
console.log(typeof(userAmount));

const firstQuestion = function() {
    console.log(typeof(userAmount));
    console.log(randomAmount());

    if (typeof(userAmount) === isNaN || typeof(userAmount) === 'string') {
        userAmount = parseInt(prompt('Введи число!'), 10);
    } else if (typeof(userAmount) === 'number') {
        if (userAmount > randomAmount()) {
            alert('Загаданное число больше');
            userAmount = +prompt('Угадай число от 1 до 100');
        } else if (userAmount < randomAmount()) {
            alert('Загаданное число меньше');
            userAmount = +prompt('Угадай число от 1 до 100');
        } else if (userAmount === randomAmount()) {
            alert("Поздравляю, вы угадали цифру");
        } 
    }
    return firstQuestion();
};
firstQuestion();