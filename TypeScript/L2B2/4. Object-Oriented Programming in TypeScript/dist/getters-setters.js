"use strict";
class BankAccount2 {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
    // setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount2 = new BankAccount2(444, 'Persian', 4000);
console.log(myAccount2.balance);
myAccount2.deposit = 5000;
console.log(myAccount2);
