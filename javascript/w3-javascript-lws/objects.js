'use strict';

//* -------JavaScript Object Properties--------

const myObj = {
  name: 'John',
  age: 30,
  cars: [
    { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', models: ['320', 'X3', 'X5'] },
    { name: 'Fiat', models: ['500', 'Panda'] },
  ],
};

console.log(myObj?.cars[0]?.models[0]);

// To access arrays inside arrays, use a for-in loop for each array:
let x = '';
for (let i in myObj.cars) {
  x += '<h1>' + myObj.cars[i].name + '</h1>';
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}
