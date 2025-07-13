"use strict";
{
    // Exploring the Type System
    {
        // Type Declaration
        const obj1 = {
            a: 'a',
            // b: 'b', // 🔴 Error: Object literal may only specify known properties, and 'b' does not exist in type 'X'.
        };
        // Type Assertion
        const obj2 = {
            a: 'a',
            b: 'b', // ✅ Can be added additional property
        };
        // NOTE: In the above example, the object `obj2` is asserted to have the type `X` using the `as` keyword. This informs the TypeScript compiler that the object conforms to the specified type, even though it has an additional property `b` not present in the type definition.
        // Type assertions are useful in situations where a more specific type needs to be specified, especially when working with the DOM. For instance:
        const myInput = document.getElementById('my-input');
        // Here, the type assertion as HTMLInputElement is used to tell TypeScript that the result of getElementById should be treated as an HTMLInputElement.
    }
    //* Const Modifier on Type Parameters
    // From version 5.0 of TypeScript, it is possible to specify the const attribute on a generic type parameter. This allows for inferring the most precise type possible. Let’s see an example WITHOUT using `const`:
    {
        function identity(value) {
            // No `const` here
            return value;
        }
        const values = identity({ a: 'a', b: 'b' }); // Type inferred is: { a: string; b: string; }
        // As you can see, the properties `a` and `b` are inferred with a type of `string` .
    }
    // Now, let’s see the difference with the `const` version:
    {
        function identity(value) {
            // Using `const` modifier on type parameters
            return value;
        }
        const values = identity({ a: 'a', b: 'b' }); // Type inferred is: { a: "a"; b: "b"; }
        // Now we can see that the properties `a` and `b` are inferred as `const`, so `a` and `b` are treated as string literals (fixed string value) rather than just `string` types.
    }
    //* Const assertion
    // This feature allows you to declare a variable with a more precise literal type based on its initialization value, signifying to the compiler that the value should be treated as an immutable literal. Here are a few examples:
    // On a single property:
    {
        const v = {
            x: 3,
        };
        v.x = 3;
    }
    // On an entire object:
    {
        const v = {
            x: 1,
            y: 2,
        };
    }
    // This can be particularly useful when defining the type for a `tuple`:
    {
        const x = [1, 2, 3]; // number[]
        const y = [1, 2, 3]; // Tuple of readonly [1, 2, 3]
    }
    //* Explicit Type Annotation
    // We can be specific and pass a type, in the following example property `x` is of type `number`:
    {
        const v = {
            x: 1, // Inferred type: number (widening)
        };
        v.x = 3; // Valid
    }
    // We can make the type annotation more specific by using a union of literal types:
    {
        const v = {
            x: 1, // `x` is now a union of literal types: 1 | 2 | 3
        };
        v.x = 1; // Valid
        v.x = 2; // Valid
        v.x = 3; // Valid
        // v.x = 100; // Invalid
    }
    //* Type Narrowing
    // Type Narrowing is the process in TypeScript where a general type is narrowed down to a more specific type. This occurs when TypeScript analyzes the code and determines that certain conditions or operations can refine the type information.
    // Narrowing types can occur in different ways, including:
    // TODO: Conditions
    // By using conditional statements, such as `if` or `switch`, TypeScript can narrow down the type based on the outcome of the condition. For example:
    {
        let x = 10;
        if (x != undefined) {
            x += 10; // The type is number, which had been narrowed by the condition
        }
    }
    // TODO: Throwing or returning
    // Throwing an error or returning early from a branch can be used to help TypeScript narrow down a type. For example:
    {
        let x = 10;
        if (x === undefined)
            throw new Error('Error');
        x += 10;
    }
    //* IMPORTANT: Other ways to narrow down types in TypeScript include:
    /*
    1. `instanceof` operator: Used to check if an object is an instance of a specific class.
  
    2. `in` operator: Used to check if a property exists in an object.
  
    3. `typeof` operator: Used to check the type of a value at runtime.
  
    4. Built-in functions like `Array.isArray()`: Used to check if a value is an array.
    */
    //* Discriminated Union
    // Using a “Discriminated Union” is a pattern in TypeScript where an explicit “tag” is added to objects to distinguish between different types within a union. This pattern is also referred to as a “tagged union.” In the following example, the “tag” is represented by the property “type”:
    {
        const x = (input) => {
            if (input.type === 'type_a')
                return input.value + 100;
            else
                return input.value + 'extra';
        };
    }
}
