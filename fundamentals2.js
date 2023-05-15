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