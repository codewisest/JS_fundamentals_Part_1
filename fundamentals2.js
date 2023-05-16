'use strict';

function logger() {
    console.log('My name is Wisest');
}

logger();
logger();
logger();

function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges`;

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