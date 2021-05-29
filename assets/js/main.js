const WEEKDAYS = {
    MONDAY: 'MONDAY',
    TUESDAY: 'TUESDAY'
}

const user = {
    firstname: 'Samir',
    lastname: 'Atakishiyev',
    birthdate: '11-22-63',
    patronymicName: 'Elkhan',
    getFullName: function () {
        // Template literals
        return `${this.firstname} ${this.lastname}`
        // return this.firstname + " " + this.lastname;
    },
    greetUser: function () {
        return `Hello ${this.firstname}`
    }
} // typeof object 'object';

user.firstname = 'Agil'
user.profession = 'Frontend developer';

const firstname = 'Ali';
const OBJECT_KEY = 'birthdate';

const object = {
    firstname,
    [OBJECT_KEY]: '11-22-63'
}

console.log(object);

console.log(user.getFullName());
console.log(user.greetUser());
