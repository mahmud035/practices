'use strict';

//* ------JavaScript Function call()-------

/* const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Jane',
};

// This will return John Doe
console.log(person.fullName.call(person1));

// This will return Mary Jane
console.log(person.fullName.call(person2)); */

// The call() Method with Arguments

/* const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.fullName.call(person1, 'Oslo', 'Norway')); */

//* --------JavaScript Function apply()-------

/* const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const person1 = {
  firstName: 'Marry',
  lastName: 'Doe',
};

// This will return Mary Doe
console.log(person.fullName.apply(person1)); */

// The apply() Method with Arguments

/* const person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

console.log(person.fullName.apply(person1, ['Oslo', 'Norway'])); */

//* --------JavaScript Function bind()-------

/* const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen',
};

// The member object borrows the fullName method from the person object:
let fullName = person.fullName.bind(member);
console.log(fullName()); */
