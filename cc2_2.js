'use strict';
const bills = [125, 555, 44]
function calcTip(billValue) {
    let tipPercent = (billValue >= 50 && billValue <=300) ? 0.15 : 0.20;
    let tip = billValue * tipPercent;
    return tip;
}

console.log(calcTip(100));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(tips);
console.log(totals);