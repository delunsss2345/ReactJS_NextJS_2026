'use strict';

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const data4 = {
    bills: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
    tips: [],
    totals: [],
};

for (let i = 0; i < data4.bills.length; i++) {
    const bill = data4.bills[i];
    const tip = calcTip(bill);
    const total = bill + tip;

    data4.tips.push(tip);
    data4.totals.push(total);
}
const utilsReplaceAll = (data) => String(data).replaceAll(',', ", ");
console.log('Bills:', utilsReplaceAll(data4.bills));
console.log('Tips:', utilsReplaceAll(data4.tips));
console.log('Totals:', utilsReplaceAll(data4.totals));

const calcAverageArr = arr => {
    let sum = arr.reduce((sum, a) => sum + a, 0);

    return sum / arr.length;
};

console.log('Trung bình cộng:', calcAverageArr(data4.totals));
