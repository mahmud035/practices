"use strict";
class BankAccount {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(444, 'Persian', 2000);
myAccount.getBalance(); // OK
// myAccount._balance = 0; // Error Here
console.log(myAccount);
