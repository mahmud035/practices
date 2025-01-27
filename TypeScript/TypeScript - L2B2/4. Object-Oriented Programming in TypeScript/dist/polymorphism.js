"use strict";
//  Ex: 1
//* Parent Class
class Person2 {
    takeNap() {
        console.log(`I am sleeping 8 hours per day`);
    }
}
//* Child Class
class Student2 extends Person2 {
    // modify parent class method
    takeNap() {
        console.log(`I am sleeping 10 hours per day`);
    }
}
//* Child Class
class Developer extends Person2 {
    // modify parent class method
    takeNap() {
        console.log(`I am sleeping 5 hours per day`);
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person2();
const person2 = new Student2();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
// Ex: 2
//* Parent Class
class Shape {
    getArea() {
        return 0;
    }
}
//* Child Class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // modify parent class method
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
//* Child Class
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    // modify parent class method
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
const circle1 = new Circle(10);
const rectangle1 = new Rectangle(10, 20);
getAreaOfShape(circle1);
getAreaOfShape(rectangle1);
