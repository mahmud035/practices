"use strict";
{
    // Type Annotations
    // On variables declared using `var`, `let` and `const`, it is possible to optionally add a type:
    const x = 1;
    // TypeScript does a good job of inferring types, especially when simple one, so these declarations in most cases are not necessary.
    // On functions is possible to add "type annotations" to parameters:
    function sum(a, b) {
        return a + b;
    }
    // The following is an example using a anonymous functions (so called lambda function):
    {
        const sum = (a, b) => a + b;
    }
    // These annotation can be avoided when a default value for a parameter is present:
    {
        const sum = (a = 0, b = 0) => a + b;
    }
    // Return type annotations can be added to functions:
    {
        const sum = (a = 10, b) => a + b;
    }
    // This is useful especially for more complex functions as writing explicating the return type before an implementation can help better think about the function.
}
