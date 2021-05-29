const user = {
    firstname: 'Patrick',
    lastname: 'Rothfuss',
    birthdate: '11-22-63'
};

const extraDetails = {
    patronymicName: 'Roth',
    books: [
        {
            name: 'The name of the wind',
            pageCount: 700
        },
        {
            name: `The wise man's fear`,
            pageCount: 1300
        }
    ]
}

/*
COPYING OBJECTS
    const fullUser = Object.assign(extraDetails, user);
    console.log(fullUser);
    console.log(user);
    console.log(extraDetails);

    const user2 = Object.assign({}, user);
    user2.firstname = 'Agil';
    console.log(user2);
    console.log(user);

    // Spread operator
    const newUser = { ...user, books: [], birthdate: '' };
    newUser.firstname = 'Gazanfar';

    // JSON methods
    // const data = { page: 5, count: 10 };

    // const copyOfData = JSON.parse(JSON.stringify(data));
    // copyOfData.page = 100;
    // console.log(copyOfData);
    // console.log(data);
*/


// const data = { page: 5, count: 10 };
// const data2 = { page: 5, count: 10 };

// Comparing to objects with JSON methods
// const stringifiedData = JSON.stringify(data);
// const stringifiedData2 = JSON.stringify(data2);
// console.log(stringifiedData);
// console.log(stringifiedData2);

// console.log(stringifiedData === stringifiedData2);


// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)[2][1]); [["firstname", "Patrick"], ["lastname", "Rothfuss"], ["birthdate", "11-22-63"]];
// Object.defineProperty(user, 'patronymic', { value: 'Roth', writable: false });

// user.patronymic = 'Koroghlu';
// console.log(user);
