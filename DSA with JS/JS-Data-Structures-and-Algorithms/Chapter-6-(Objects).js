const javaScriptObject = {};
const testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject); // {array: [1,2,3,4]}

javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject); // {array: [1,2,3,4], title:'Algorithms'}

// Example: 1
// Constructor Function (Prototypal Inheritance)
function ExampleClass() {
  this.name = 'JavaScript';

  // ❌ Bad way to add method
  this.sayName = function () {
    console.log(this.name);
  };
}

// Create an instance using Constructor Function
const example1 = new ExampleClass();
console.log(example1);
example1.sayName(); // "JavaScript"

// Example: 2
// Constructor Function (Prototypal Inheritance)
//* Solution: Here’s an example of using .prototype:
function ExampleClassTwo() {
  this.array = [1, 2, 3, 4, 5];
  this.name = 'JavaScript';
}

// ✅ Good way to add method
ExampleClassTwo.prototype.sayName = function () {
  console.log(this.name);
};

// Create an instance
const example2 = new ExampleClassTwo();
example2.sayName(); // "JavaScript"

// Example: 3 (Constructor and Variables)
function ExampleClassThree(name, size) {
  this.name = name;
  this.size = size;
}

// Create an instance
const example3 = new ExampleClassThree('Public', 5);
console.log(example3); // {name:"Public", size: 5}

// accessing public variables
console.log(example3.name); // "Public"
console.log(example3.size); // 5

//* ------- Exercise Solutions -------

// Animal Constructor Function
function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

Animal.prototype.sayAnimalType = function () {
  console.log(this.animalType);
};

// Animal instance
const myAnimal = new Animal('ditto', 'pokemon');
myAnimal.sayName(); // "ditto"
myAnimal.sayAnimalType(); // "pokemon"

// Dog Constructor Function
function Dog(name) {
  Animal.call(this, name, 'Dog');
}

// Copy over the methods (extending)
Dog.prototype = Object.create(Animal.prototype);

// Dog instance
const myDog = new Dog('candy', 'dog');
myDog.sayName(); // "candy"
myDog.sayAnimalType(); // "dog"
