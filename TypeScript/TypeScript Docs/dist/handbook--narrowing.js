"use strict";
{
    function padLeft(padding, input) {
        // throw new Error('Not implemented yet!');
        if (typeof padding === 'number') {
            return ' '.repeat(padding) + input;
        }
        return padding + input;
    }
    function printAll(strs) {
        // NOTE: typeof array and typeof null is 'object'
        if (strs && typeof strs === 'object' && strs !== null) {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
        else {
            // do nothing
        }
    }
    //* Truthiness narrowing
    function getUsersOnlineMessage(numUsersOnline) {
        if (numUsersOnline) {
            return `There are ${numUsersOnline} users online now!`;
        }
        return `Nobody's here. :(`;
    }
    // both of these result in 'true'
    Boolean('hello'); // type: boolean, value: true
    function multiplyAll(values, factor) {
        if (!values) {
            return values;
        }
        else {
            return values.map((x) => x * factor);
        }
    }
    //* Equality narrowing
    function example(x, y) {
        if (x === y) {
            const upper = x.toUpperCase();
            const lower = y.toLowerCase();
            console.log(upper, lower);
        }
        else {
            console.log(x);
            console.log(y);
        }
    }
    function multiplyValue(container, factor) {
        // Remove both 'null' and 'undefined' from the type.
        if (container.value != null) {
            console.log(container.value);
            // Now we can safely multiply 'container.value'.
            container.value *= factor;
        }
    }
    function move(animal) {
        if ('swim' in animal) {
            return animal.swim();
        }
        return animal.fly();
    }
    //* instanceof narrowing
    // useful for most values that can be constructed with 'new'
    function longValue(x) {
        if (x instanceof Date) {
            console.log(x.toUTCString()); // x is a Date
        }
        else {
            console.log(x.toUpperCase()); // x is a string
        }
    }
    //* Assignments
    // when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.
    let x = Math.random() < 0.5 ? 10 : 'hello world';
    x = 1;
    console.log(x);
    x = 'goodbye';
    console.log(x);
    // x = true; // Error Here
    //* Control flow analysis
    function padLeft2(padding, input) {
        if (typeof padding === 'number') {
            return ' '.repeat(padding) + input;
        }
        return padding + input;
    }
    /**
     * padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a result, it was able to remove number from the type of padding (narrowing from string | number to string) for the rest of the function.
     *
     * This analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.
     */
    function example2() {
        let x;
        x = Math.random() < 0.5;
        console.log(x); // x is boolean
        if (Math.random() < 0.5) {
            x = 'hello';
            console.log(x); // x is string
        }
        else {
            x = 100;
            console.log(x); // x is number
        }
        return x; // x is string | number
    }
    //* Using type predicates
    /**
     * sometimes you want more direct control over how types change throughout your code.
     *
     * To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:
     */
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    function handleShape(shape) {
        // oops!
        // if (shape.kind === 'rect') {
        // }
    }
    function getArea(shape) {
        // if (shape.kind === 'circle') {
        //   return Math.PI * shape.radius ** 2;
        // }
        switch (shape.kind) {
            case 'circle':
                return Math.PI * shape.radius ** 2; // here: shape is circle
            case 'square':
                return shape.sideLength ** 2; // here: shape is square
        }
    }
    function getArea2(shape) {
        switch (shape.kind) {
            case 'circle':
                return Math.PI * shape.radius ** 2;
            case 'square':
                return shape.sideLength ** 2;
            default:
                const _exhaustiveCheck = shape;
                return _exhaustiveCheck;
        }
    }
}
