let user = {
    name: "John",
    surname: "Smith",
    name: "Pete",
};
delete user.name;
console.log(user.surname);
console.log(user.name);

let testobj = {};
function isEmpty(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property))
            return false;
    }
    return true;
}

console.log(isEmpty(testobj));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function Sum(obj) {
    let sum = 0;
    for (let property in obj) {
        sum += obj[property]
    }
    return sum;
}

console.log(Sum(salaries))


let objectExample = {
    width: 200,
    height: 300,
    title: 'example'
}

let multiplyNumeric = (object) => {
    for (let property in object) {
        if (typeof object[property] === 'number') {
            object[property] *= 2;
        }
    }
}
multiplyNumeric(objectExample);
console.log(objectExample);