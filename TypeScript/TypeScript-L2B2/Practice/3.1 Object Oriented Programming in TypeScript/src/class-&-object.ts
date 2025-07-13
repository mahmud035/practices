{
  //* OOP - Class

  class Animal {
    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  // Create (instance / object) from Class
  const dog = new Animal('German Shepherd', 'dog', 'Ghew Ghew');
  const cat = new Animal('Persian', 'cat', 'meaw meaw');

  dog.makeSound();
  cat.makeSound();
}
