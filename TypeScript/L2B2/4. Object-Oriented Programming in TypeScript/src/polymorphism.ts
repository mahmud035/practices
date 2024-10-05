//  Ex: 1

//* Parent Class
class Person2 {
  takeNap(): void {
    console.log(`I am sleeping 8 hours per day`);
  }
}

//* Child Class
class Student2 extends Person2 {
  // modify parent class method
  takeNap(): void {
    console.log(`I am sleeping 10 hours per day`);
  }
}

//* Child Class
class Developer extends Person2 {
  // modify parent class method
  takeNap(): void {
    console.log(`I am sleeping 5 hours per day`);
  }
}

function getNap(param: Person2) {
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
  getArea(): number {
    return 0;
  }
}

//* Child Class
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  // modify parent class method
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

//* Child Class
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  // modify parent class method
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

const circle1 = new Circle(10);
const rectangle1 = new Rectangle(10, 20);

getAreaOfShape(circle1);
getAreaOfShape(rectangle1);
