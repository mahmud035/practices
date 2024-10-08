{
  const sum = (a: number, b: number): number => a + b;

  console.log(sum(5, 10));

  // To recognize types at runtime, we need to use another mechanism. TypeScript provides several options, with a common one being “tagged union”. For example:

  {
    interface Dog {
      kind: 'dog'; // Tagged union
      bark: () => void;
    }

    interface Cat {
      kind: 'cat'; // Tagged union
      meow: () => void;
    }

    type Animal = Dog | Cat;

    const dog: Dog = {
      kind: 'dog',
      bark: () => console.log('bark'),
    };

    const cat: Cat = {
      kind: 'cat',
      meow: () => console.log('meow'),
    };

    const makeNoise = (animal: Animal) => {
      if (animal.kind === 'dog') {
        animal.bark();
      } else {
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
      constructor(public name: string) {}
    }

    class Dog extends Animal {
      constructor(public name: string, public bark: () => void) {
        super(name);
      }
    }

    class Cat extends Animal {
      constructor(public name: string, public meow: () => void) {
        super(name);
      }
    }

    type Mammal = Dog | Cat;

    const dog = new Dog('Fido', () => console.log('bark'));

    const makeNoise = (mammal: Mammal) => {
      if (mammal instanceof Dog) {
        mammal.bark();
      } else {
        mammal.meow();
      }
    };
    makeNoise(dog);

    // In JavaScript, a “class” has a “prototype” property, and the “instanceof” operator can be used to test if the prototype property of a constructor appears anywhere in the prototype chain of an object.
  }
}
