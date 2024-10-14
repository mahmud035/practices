"use strict";
{
    // Type Manipulation
    {
        const obj = { foo: 42, bar: 'hello' };
        console.log(obj);
        const value1 = 'hello';
        const value2 = 42;
        console.log({ value1, value2 });
        const person = {
            name: 'John',
            age: 36,
        };
        console.log(person.name);
        console.log(person.age);
        const sayHi = (name) => console.log(`Hi, ${name}`);
        sayHi('Alice'); // "Hi, Alice"
    }
    {
        const age = 36;
        console.log(age);
    }
    {
        //* Utility Types
        // Several built-in utility types can be used to manipulate types, below a list of the most common used:
        {
            const person = {
                name: 'John',
                age: 36,
            };
            console.log(person);
        }
        {
            const person = {
                name: 'John',
                age: 36,
            };
            console.log(person);
        }
        {
            const person = {
                name: 'John',
                age: 36,
            };
            console.log(person);
        }
        {
            const products = {
                apple: { name: 'Apple', price: 0.5 },
                banana: { name: 'Banana', price: 0.25 },
            };
            console.log(products.apple); // { name: 'Apple', price: 0.5 }
        }
        {
            const price = { price: 300 };
            console.log(price);
        }
        {
            const name = { name: 'John' };
            console.log(name);
        }
    }
}
