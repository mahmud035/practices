"use strict";
/*
  Coder Class:
  - Base class with various access modifiers (public, private, protected)
  - Demonstrates definite assignment assertion (!) for secondLang
  - Shows default parameter value for 'lang'
*/
class Coder {
    // Constructor with Parameter Properties
    constructor(name, // Readonly modifier prevents modification after initialization
    music, age, // Private property - only accessible within class
    lang = 'TypeScript' // Protected property with default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // No body necessary
    }
    // Method
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge()); // ✅ Hello, I'm 42
// console.log(Dave.age)   // ❌ Error: private property
// console.log(Dave.lang)  // ❌ Error: protected property
/*
  WebDev Class (extends Coder):
  - Demonstrates inheritance and super() call
  - Shows access to protected parent property
  - Adds new property 'computer'
*/
class WebDev extends Coder {
    constructor(computer, // New property specific to WebDev
    name, music, age) {
        super(name, music, age); // Must call parent constructor first
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; // Accessing protected property from parent
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang()); // ✅ I write TypeScript
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums')); // ✅ Jimmy strums the guitar
/*
  Static Members:
  - Static property count shared across all instances
  - Static method getCount() accesses static property
  - Automatic ID assignment using static counter
*/
class Peeps {
    static getCount() {
        return Peeps.count; // Accessing static property
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // Increment static counter for each instance
    }
}
Peeps.count = 0; // Shared across all instances
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id); // 3
console.log(Steve.id); // 2
console.log(John.id); // 1
console.log(Peeps.count); // 3 - total instances created
/*
  Getter/Setter with Validation:
  - Controlled access to private dataState
  - Setter ensures only string arrays are accepted
  - Getter returns reference to actual array
*/
class Bands {
    constructor() {
        this.dataState = [];
    }
    // Getter
    get data() {
        return this.dataState; // Returns reference to actual array
    }
    // Setter
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data); // ✅ ['Neil Young', 'Led Zep']
MyBands.data = [...MyBands.data, 'ZZ Top']; // Spread operator to add item
console.log(MyBands.data); // ✅ ['Neil Young', 'Led Zep', 'ZZ Top']
// MyBands.data = ['Van Halen', 5150]; // ❌ Error: number not allowed
