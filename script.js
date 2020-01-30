'use strict';

let money,
    deposit = confirm('У Вас есть депозит в банке?'),
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    mission = 100000,
    period = 12,
    amount = 0,
    expenses = [];

let start = function() {
    do { money = prompt('Ваш месячный доход?', '');
    } while (isNaN(money) || money === '' || money === null);
};
start();

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getExpensesMonth = function() { 
    for (let i = 0; i < 2; i++ ) {
        expenses[i] = prompt('Введите обязательную статью расходов?', '');

        let count;
        do {
            count = prompt('Во сколько это обойдётся?', '');
        } while (!isNumber(count));

        amount += +count;
    }
    console.log('Обзятельные статьи расходов в месяц: ' + expenses);
    return amount;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() { return +money - expensesAmount; };

let accumulatedMonth = getAccumulatedMonth(),
budgetDay = +accumulatedMonth/30;

let getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth); 
};

if(getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');
}

console.log('Возможные расходы за ' + period + ' месяцев: ' + addExpenses.split(', '));
console.log('Ваш дневной бюджет: ' + Math.floor(budgetDay));

function getStatusIncome() {
    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay >= 1) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0) {
        console.log('Что то пошло не так!');
    }
}
getStatusIncome();

let showTypeOf = function() {
    console.log('Тип переменной money : ' + typeof(+money));
    console.log('Тип переменной deposit : ' + typeof(deposit));
    console.log('Тип переменной income : ' + typeof(income));
    console.log('Тип переменной budgetDay : ' + typeof(budgetDay));
    console.log('Тип переменной addExpenses : ' + typeof(addExpenses));
};
showTypeOf();