"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(2, 3)); // 5
    console.log(add('2', '3')); // 23
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`I am an admin & my role is ${user.role}`);
        }
        else {
            console.log(`I am a normal user`);
        }
    };
    const normalUser = { name: 'Mr. Normal' };
    const adminUser = { name: 'Mr. Admin', role: 'admin' };
    getUser(normalUser); // I am a normal user
    getUser(adminUser); // I am an admin & my role is admin
}
