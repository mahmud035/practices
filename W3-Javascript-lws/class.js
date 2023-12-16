'use strict';

//* -----JavaScript Classes-------

/* class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car('Ford', 2014);

document.getElementById('demo').innerHTML =
  'My car is ' + myCar.age() + ' years old.'; */

//* -----JavaScript Class Inheritance-----

// Create a class named "Model" which will inherit the methods from the "Car" class:

/* class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model('Ford', 'Mustang');
document.getElementById('demo').innerHTML = myCar.show(); */
