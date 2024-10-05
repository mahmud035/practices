{
  //* Getter & Setter

  /**
   * getter এবং setter এর মাধ্যমে function / method কে call না করে, directly value access করা যায় এবং value সেট করা যায়।
   * NOTE: getter এবং setter কাজ করে function / method এর মতো করে, কিন্তু আমরা এই গুলোকে ব্যবহার / access করতে পারি property এর মতো করে।
   */

  class BankAccount {
    // parameter property
    constructor(
      public id: number,
      public name: string,
      private _balance: number
    ) {}

    // NOTE: getter
    get balance(): number {
      return this._balance;
    }

    // getBalance(): number {
    //   return this._balance;
    // }

    // NOTE: setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }

  //* Create 'instance/object' from BankAccount Class
  const myAccount = new BankAccount(111, 'Persian', 2000);

  console.log(myAccount.balance); // Accessing as a property
  myAccount.deposit = 2000; // Accessing as a property

  console.log(myAccount);
}
