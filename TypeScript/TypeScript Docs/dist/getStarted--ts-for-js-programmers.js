"use strict";
{
    let helloWord = 'hello world';
    const user = {
        name: 'John',
        id: 1,
    };
    class UserAccount {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }
    const user2 = new UserAccount('Murphy', 1);
    function getLength(obj) {
        return obj.length;
    }
    function wrapInArray(obj) {
        if (typeof obj === 'string') {
            return [obj];
        }
        return obj;
    }
    function logPoint(p) {
        console.log(`${p.x}, ${p.y}`);
    }
    // logs "12, 26"
    const point = { x: 12, y: 26 };
    logPoint(point);
    class VirtualPoint {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const newVPoint = new VirtualPoint(13, 56);
    logPoint(newVPoint); // logs "13, 56"
}
