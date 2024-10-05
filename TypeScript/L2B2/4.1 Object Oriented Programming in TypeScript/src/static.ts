{
  //* Statics in OOP
  class Counter {
    static count: number = 0;

    static increment(): number {
      return (Counter.count = Counter.count + 1);
    }

    decrement(): number {
      return (Counter.count = Counter.count - 1);
    }
  }

  //* Create 'instance/object' from Counter Class
  const instance1 = new Counter();
  const instance2 = new Counter();
  const instance3 = new Counter();

  console.log(Counter.increment()); // 1 --> same memory address
  console.log(Counter.increment()); // 2 --> same memory address
  console.log(Counter.increment()); // 3 --> same memory address
}
