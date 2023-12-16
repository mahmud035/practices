"use strict";
class User {
    constructor(email, name) {
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const pavel = new User('pavel@.com', 'pavel');
// pavel.city
console.log(pavel);
//* Same work with Different Syntax:
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = '';
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
}
const pavel2 = new User2('pavel@.com', 'pavel', 112);
// pavel2.userId
console.log(pavel2);
