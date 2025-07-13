"use strict";
// 07. Explore Type Aliases
var myName = 'Mahamudul';
var arr = ['Hasan'];
var players2 = ['Messi', 'Rolando', 345, true, 'Hello'];
var add = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var person = {
    name: 'John Smith',
    age: 34,
    email: 'john.smith@gmail.com',
    phone: ['543'],
    address: {
        presentAddress: 'Mexico',
        permanentAddress: 'Mexico City',
    },
    favorites: [
        {
            type: 'food',
            value: 'Egg',
        },
        {
            type: 'player',
            value: 'This is Haram',
        },
        {
            type: 'singer',
            value: 'Singing is Haram',
        },
        {
            type: 'person',
            value: 'John Doe',
        },
    ],
    isLoggedIn: true,
};
// Array.isArray(person.phone) &&
//   person.phone.map((value, index) => {
//     console.log(value);
//   });
if (Array.isArray(person.phone)) {
    person.phone.map(function (value, index) {
        // console.log(value);
    });
}
else {
    person.phone.length;
}
