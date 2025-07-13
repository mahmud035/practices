"use strict";
{
    // Unknown type
    // NOTE: In TypeScript, the `unknown` type represents a value that is of an unknown type. Unlike `any` type, which allows for nay type of value, `unknown` requires a type check or assertion before it can be used in a specific way so "no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type".
    // 👉 The `unknown` type is only assignable to `any` type and the `unknown` type itself, it is a type-safe alternative to `any`.
    // IMPORTANT: Use `unknown` type instead of `any` type.
    let value;
    let value1 = value; // ✅ Valid
    let value2 = value; // ✅ Valid
    // let value3: boolean = value; // 🔴 Invalid
    // let value4: number = value; // 🔴 Invalid
    const add = (a, b) => typeof a === 'number' && typeof b === 'number' ? a + b : undefined;
    console.log(add(1, 2)); // 3
    console.log(add('x', 2)); // `undefined`
}
