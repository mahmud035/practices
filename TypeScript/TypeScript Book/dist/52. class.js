"use strict";
{
    // Class
    {
        //* Class Common Syntax
        // The `class` keyword is used in TypeScript to define a class. Below, you can see an example:
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            sayHi() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
        }
        // Create an instance of the class
        const myObject = new Person('John Doe', 36);
        myObject.sayHi(); // Output: Hello, my name is John Doe and I am 25 years old.
    }
    {
        //* Constructor
        // Constructors are special methods within a class that are used to initialize the object’s properties when an instance of the class is created.
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            sayHello() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
        }
        // Create an instance of the class
        const john = new Person('John Doe', 38);
        john.sayHello();
    }
    {
        //* Get & Set
        // Getters and setters are special methods that allow you to define custom access and modification behavior for class properties. They enable you to encapsulate the internal state of an object and provide additional logic when getting or setting the values of properties. In TypeScript, getters and setters are defined using the `get` and `set` keywords respectively. Here’s an example:
        class MyClass {
            constructor(myProperty) {
                this.myProperty = myProperty;
            }
            get getMyProperty() {
                return this.myProperty;
            }
            set setMyProperty(value) {
                this.myProperty = value;
            }
        }
        const myObject = new MyClass('my property');
        console.log(myObject.getMyProperty);
        myObject.setMyProperty = 'my NEW property';
        console.log(myObject.getMyProperty);
    }
    {
        //* this
        // In TypeScript, the `this` keyword refers to the current instance of a class within its methods or constructors. It allows you to access and modify the properties and methods of the class from within its own scope. It provides a way to access and manipulate the internal state of an object within its own methods.
        class Person {
            constructor(name) {
                this.name = name;
            }
            introduce() {
                console.log(`Hello, my name is ${this.name}.`);
            }
        }
        // Create an instance of the class
        const person = new Person('Alice');
        person.introduce(); // Hello, my name is Alice.
    }
    {
        //* Parameter Properties
        // Parameter properties allow you to declare and initialize class properties directly within the constructor parameters avoiding boilerplate code, example:
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
                // The "private" and "public" keywords in the constructor
                // automatically declare and initialize the corresponding class properties.
            }
            introduce() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
        }
        // Create an instance of the class
        const person = new Person('Alice', 25);
        person.introduce();
    }
    {
        //* Abstract Classes
        // Abstract Classes are used in TypeScript mainly for inheritance, they provide a way to define common properties and methods that can be inherited by subclasses. This is useful when you want to define common behavior and enforce that subclasses implement certain methods. They provide a way to create a hierarchy of classes where the abstract base class provides a shared interface and common functionality for the subclasses.
        class Animal {
            constructor(name) {
                this.name = name;
            }
        }
        class Cat extends Animal {
            makeSound() {
                console.log(`${this.name} meows.`);
            }
        }
        // Create an instance of the class
        const cat = new Cat('Whiskers');
        cat.makeSound(); // Output: Whiskers meows.
    }
    {
        //* With Generics
        // Classes with generics allow you to define reusable classes which can work with different types.
        class Container {
            constructor(item) {
                this.item = item;
            }
            getItem() {
                return this.item;
            }
            setItem(item) {
                this.item = item;
            }
        }
        // Create instances of the class
        const container1 = new Container(42);
        console.log(container1.getItem()); // 42
        const container2 = new Container('Hello');
        container2.setItem('World');
        console.log(container2.getItem()); // World
    }
    {
        //*  Inheritance
        // Inheritance refers to the mechanism by which a class can inherit properties and methods from another class, known as the base class or superclass. The derived class, also called the child class or subclass, can extend and specialize the functionality of the base class by adding new properties and methods or overriding existing ones.
        // Parent Class / Base Class
        class Animal {
            constructor(name) {
                this.name = name;
            }
            speak() {
                console.log('The animal makes a sound');
            }
        }
        // Child Class / Derived Class
        class Dog extends Animal {
            constructor(name, breed) {
                super(name);
                this.breed = breed;
            }
            speak() {
                console.log('Woof! Woof!');
            }
        }
        // Create an instance of the base class
        const animal = new Animal('Generic Animal');
        animal.speak(); // The animal makes a sound
        // Create an instance of the derived class
        const dog = new Dog('Max', 'Labrador');
        dog.speak(); // Woof! Woof!"
        class FlyingFish {
            fly() {
                console.log('Flying...');
            }
            swim() {
                console.log('Swimming...');
            }
        }
        const flyingFish = new FlyingFish();
        flyingFish.fly();
        flyingFish.swim();
    }
    {
        //* Statics
        // TypeScript has `static` members. To access the static members of a class, you can use the class name followed by a dot, without the need to create an object.
        class OfficeWorker {
            constructor() {
                OfficeWorker.memberCount++;
            }
        }
        OfficeWorker.memberCount = 0;
        const w1 = new OfficeWorker();
        const w2 = new OfficeWorker();
        const total = OfficeWorker.memberCount;
        console.log(total); // 2
        console.log(w1, w2);
    }
    {
        //* Property initialization
        // There are several ways how you can initialize properties for a class in TypeScript:
        // 1. Inline:
        // In the following example these initial values will be used when an instance of the class is created.
        class MyClass {
            constructor() {
                this.property1 = 'default value';
                this.property2 = 0;
            }
        }
        // 2. In the constructor:
        class MyClass2 {
            constructor() {
                this.property1 = 'default value';
                this.property2 = 0;
            }
        }
        // 3. Using constructor parameter properties:
        class MyClass3 {
            constructor(property1 = 'default value', property2 = 0) {
                this.property1 = property1;
                this.property2 = property2;
                // There is no need to assign the values to the properties explicitly.
            }
            log() {
                console.log(this.property1);
            }
        }
        const x = new MyClass3();
        x.log();
    }
    {
        //* Method overloading
        // Method overloading allows a class to have multiple methods with the same name but different parameter types or a different number of parameters. This allows us to call a method in different ways based on the arguments passed.
        class MyClass {
            add(a, b) {
                if (typeof a === 'number' && typeof b === 'number') {
                    return a + b;
                }
                if (typeof a === 'string' && typeof b === 'string') {
                    return `${a} ${b}`;
                }
                throw new Error('Invalid arguments');
            }
        }
        const result = new MyClass();
        console.log(result.add(10, 5)); // 15
        console.log(result.add('Hello', 'world')); // Hello world
    }
}
