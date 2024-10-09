"use strict";
{
    // The never Type
    // When a variable is narrowed to a type that cannot contain a any values, the TypeScript compiler will infer that the variable must be of the `never` type. This is because the "`never` type represents a value that can never be produced".
    const printValue = (value) => {
        if (typeof value === 'string') {
            console.log(value.toUpperCase());
        }
        else if (typeof value === 'number') {
            console.log(value.toFixed(2));
        }
        else {
            // NOTE: `value` has type `never` here because it can never be anything other than a `string` or a `number`.
            const neverValue = value;
            console.log(`Unexpected value: ${neverValue}`);
        }
    };
}
