"use strict";
{
    /**
     *  IMPORTANT:
     * Type assertion: কোন একটা variable এর type কি হবে, সেটা যদি আমি typescript থেকে বেশি sure থাকি তাহলে type-assertion ব্যবহার করবো। type assertion লেখার জন্য as keyword টা ব্যবহার করতে হয়।
     * */
    // Example: 1
    // type-assertion
    let anything;
    anything = 'Next level web development';
    anything.length;
    // Example: 2
    const kgToGram = (param) => {
        // type-narrowing
        if (typeof param === 'number') {
            const value = param * 1000;
            return value;
        }
        if (typeof param === 'string') {
            const value = parseFloat(param) * 1000;
            return `The converted result is ${value} gram`;
        }
    };
    // type-assertion
    const resultToBeNumber = kgToGram(100);
    const resultToBeString = kgToGram('100');
    console.log(resultToBeNumber, resultToBeString);
    try {
    }
    catch (error) {
        // type-assertion
        console.log(error.message);
    }
}
