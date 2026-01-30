
const calcAverage = (scores) => {
    const sum = scores.reduce((sum, score) => sum += score, 0)
    return sum / scores.length;
}
const teams = {
    data1: {
        dolphins: { scores: [44, 23, 71] },
        koalas: { scores: [65, 54, 49] },
    },
    data2: {
        dolphins: { scores: [85, 54, 41] },
        koalas: { scores: [23, 34, 27] },
    },
};

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins (${avgDolphins} vs ${avgKoalas})`);
    }
};

const getAvgFromScores = scores => calcAverage(scores);

let scoreDolphins = getAvgFromScores(teams.data1.dolphins.scores);
let scoreKoalas = getAvgFromScores(teams.data1.koalas.scores);
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = getAvgFromScores(teams.data2.dolphins.scores);
scoreKoalas = getAvgFromScores(teams.data2.koalas.scores);
checkWinner(scoreDolphins, scoreKoalas);
