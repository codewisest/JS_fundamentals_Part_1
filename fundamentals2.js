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
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

console.log(calcAge(1987));

const arrowCalcAge = birthYear => 2023 - birthYear;

console.log(arrowCalcAge(1989));

const yearsUntilRetirement = birthYear => {
  const age = arrowCalcAge(birthYear);
  const retirementAge = 65;
  const yearsLeft = retirementAge - age;

  if (yearsLeft > 0) {
    return `You have ${yearsLeft} years left before you retire`;
  } else if (yearsLeft < 0) {
    return `You have already retired ${Math.abs(yearsLeft)} years ago`;
  }
};

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
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${
      this.hasDriverLicense == true ? 'a' : 'no'
    } driver's license`;
  },
};

console.log(chiji.friends);
console.log(chiji['friends']);

chiji.location = 'Canada';
console.log(chiji);

console.log(
  `${chiji.firstName} has ${chiji.friends.length} friends and the name of his best is ${chiji.friends[0]}`
);
chiji.calcAge();
console.log(chiji.age);
console.log(chiji.getSummary());

// Loops
const chijiArray = [
  'Chiji',
  'Nwagwu',
  2023 - 1987,
  'Web Developer',
  ['Gloria', 'Peter', 'Uzor'],
];

const types = [];

for (let i = 0; i < chijiArray.length; i++) {
  console.log(chijiArray[i], typeof chijiArray[i]);

  types.push(typeof chijiArray[i]);
}

console.log(types);

const birthYears = [1987, 1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2023 - birthYears[i]);
}

console.log(ages);

for (let i = 0; i < chijiArray.length; i++) {
  if (typeof chijiArray[i] !== 'string') continue;
  console.log(chijiArray[i], typeof chijiArray[i]);

  // types.push(typeof chijiArray[i]);
}

for (let i = 0; i < chijiArray.length; i++) {
  if (typeof chijiArray[i] === 'number') break;
  console.log(chijiArray[i], typeof chijiArray[i]);

  // types.push(typeof chijiArray[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-------Starting excercise ${excercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
console.log();

const temperatures = [3, -2, -8, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const getMaxNumber = function (anyArray) {
  let maxNumber = anyArray[0];
  for (let i = 0; i < anyArray.length; i++) {
    if (typeof anyArray[i] !== 'number') continue;
    if (maxNumber < anyArray[i]) {
      maxNumber = anyArray[i];
    }
  }
  console.log(maxNumber);
  return maxNumber;
};

const getMinNumber = function (anyArray) {
  let minNumber = anyArray[0];
  for (let i = 0; i < anyArray.length; i++) {
    if (typeof anyArray[i] !== 'number') continue;
    if (minNumber > anyArray[i]) {
      minNumber = anyArray[i];
    }
  }
  console.log(minNumber);
  return minNumber;
};

const calcAmplitude = function (temperatures) {
  const max = getMaxNumber(temperatures);
  const min = getMinNumber(temperatures);

  const amp = max - min;
  return amp;
};

const amplitude = calcAmplitude(temperatures);

console.log(amplitude);
