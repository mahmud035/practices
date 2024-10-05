class BankAccount2 {
  constructor(
    public id: number,
    public name: string,
    private _balance: number
  ) {}

  // getter
  get balance(): number {
    return this._balance;
  }

  // getBalance(): number {
  //   return this._balance;
  // }

  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }

  // addDeposit(amount: number) {
  //   this._balance = this._balance + amount;
  // }
}

const myAccount2 = new BankAccount2(444, 'Persian', 4000);

console.log(myAccount2.balance);
myAccount2.deposit = 5000;

console.log(myAccount2);
