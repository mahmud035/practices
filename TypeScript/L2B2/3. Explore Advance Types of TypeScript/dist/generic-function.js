"use strict";
//* Ex: 1 Generic Arrow Function
const createArray = (param) => {
    return [param];
};
const result1 = createArray('Bangladesh'); // string[]
const result2 = createArray(12); // number[]
const result3 = createArray(true); // boolean[]
const result4 = createArray({ name: 'John' }); // object[]
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
//* Ex:2 Generic Arrow Function with Tuple return type
const createArray2 = (param1, param2) => {
    return [param1, param2];
};
const result5 = createArray2('John', 100);
const result6 = createArray2(true, { name: 'John, ', age: 28 });
const result7 = createArray2(200, ['John Doe', 'Alex Morgan']);
console.log(result5);
console.log(result6);
console.log(result7);
//* Ex:3 Spread Operator with Generic Function
const crush = 'Kate';
const myInfo = {
    name: 'Persian',
    age: 100,
    salary: 100000,
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
console.log(newData);
// Same kaj with Function
const addMeInMyCrushMind = (myInfo) => {
    const crush = 'Kate';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result8 = addMeInMyCrushMind(myInfo);
console.log(result8);
