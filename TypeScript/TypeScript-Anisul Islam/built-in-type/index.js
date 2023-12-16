// built in data type: number, string, boolean, void, null, undefined
var id;
var userId = 101;
var firstName = 'anisul ';
var lastName = 'islam';
var isActivated = true;
console.log(userId, firstName, lastName, isActivated);
// concat()
var fullName = firstName.concat(lastName);
console.log(fullName);
// split([separator[space]])
console.log(fullName.split(' '));
// toUpperCase()
console.log(firstName.toUpperCase());
// toLowerCase()
console.log(firstName.toLowerCase());
// console.log(userId.toLowerCase()); // error here
var display = function () {
    console.log('Hi I am display ');
};
display();
