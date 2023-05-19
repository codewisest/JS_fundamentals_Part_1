const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

const calcTip2 = billValue => {
    let tipPercent = (billValue >= 50 && billValue <=300) ? 0.15 : 0.20;
    let tip = billValue * tipPercent;
    return tip;
}

for (let i = 0; i < billValues.length; i++) {
    const tip = calcTip2(billValues[i]);
    tips2.push(tip);
    totals2.push(billValues[i] + tip);
}

console.log(tips2, totals2);


const myArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let sum = 0;

function calcAverage(anyArray) {
    sum += anyArray;
}

for(let i = 0; i < myArray.length; i++) {
    calcAverage(myArray[i]);
}

console.log(sum/myArray.length);