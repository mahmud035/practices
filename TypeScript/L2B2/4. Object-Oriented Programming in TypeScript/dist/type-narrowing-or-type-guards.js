"use strict";
//* keyof guard
function add(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
function getUser(user) {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: 'Mr. X' };
const adminUser1 = { name: 'Mr. Y', role: 'admin' };
// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));
//* instanceof guard
/**
 * NOTE: An instance is a real object that we can use which was created from a class.
 * */
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class Dog extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`I am barking`);
    }
}
class Cat extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log(`I am meawing`);
    }
}
// instanceof => Dog
const animal1 = new Dog('German Bhai', 'dog');
// instanceof => Cat
const animal2 = new Cat('Persian Bhai', 'cat');
function getAnimal(animal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
// getAnimal(animal1);
// getAnimal(animal2);
//* Using type predicates
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal2(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
getAnimal2(animal1);
getAnimal2(animal2);
