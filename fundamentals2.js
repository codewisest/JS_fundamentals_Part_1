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

// objects
const chiji = {
    firstName: 'Chijioke',
    lastName: 'Nwagwu',
    birthYear: 1987,
    job: 'Web Develooper',
    friends: ['Gloria', 'Marvelous', 'Uzor'],
    hasDriverLicense: true,
    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDriverLicense == true ? 'a' : 'no'} driver's license`
    }
}

console.log(chiji.friends);
console.log(chiji['friends']);

chiji.location = 'Canada';
console.log(chiji);

console.log(`${chiji.firstName} has ${chiji.friends.length} friends and the name of his best is ${chiji.friends[0]}`);
chiji.calcAge();
console.log(chiji.age);
console.log(chiji.getSummary());