
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const data2 = {
    bills: [125, 555, 44],
};


data2.tips = [calcTip(data2.bills[0]), calcTip(data2.bills[1]), calcTip(data2.bills[2])];
data2.totals = [
    data2.bills[0] + data2.tips[0],
    data2.bills[1] + data2.tips[1],
    data2.bills[2] + data2.tips[2],
];

console.log('Bills:', data2.bills);
console.log('Tips:', data2.tips);
console.log('Totals:', data2.totals);
