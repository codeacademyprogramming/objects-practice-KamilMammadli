class Person {
    constructor(firstname, lastname, birthdate) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }

    getFullname() {
        return this.firstname + " " + this.lastname;
    }

    getAge() {
        const dateObj = new Date(this.birthdate)
        const currentDateObj = new Date(Date.now());
        return currentDateObj.getFullYear() - dateObj.getFullYear();
    }
}

class Student extends Person {
    constructor(firstname, lastname, birthdate, groupType, groupNumber) {
        super(firstname, lastname, birthdate);
        this.groupType = groupType;
        this.groupNumber = groupNumber;
    }

    getGroupName() {
        return `${this.groupType}${this.groupNumber}`
    }
}

const person = new Person('Agil', 'Ata', '01-26-1999');
const student = new Student('Agil', 'Ata', '01-26-1990', 'P', '220');
// console.log(student.getGroupName());
// console.log(student.getAge());
// console.log(person.getAge());

class CustomMath {
    constructor(number) {
        this.number = number;
    }

    plus(value) {
        this.number = this.number + value;
        return this;
    }

    minus(value) {
        this.number = this.number - value;
        return this;
    }

    multiply(value) {
        this.number = this.number * value;
        return this;
    }

    divide(value) {
        this.number = this.number / value;
        return this;
    }

    toString() {
        return this.number;
    }

    static displayClassName() {
        return 'CustomMath';
    }
};

console.log(CustomMath.displayClassName());

const instance = new CustomMath(10).plus(50).minus(30).divide(2).multiply(5);
instance.displayClassName();
// console.log(instance.toString());
alert(instance);
