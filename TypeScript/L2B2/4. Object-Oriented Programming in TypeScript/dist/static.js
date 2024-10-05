"use strict";
class Counter {
    static increment() {
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
const instance1 = new Counter();
const instance2 = new Counter();
console.log(Counter.increment());
console.log(Counter.increment());
