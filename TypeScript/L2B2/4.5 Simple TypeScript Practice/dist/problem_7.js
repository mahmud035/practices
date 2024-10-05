"use strict";
const numbers = [15, 22, 12, 10, 20, 30, 40];
function findMixMax(...numbers) {
    console.log(numbers);
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach((number) => {
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    });
    return [min, max];
}
const result = findMixMax(15, 22, 12, 10, 20, 30, 40);
console.log(result);
const [minimum, maximum] = result; // destructuring
console.log({ minimum, maximum });
