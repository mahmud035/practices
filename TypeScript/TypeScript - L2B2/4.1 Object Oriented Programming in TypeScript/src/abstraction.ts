{
  //* Abstraction in OOP

  /**
   * IMPORTANT: Abstraction: মূলত ব্যবহার করা হয় "low level details গুলো hide করার জন্য"।
   *
   ** Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don't really matter to our implementation.
   */

  /**
   * NOTE: Abstraction 2 ভাবে করা যায়।
   * 1. Abstraction with "interface"
   * 2. Abstraction with "abstract class"
   */

  //* Basic interface example
  // interface IVehicle1 {
  //   name: string;
  //   model: number;
  // }

  // const vehicle1: IVehicle1 = {
  //   name: 'Toyota',
  //   model: 2000,
  // };

  //* 01. Abstraction with "interface"
  /**
   * NOTE:
   * interface ব্যবহার করে Class তৈরি করলে interface এর ভিতরে define করা methods গুলোকে অবশ্যই Class এর ভিতরে define করতে হবে। এরপরে Class এর ভিতরে চাইলে আরো Extra methods define করা যাবে।
   *
   * interface এর সাথে Class ব্যবহার করার জন্য implements keyword টা ব্যবহার করা হয়।
   *
   * interface দিয়ে implements keyword এর মাধ্যমে Class তৈরি করলে, সেই Class থেকে instance / object তৈরি করা যায়।
   */

  // give idea about the methods
  interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation of those methods
  class Car implements IVehicle {
    name: string;
    brand: string;
    model: number;

    constructor(name: string, brand: string, model: number) {
      this.name = name;
      this.brand = brand;
      this.model = model;
    }

    startEngine(): void {
      console.log(`I am starting engine`);
    }

    stopEngine(): void {
      console.log(`I am stopping engine`);
    }

    move(): void {
      console.log(`I am moving engine`);
    }

    test(): void {
      console.log(`I am for testing purpose`);
    }
  }

  //* Create 'instance / object' Using Car Class
  const car1 = new Car('Car Name', 'Toyota', 2000);
  console.log(car1);

  //* =================>>==================>>==================>>

  //* 02. Abstraction with "abstract class"
  /**
   * NOTE:
   * abstract keyword ব্যবহার করে Class তৈরি করলে, সেই Class থেকে সরাসরি 'instance / object' তৈরি করা যায় না।
   *
   * abstract keyword ব্যবহার করে তৈরি করা Class এর মধ্যে methods গুলো শুধু define করবো। Methods এর ভিতরে details কিছু লিখবো না, অর্থাৎ, real implementation করবো না।
   *
   * real implementation করবো যেখানে করা দরকার হবে সেখানে।
   *
   * তবে abstract class কে extends করে নতুন Class তৈরি করা যায়।
   *
   * সেই নতুন Class এর ভিতরে abstract class এর abstract করা methods গুলোকে অবশ্যই define করতে হবে।
   */

  // give idea about the methods
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  // real implementation of those methods
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting engine`);
    }

    stopEngine(): void {
      console.log(`I am stopping engine`);
    }

    move(): void {
      console.log(`I am moving engine`);
    }
  }
}
