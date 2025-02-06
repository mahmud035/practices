/* 
  Coder Class:
  - Base class with various access modifiers (public, private, protected)
  - Demonstrates definite assignment assertion (!) for secondLang
  - Shows default parameter value for 'lang'
*/

class Coder {
  secondLang!: string; // Using definite assignment assertion to tell TypeScript this will be initialized later

  // Constructor with Parameter Properties
  constructor(
    public readonly name: string, // Readonly modifier prevents modification after initialization
    public music: string,
    private age: number, // Private property - only accessible within class
    protected lang: string = 'TypeScript' // Protected property with default value
  ) {
    // No body necessary
  }

  // Method
  public getAge(): string {
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
  constructor(
    public computer: string, // New property specific to WebDev
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age); // Must call parent constructor first
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`; // Accessing protected property from parent
  }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang()); // ✅ I write TypeScript
// console.log(Sara.age)   // ❌ Error: private from parent
// console.log(Sara.lang)  // ❌ Error: protected property

/*
  Interface Implementation:
  - Guitarist class implements Musician interface
  - Enforces contract with play() method
  - Class Guitarist MUST implement all interface members
  - Interface is a blueprint for class structure
*/

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
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
  static count: number = 0; // Shared across all instances

  static getCount(): number {
    return Peeps.count; // Accessing static property
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // Increment static counter for each instance
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // Getter
  get data(): string[] {
    return this.dataState; // Returns reference to actual array
  }

  // Setter
  set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
      return;
    } else throw new Error('Param is not an array of strings');
  }
}

const MyBands = new Bands();

MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data); // ✅ ['Neil Young', 'Led Zep']

MyBands.data = [...MyBands.data, 'ZZ Top']; // Spread operator to add item
console.log(MyBands.data); // ✅ ['Neil Young', 'Led Zep', 'ZZ Top']

// MyBands.data = ['Van Halen', 5150]; // ❌ Error: number not allowed
