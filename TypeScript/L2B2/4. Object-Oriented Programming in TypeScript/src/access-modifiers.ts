class BankAccount {
  constructor(
    public id: number,
    public name: string,
    private _balance: number
  ) {}

  getBalance() {
    console.log(`My current balance is ${this._balance}`);
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(444, 'Persian', 2000);
myAccount.getBalance(); // OK
// myAccount._balance = 0; // Error Here
console.log(myAccount);
