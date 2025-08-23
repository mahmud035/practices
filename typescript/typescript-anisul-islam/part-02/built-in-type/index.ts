// built in data type: number, string, boolean, void, null, undefined

let id;

let userId: number = 101;
let firstName: string = 'anisul ';
let lastName: string = 'islam';
let isActivated: boolean = true;

console.log(userId, firstName, lastName, isActivated);

// concat()
let fullName = firstName.concat(lastName);
console.log(fullName);

// split([separator[space]])
console.log(fullName.split(' '));

// toUpperCase()
console.log(firstName.toUpperCase());

// toLowerCase()
console.log(firstName.toLowerCase());

// console.log(userId.toLowerCase()); // error here

const display = (): void => {
  console.log('Hi I am display ');
};

display();
