{
  let helloWord = 'hello world';

  interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: 'John',
    id: 1,
  };

  class UserAccount {
    constructor(public name: string, public id: number) {}
  }

  const user2 = new UserAccount('Murphy', 1);

  type MyBool = true | false;
  type WindowStates = 'open' | 'closed' | 'minimized';
  type LockStates = 'locked' | 'unlocked';
  type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

  function getLength(obj: string | string[]) {
    return obj.length;
  }

  function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
      return [obj];
    }
    return obj;
  }

  interface Point {
    x: number;
    y: number;
  }

  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }

  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);

  class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"
}
