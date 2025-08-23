{
  // Class

  {
    //* Class Common Syntax

    // The `class` keyword is used in TypeScript to define a class. Below, you can see an example:

    class Person {
      private name: string;
      private age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      public sayHi(): void {
        console.log(
          `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
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
      public name: string;
      public age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      sayHello(): void {
        console.log(
          `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
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
      private myProperty: string;

      constructor(myProperty: string) {
        this.myProperty = myProperty;
      }

      get getMyProperty(): string {
        return this.myProperty;
      }

      set setMyProperty(value: string) {
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
      private name: string;

      constructor(name: string) {
        this.name = name;
      }

      public introduce(): void {
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
      constructor(private name: string, public age: number) {
        // The "private" and "public" keywords in the constructor
        // automatically declare and initialize the corresponding class properties.
      }

      public introduce(): void {
        console.log(
          `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
      }
    }

    // Create an instance of the class
    const person = new Person('Alice', 25);
    person.introduce();
  }

  {
    //* Abstract Classes

    // Abstract Classes are used in TypeScript mainly for inheritance, they provide a way to define common properties and methods that can be inherited by subclasses. This is useful when you want to define common behavior and enforce that subclasses implement certain methods. They provide a way to create a hierarchy of classes where the abstract base class provides a shared interface and common functionality for the subclasses.

    abstract class Animal {
      protected name: string;

      constructor(name: string) {
        this.name = name;
      }

      abstract makeSound(): void;
    }

    class Cat extends Animal {
      makeSound(): void {
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

    class Container<T> {
      private item: T;

      constructor(item: T) {
        this.item = item;
      }

      getItem(): T {
        return this.item;
      }

      setItem(item: T): void {
        this.item = item;
      }
    }

    // Create instances of the class
    const container1 = new Container<number>(42);
    console.log(container1.getItem()); // 42

    const container2 = new Container<string>('Hello');
    container2.setItem('World');
    console.log(container2.getItem()); // World
  }

  {
    //*  Inheritance

    // Inheritance refers to the mechanism by which a class can inherit properties and methods from another class, known as the base class or superclass. The derived class, also called the child class or subclass, can extend and specialize the functionality of the base class by adding new properties and methods or overriding existing ones.

    // Parent Class / Base Class
    class Animal {
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      speak(): void {
        console.log('The animal makes a sound');
      }
    }

    // Child Class / Derived Class
    class Dog extends Animal {
      breed: string;

      constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
      }

      speak(): void {
        console.log('Woof! Woof!');
      }
    }

    // Create an instance of the base class
    const animal = new Animal('Generic Animal');
    animal.speak(); // The animal makes a sound

    // Create an instance of the derived class
    const dog = new Dog('Max', 'Labrador');
    dog.speak(); // Woof! Woof!"

    // =============================================

    // IMPORTANT: TypeScript does not support multiple inheritance in the traditional sense and instead allows inheritance from a single base class. TypeScript supports multiple interfaces. An interface can define a contract for the structure of an object, and a class can implement multiple interfaces. This allows a class to inherit behavior and structure from multiple sources.

    interface Flyable {
      fly(): void;
    }

    interface Swimmable {
      swim(): void;
    }

    class FlyingFish implements Flyable, Swimmable {
      fly(): void {
        console.log('Flying...');
      }

      swim(): void {
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
      static memberCount: number = 0;

      constructor() {
        OfficeWorker.memberCount++;
      }
    }

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
      property1: string = 'default value';
      property2: Number = 0;
    }

    // 2. In the constructor:
    class MyClass2 {
      property1: string;
      property2: number;

      constructor() {
        this.property1 = 'default value';
        this.property2 = 0;
      }
    }

    // 3. Using constructor parameter properties:
    class MyClass3 {
      constructor(
        private property1: string = 'default value',
        public property2: number = 0
      ) {
        // There is no need to assign the values to the properties explicitly.
      }

      log(): void {
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
      add(a: number, b: number): number; // Overload signature 1
      add(a: string, b: string): string; // Overload signature 2

      add(a: number | string, b: number | string): number | string {
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
