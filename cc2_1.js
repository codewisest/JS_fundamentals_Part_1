const calcThreeAverage = (numberOne, numberTwo, numberThree) => (numberOne + numberTwo + numberThree) / 3;

const koalaAverage = calcThreeAverage(23, 34, 27);
const dolphinsAverage = calcThreeAverage(85, 54, 71);

const checkWinner = function(dolphinsAverage, koalaAverage) {
    if(dolphinsAverage > koalaAverage * 2) {
        return `Dolphins win (${dolphinsAverage} vs ${koalaAverage})`;
    } else if(koalaAverage . dolphinsAverage * 2) {
        return `Koalas win (${koalaAverage} vs ${dolphinsAverage})`;
    } else {
        return 'No winner yet!!!'
    }
}

console.log(checkWinner(dolphinsAverage, koalaAverage));
