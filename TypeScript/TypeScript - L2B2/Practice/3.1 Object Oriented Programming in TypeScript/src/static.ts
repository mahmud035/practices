{
  //* Statics in OOP
  class Counter {
    static count: number = 0;

    static increment(): number {
      Counter.count += 1;
      return Counter.count;
    }

    static decrement(): number {
      Counter.count -= 1;
      return Counter.count;
    }
  }

  //* Create 'instance/object' from Counter Class
  const instance1 = new Counter();
  const instance2 = new Counter();
  const instance3 = new Counter();

  console.log({ instance1, instance2, instance3 });

  console.log(Counter.increment()); // 1 --> same memory address
  console.log(Counter.increment()); // 2 --> same memory address
  console.log(Counter.increment()); // 3 --> same memory address
}
