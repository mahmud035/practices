'use strict';

{
  //* Methods

  /*   
  {
    function speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }

    const whiteRabbit = { type: 'white', speak };
    const hungryRabbit = { type: 'hungry', speak };

    whiteRabbit.speak(`Oh my ears and whiskers,  how late it's getting!`);
    hungryRabbit.speak(`how late it's getting!`);

    speak.call(hungryRabbit, 'Burp!');
    speak.apply(hungryRabbit, ['Burp!']);
  } */

  //* Prototypes
  {
    let empty = {};

    console.log(empty.__proto__);
    console.log(Object.prototype);
    console.log(empty.__proto__ === Object.prototype); // true
  }

  //* Constructor Function
  {
    function Rabbit(type) {
      this.type = type;
    }

    // Create instance from constructor
    const wiredRabbit = new Rabbit('wired');
    console.log(wiredRabbit);

    // Add Method to Constructor Function
    Rabbit.prototype.speak = function (line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    };

    console.log(wiredRabbit.__proto__);
    console.log(Rabbit.prototype);
    console.log(wiredRabbit.__proto__ === Rabbit.prototype); // true
  }

  //* Class Notation
  {
    // JavaScript classes are constructor functions with a prototype property.
    class Rabbit {
      constructor(type) {
        this.type = type;
      }

      speak() {
        console.log(`The ${this.type} rabbit says '${line}'`);
      }
    }

    // Create instance from class
    const killerRabbit = new Rabbit('killer');
    const blackRabbit = new Rabbit('black');

    console.log(killerRabbit);
    console.log(blackRabbit);

    console.log(killerRabbit.__proto__ === Rabbit.prototype); // true
    console.log(killerRabbit.__proto__.__proto__ === Object.prototype); // true (Top of the chain)
    console.log(killerRabbit.__proto__.__proto__.__proto__); // null
  }

  //* Selective Catching

  /*
  {
    class InputError extends Error {}

    function promptDirection(question) {
      const result = prompt(question);
      if (result.toLowerCase() === 'left') return 'L';
      if (result.toLowerCase() === 'right') return 'R';
      throw new InputError(`Invalid direction`, result);
    }

    for (;;) {
      try {
        const dir = promptDirection('where?');
        console.log(`You choose, ${dir}`);
        break;
      } catch (error) {
        if (error instanceof InputError) {
          console.log(`Not a valid direction. Try again.`);
        } else {
          throw error;
        }
      }
    }
  }
   */
}
