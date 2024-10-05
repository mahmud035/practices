"use strict";
{
    //* Polymorphism in OOP
    /**
     * NOTE: Poly শব্দের অর্থ —> “অনেকগুলো” এবং Morphism শব্দের অর্থ —> “রুপ”। অর্থাৎ Polymorphism শব্দের অর্থ হলো —> “যার অনেকগুলো রুপ”।
     *
     * IMPORTANT: যখন একটা Parent Class এর কোন একটা method বিভিন্ন Child Class এর মধ্যে extends হয়ে ভিন্ন ভিন্ন কাজ করে (অর্থাৎ, Child Class এর মধ্যে Parent Class থেকে পাওয়া ঐ method কে বিভিন্ন ভাবে পরিবর্তন করা যায় এবং এই পরিবর্তন করাটা প্রতিটি Child Class এর মধ্যে আলাদা আলাদা ভাবে কাজ করে) ==> তখন এই বিষয়টিকে Polymorphism বলে।
     *
     ** In Short: A Child Class can overwrite a method it inherited from a Parent Class.
     */
    //  Ex: 1
    //* Parent Class
    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }
    }
    //* Child Class: 01
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }
    //* Child Class: 02
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours per day`);
        }
    }
    //* Create 'instance/object' from Classes
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    getSleepingHours(person1); // I am sleeping for 8 hours per day
    getSleepingHours(person2); // I am sleeping for 7 hours per day
    getSleepingHours(person3); // I am sleeping for 6 hours per day
    //* =================>>==================>>==================>>
    // Ex: 2
    //* Parent Class
    class Shape {
        getArea() {
            return 0;
        }
    }
    //* Child Class: 01
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        // NOTE: Modify Parent Class Method inside Child Class
        getArea() {
            return Math.PI * this.radius * this.radius; // CircleArea = 3.14 * radius * radius
        }
    }
    //* Child Class: 02
    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        // NOTE: Modify Parent Class Method inside Child Class
        getArea() {
            return this.width * this.height; // RectangleArea = width * height
        }
    }
    //* Create 'instance/object' from Classes
    const shape = new Shape();
    const circleShape = new Circle(10);
    const rectangleShape = new Rectangle(5, 10);
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    getShapeArea(shape); // 0
    getShapeArea(circleShape); // 314.1592653589793
    getShapeArea(rectangleShape); // 50
}
