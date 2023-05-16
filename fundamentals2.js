'use strict';

function logger() {
    console.log('My name is Wisest');
}

logger();
logger();
logger();

function fruitSliceFour(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    apple = fruitSliceFour(apple);
    orange = fruitSliceFour(orange);

    const juice = `Juice with ${apple} pieces of apples and ${orange} pieces of oranges`;

    return juice;
}

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice);

// function expression
const calcAge = function(birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge(1987));

const arrowCalcAge = birthYear => 2023 - birthYear;

console.log(arrowCalcAge(1989));

const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirementAge = 65;
    const yearsLeft = retirementAge - age;

    return `You have ${yearsLeft} years left before you retire`;
}

console.log(yearsUntilRetirement(1987));