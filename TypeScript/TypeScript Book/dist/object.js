"use strict";
// NOTE: Object Type:
//* Normal way to define object type
const user2 = {
    company: 'Programming Hero',
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
    wife: 'Bibi',
};
const user3 = {
    company: 'Programming Hero',
    name: 'John',
    age: 34,
    isMarried: true,
    wife: 'Alexa',
};
const user4 = {
    company: 'Programming Hero',
    name: 'Smith',
    age: 40,
    isMarried: true,
    wife: 'Jeni',
};
console.log(user2);
console.log(user3);
console.log(user4);
const statusOfDataFetching = 'success';
const num = 6;
const answer = true;
// 4. Enum Numbers
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const chosenColor = Color.Green;
