// function-signature
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Anisul Islam is 32 years old");
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 32 years old"));
};
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
userInfo1();
userInfo2('Anisul Islam');
console.log(userInfo3('Anisul Islam', 32));
