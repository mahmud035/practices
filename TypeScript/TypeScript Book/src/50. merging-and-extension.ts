{
  // Merging and Extension

  // Merging and extension refer to two different concepts related to working with types and interfaces.

  // NOTE: Extension refers to the ability to extend or inherit from existing types or interfaces to create new ones. It is a mechanism to add additional properties or methods to an existing type without modifying its original definition. Example:

  interface IAnimal {
    name: string;
    eat(): void;
  }

  interface IBird extends IAnimal {
    sing(): void;
  }

  const bird: IBird = {
    name: 'Bird 1',
    eat() {
      console.log('Eating');
    },
    sing() {
      console.log('Singing');
    },
  };

  console.log(bird.name);
  bird.eat();
  bird.sing();
}
