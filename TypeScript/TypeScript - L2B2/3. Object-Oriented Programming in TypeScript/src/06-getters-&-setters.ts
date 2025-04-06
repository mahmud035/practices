export {};

/**
 * In TypeScript, getters (`get`) and setters (`set`) are special methods that allow controlled access to class properties.
    
 * `get` - Getter Method
    - Used to retrieve a property’s value.
    - It does not take parameters.
    - It must return a value.
    - Accessed like a property, not a function.
    
 * `set` - Setter Method
    - Used to update a property’s value.
    - It takes exactly one parameter.
    - It does not return a value.
    - Accessed like a property, not a function.
 */

// ----------------------------------------
// 9. Getters and Setters
// ----------------------------------------

// Use `get` and `set` to control property access.

class BankAccountCl {
  private _balance: number = 0;

  // Getter
  get balance(): number {
    return this._balance;
  }

  // Setter
  set balance(amount: number) {
    if (amount < 0) throw new Error('Balance cannot be negative');
    this._balance = amount;
  }
}

const account = new BankAccountCl();
account.balance = 100; // ✅ Works (Setter)
console.log(account.balance); // ✅ Works (Getter)
account.balance = -50; // ❌ Error!

// ========================================
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(newName: string) {
    if (newName.length < 3)
      throw new Error('Name must be at least 3 characters long.');
    this._name = newName;
  }
}

const person = new Person('Alice');
console.log(person.name); // ✅ Access getter

person.name = 'Bob'; // ✅ Access setter
console.log(person.name); // Output: Bob

// person.name = "Al"; // ❌ Throws error: Name must be at least 3 characters long

// ========================================
class User {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User('John', 'Doe');
console.log(user.fullName); // ✅ Output: John Doe
