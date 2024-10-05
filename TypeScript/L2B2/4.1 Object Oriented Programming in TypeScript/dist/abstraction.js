"use strict";
{
    // real implementation of those methods
    class Car {
        constructor(name, brand, model) {
            this.name = name;
            this.brand = brand;
            this.model = model;
        }
        startEngine() {
            console.log(`I am starting engine`);
        }
        stopEngine() {
            console.log(`I am stopping engine`);
        }
        move() {
            console.log(`I am moving engine`);
        }
        test() {
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
    class Car2 {
    }
    // real implementation of those methods
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting engine`);
        }
        stopEngine() {
            console.log(`I am stopping engine`);
        }
        move() {
            console.log(`I am moving engine`);
        }
    }
}
