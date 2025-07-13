{
  //* keyof guard

  type Alphanumeric = string | number;

  function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  // console.log(add(2, 3));
  // console.log(add('2', '3'));

  //* in guard

  type NormalUserType = { name: string };
  type AdminUserType = { name: string; role: 'admin' };

  function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
      return `I am an admin and my role is ${user.role}`;
    } else {
      return `I am a normal user`;
    }
  }

  const normalUser1: NormalUserType = { name: 'Mr. X' };
  const adminUser1: AdminUserType = { name: 'Mr. Y', role: 'admin' };

  // console.log(getUser(normalUser1));
  // console.log(getUser(adminUser1));

  //* instanceof guard
  /**
   * NOTE: An instance is a real object that we can use which was created from a class.
   */

  class Animal {
    // parameter properties
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`I am barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log(`I am meawing`);
    }
  }

  // instanceof ==> Dog
  const animal1 = new Dog('German Bhai', 'dog');

  // instanceof ==> Cat
  const animal2 = new Cat('Persian Bhai', 'cat');

  function getAnimal(animal: Animal) {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  }

  // getAnimal(animal1);
  // getAnimal(animal2);

  //* Using type predicates

  function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
  }

  function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
  }

  function getAnimal2(animal: Animal) {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  }

  getAnimal2(animal1);
  getAnimal2(animal2);
}
