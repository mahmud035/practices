{
  // Type guard / type-narrowing using instanceof

  //* instanceof guard
  /**
   * NOTE: An instance is a real object that we can use which was created from a class.
   */

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log('I am barking');
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
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

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(dog);
  getAnimal(cat);

  //* ===============>>================>>===============>>

  //* NOTE: Smart way to handle this using function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimalTwo = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  getAnimalTwo(dog);
  getAnimalTwo(cat);
}
