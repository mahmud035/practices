"use strict";
{
    // Type Predicates
    // Type Predicates in TypeScript are functions that return a boolean value and are used to narrow the type of a variable to a more specific type.
    const isString = (value) => typeof value === 'string';
    const foo = (bar) => {
        if (isString(bar)) {
            console.log(bar.toUpperCase());
        }
        else {
            console.log('NOT a string.');
        }
    };
    foo('Hello, my name is Mahmud');
    foo(4);
}
