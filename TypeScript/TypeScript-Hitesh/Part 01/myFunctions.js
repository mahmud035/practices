function addTwo(num) {
    // return 'Hello'; // Error Here
    return num + 2;
}
console.log(addTwo(5));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper('10'));
console.log(getUpper('pavel'));
function signUpUser(name, email, isPaid) {
    // console.log(`${name} ${email} ${isPaid}`);
}
console.log(signUpUser('pavel', 'pavel@gmail.com', false));
// provide default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // console.log(`${name} ${email} ${isPaid}`);
};
console.log(loginUser('pavel', 'pavel@gmail.com'));
// return union type
function getValue(myValue) {
    if (myValue > 5) {
        return true;
    }
    return '200 OK';
}
// Arrow function return type Syntax
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
var numbers = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
numbers.map(function (number) {
    return number;
});
function consoleError(errorMessage) {
    console.log(errorMessage);
    // return 1; // Error Here
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
