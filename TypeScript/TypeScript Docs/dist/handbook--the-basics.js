let message = 'Hello World';
const messageLower = message.toLowerCase();
const user = {
    name: 'Daniel',
    age: 26,
};
console.log({ messageLower, user });
function greet(person, date) {
    return `Hello ${person}, today is ${date.toDateString()}!`;
}
console.log(greet('John', new Date()));
export {};
