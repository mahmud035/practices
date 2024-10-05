{
  //* Access Modifiers (public, private, protected)

  /**
   * IMPORTANT:
   * Access Modifier: Class এর বিভিন্ন property এবং method এর access কে নিয়ন্ত্রন করে।
   * public: Class এর ভিতরে এবং বাইরে দুই জায়গা থেকেই access ও modify করা যায়। By default সবগুলো property / method public থাকে।
   * private: শুধুমাত্র Class এর ভিতর থেকে modify করা যায়।
   *
   * NOTE: private Vs protected:
   * কোন property / method এর সাথে private ব্যবহার করলে, ঐ property / method কে শুধুমাত্র ঐ Class এর ভিতর থেকেই access করা যাবে। ঐ Class কে extends করে অন্য Class তৈরি করলে, সেই Child Class এর মধ্যে Parent Class এর private করা property / method গুলোকে access করা যাবে না।
   *
   * private property ব্যবহার করার ক্ষেত্রে convention হলো property এর নামের পূর্বে (_) underscore ব্যবহার করা।
   *
   * অপরদিকে, protected করলে Child Class এর মধ্যে ঐ Parent Class এর protected করা property কে access করা যাবে।
   */

  // Ex: 1
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; //! Only accessible within this BankAccount Class
    // protected _balance: number; //! Accessible within this BankAccount Class and StudentAccount Child Class

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      console.log(`My current balance is ${this._balance}`);
    }
  }

  //* Create 'instance/object' from BankAccount Class
  const myAccount = new BankAccount(111, 'Persian', 2000);

  // myAccount.id = 222; // Error: Cannot assign to 'id' because it is a read-only property.
  // myAccount._balance = 40000; // Error: Property '_balance' is private and only accessible within Class 'BankAccount'.
  myAccount.addDeposit(2000); // OK
  myAccount.getBalance(); // OK

  //* Child Class (Ex: 2)
  class StudentAccount extends BankAccount {
    test() {
      // this.
    }
  }
}
