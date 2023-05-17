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

    const juice = `Juice with ${apple} pieces of apple and ${orange} pieces of orange`;

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
    const age = arrowCalcAge(birthYear);
    const retirementAge = 65;
    const yearsLeft = retirementAge - age;

    if(yearsLeft > 0) {
        return `You have ${yearsLeft} years left before you retire`;
    } else if(yearsLeft < 0){
        return `You have already retired ${Math.abs(yearsLeft)} years ago`;
    }
}

console.log(yearsUntilRetirement(1987));
console.log(yearsUntilRetirement(1950));

const years = [1990, 2000, 1993, 1987];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const ageLast = calcAge(years[years.length - 1]);

console.log(age1, age2, ageLast);