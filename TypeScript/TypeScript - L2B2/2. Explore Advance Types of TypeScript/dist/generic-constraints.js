"use strict";
/**
 * NOTE: jokhon generic function k force kore bolbo je generic a pathano data te ei ei type er data thakte-ei hobe, othoba ei ei property thakte-ei hobe --> tokhon setake constraints in generic or generic constraints bole.
 * */
const myInfo2 = {
    name: 'Persian',
    age: 100,
    salary: 100000,
};
const addMeInMyCrushMind2 = (myInfo) => {
    const crush = 'Kate';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result9 = addMeInMyCrushMind2(myInfo2);
const result11 = addMeInMyCrushMind2(myInfo2);
console.log(result9);
console.log(result11);
// WARN
// NOT GOOD PRACTICE (karon ami ekhane object er vitore je kono property dite partechi. )
// const result10 = addMeInMyCrushMind2({ x: '', y: '', z: '' });
// console.log(result10);
