"use strict";
class A {
    constructor(num) {
        this.num = num;
    }
}
class B extends A {
    constructor(num) {
        super(num);
    }
}
