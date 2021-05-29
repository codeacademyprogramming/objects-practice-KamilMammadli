function Person(firstname, lastname, birthdate, patronymicName) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.patronymicName = patronymicName;
    this.getFullname = function () {
        return this.firstname + " " + this.lastname;
    }
}

function Student(groupNumber, groupType) {
    this.groupNumber = groupNumber;
    this.groupType = groupType;
}

Student.prototype = new Person('Ali', 'Aghayev', '01-13-2000', 'Asgar');

const student = new Student('P220', 'Programming');
console.log(student.getFullname());


// const person1 = new Person('Ali', 'Aghayev', '01-13-2000', 'Asgar');
// const person2 = new Person('Nargiz', 'Nusratzada', '09-27-1996', 'Mazahir');

// console.log(person1);
// console.log(person2);
// console.log(person2.getFullname());
