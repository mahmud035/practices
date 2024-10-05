"use strict";
{
    //* OOP - Class
    class Animal {
        // parameter properties
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
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
