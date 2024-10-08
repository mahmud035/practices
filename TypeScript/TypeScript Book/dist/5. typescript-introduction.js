"use strict";
{
    const sum = (a, b) => a + b;
    console.log(sum(5, 10));
    // To recognize types at runtime, we need to use another mechanism. TypeScript provides several options, with a common one being “tagged union”. For example:
    {
        const dog = {
            kind: 'dog',
            bark: () => console.log('bark'),
        };
        const cat = {
            kind: 'cat',
            meow: () => console.log('meow'),
        };
        const makeNoise = (animal) => {
            if (animal.kind === 'dog') {
                animal.bark();
            }
            else {
                animal.meow();
            }
        };
        makeNoise(dog);
        makeNoise(cat);
        // NOTE: The property “kind” is a value that can be used at runtime to distinguish between objects in JavaScript.
    }
    // TypeScript is a superset of JavaScript, so the “class” keyword can be used as a type and value at runtime.
    {
        class Animal {
            constructor(name) {
                this.name = name;
            }
        }
        class Dog extends Animal {
            constructor(name, bark) {
                super(name);
                this.name = name;
                this.bark = bark;
            }
        }
        class Cat extends Animal {
            constructor(name, meow) {
                super(name);
                this.name = name;
                this.meow = meow;
            }
        }
        const dog = new Dog('Fido', () => console.log('bark'));
        const makeNoise = (mammal) => {
            if (mammal instanceof Dog) {
                mammal.bark();
            }
            else {
                mammal.meow();
            }
        };
        makeNoise(dog);
        // In JavaScript, a “class” has a “prototype” property, and the “instanceof” operator can be used to test if the prototype property of a constructor appears anywhere in the prototype chain of an object.
    }
}
