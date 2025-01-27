"use strict";
{
    // Type guard / type-narrowing using instanceof
    //* instanceof guard
    /**
     * NOTE: An instance is a real object that we can use which was created from a class.
     */
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log('I am barking');
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log('I am meawing');
        }
    }
    // instanceof ==> Dog
    const dog = new Dog('Dog Bhai', 'dog');
    // instanceof ==> Cat
    const cat = new Cat('Cat Bhai', 'cat');
    //* NOTE: type-guard-using- "instanceof"
    const getAnimal = (animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        else if (animal instanceof Cat) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimal(dog);
    getAnimal(cat);
    //* ===============>>================>>===============>>
    //* NOTE: Smart way to handle this using function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimalTwo = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    getAnimalTwo(dog);
    getAnimalTwo(cat);
}
