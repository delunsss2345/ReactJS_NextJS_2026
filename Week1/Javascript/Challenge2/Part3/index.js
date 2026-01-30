// e có đọc đề nhưng làm theo class sẳn ôn lại tí 
class People {
    constructor(fullName, weight, height) {
        this._fullName = fullName;
        this.weight = weight;
        this.height = height;
    }

    calcBMI() {
        this.bmi = this.weight / (this.height ** 2);
    }

    get fullName() {
        return this._fullName;
    }
}

const people = {
    mark: new People('Mark Miller', 78, 1.69),
    john: new People('John Smith', 92, 1.95),
};

people.mark.calcBMI();
people.john.calcBMI();

if (people.john.bmi > people.mark.bmi) {
    console.log(
        `${people.john.fullName} có BMI (${people.john.bmi.toFixed(1)}) cao hơn ${people.mark.fullName} (${people.mark.bmi.toFixed(1)})!`
    );
} else if (people.mark.bmi > people.john.bmi) {
    console.log(
        `${people.mark.fullName} có BMI (${people.mark.bmi.toFixed(1)}) cao hơn ${people.john.fullName} (${people.john.bmi.toFixed(1)})!`
    );
} else {
    console.log(
        `${people.mark.fullName} và ${people.john.fullName} BMI bằng nhau (${people.mark.bmi.toFixed(1)})!`
    );
}
