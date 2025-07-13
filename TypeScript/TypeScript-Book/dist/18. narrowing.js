"use strict";
{
    // Narrowing
    // TypeScript narrowing is the process of refining the type of a variable within a conditional block.
    // ✅ "This is useful when working with union types, where a variable can have more than one type".
    // TypeScript recognizes several ways to narrow the type:
    // 1. `typeof` operator
    // ✅ Used to check the type of a value at runtime.
    const fn = (x) => {
        if (typeof x === 'number') {
            return x + 1; // `x` is number
        }
        return -1;
    };
    // 2. Truthiness narrowing
    // Truthiness narrowing in TypeScript works by checking weather a variable is truthy or falsy to narrow its type accordingly.
    const toUpperCase = (name) => {
        if (name) {
            return name.toUpperCase();
        }
        else {
            return null;
        }
    };
    // 3. Equality narrowing
    // Equality narrowing in TypeScript works by checking weather a variable is equal to a specific value or NOT, to narrow its type accordingly.
    // It is used in conjunction with `switch` statements and equality operators such as ===, !==, ==, and != to narrow down types.
    const checkStatus = (status) => {
        switch (status) {
            case 'success':
                return true;
            case 'error':
                return null;
        }
    };
    const getAnimalType = (pet) => {
        if ('breed' in pet) {
            return 'dog';
        }
        else {
            return 'cat';
        }
    };
    // 5. `instanceof` narrowing
    // ✅ Used to check if an object is an instance of a specific class.
    class Square {
        constructor(width) {
            this.width = width;
        }
    }
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }
    function area(shape) {
        if (shape instanceof Square) {
            return shape.width * shape.width;
        }
        else {
            return shape.width * shape.height;
        }
    }
    const square = new Square(5);
    const rectangle = new Rectangle(5, 10);
    console.log(area(square)); // 25
    console.log(area(rectangle)); // 50
}
// IMPORTANT: Narrow down types in TypeScript:
/*
  1. `instanceof` operator: Used to check if an object is an instance of a specific class.

  2. `in` operator: Used to check if a property exists in an object.

  3. `typeof` operator: Used to check the type of a value at runtime.

  4. Built-in functions like `Array.isArray()`: Used to check if a value is an array.
*/
