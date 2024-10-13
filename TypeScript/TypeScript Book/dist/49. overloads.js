"use strict";
{
    // Implementation
    function sayHi(name) {
        if (typeof name === 'string') {
            return `Hi, ${name}!`;
        }
        else if (Array.isArray(name)) {
            return name.map((name) => `Hi, ${name}!`);
        }
        throw new Error('Invalid value');
    }
    console.log(sayHi('xx')); // Valid
    console.log(['aa', 'bb']); // Valid
}
