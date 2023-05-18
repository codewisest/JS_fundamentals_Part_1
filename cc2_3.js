const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    calcBMI: function(mass, height) {
        this.BMI = mass / height ** 2;
        return this.BMI;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    calcBMI: function(mass, height) {
        this.BMI = mass / height ** 2;
        return this.BMI;
    }
}

const markBMI2 = mark.calcBMI(78, 1.69);
const johnBMI2 = john.calcBMI(92, 1.95);

const message = johnBMI2 > markBMI2 ? `${john.firstName}'s BMI ${john.BMI} is higher than ${mark.firstName}'s ${mark.BMI}`
                                    : `${mark.firstName}'s BMI ${mark.BMI} is higher than ${john.firstName}'s ${john.BMI}`;

console.log(message);