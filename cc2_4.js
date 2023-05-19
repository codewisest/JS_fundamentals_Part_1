const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

const calcTip2 = function(billValue) {
    let tipPercent = (billValue >= 50 && billValue <=300) ? 0.15 : 0.20;
    let tip = billValue * tipPercent;
    return tip;
}

for (let i = 0; i < billValues.length; i++) {
    let tip = calcTip2(billValues[i]);
    tips2.push(tip);
    totals2.push(billValues[i] + tip);
}

console.log(tips2, totals2);