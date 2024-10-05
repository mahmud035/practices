class A {
  num: number;

  constructor(num: number) {
    this.num = num;
  }
}

class B extends A {
  constructor(num: number) {
    super(num);
  }
}
