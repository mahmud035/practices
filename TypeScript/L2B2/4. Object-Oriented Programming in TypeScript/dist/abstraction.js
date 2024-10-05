"use strict";
// interface
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(`I am starting engine`);
    }
    stopEngine() {
        console.log(`I am stopping engine`);
    }
    move() {
        console.log(`I am moving engine`);
    }
    test() {
        console.log(`I am for testing purpose`);
    }
}
const vehicle1 = new Vehicle('Car', 'Toyota', 2000);
//* Abstraction with "abstract class"
class Vehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
}
class Car extends Vehicle2 {
    startEngine() {
        console.log(`I am starting Engine`);
    }
    stopEngine() {
        console.log(`I am stopping engine`);
    }
}
