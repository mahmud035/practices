"use strict";
{
    //* Parameter default value
    function add(num1, num2 = 0) {
        return num1 + num2;
    }
    add(11, 22); // OK
    add(11); // OK
    //* Spread Operator
    // Ex: 1 (with array)
    const friends = ['chandler', 'joey', 'ross'];
    const newFriends = ['monica', 'rachel', 'pheobe'];
    // friends.push(...newFriends);
    // console.log(friends);
    const allFriends = [...friends, ...newFriends];
    console.log(allFriends); // ['chandler', 'joey', 'ross', 'monica', 'rachel', 'pheobe']
    // Ex: 2 (with object)
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan',
    };
    const mentors2 = {
        prisma: 'Firoz',
        nextjs: 'Tanmoy',
        cloud: 'Nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentorList); // {typescript: 'Mezba', redux: 'Mir', dbms: 'Mizan', prisma: 'Firoz', nextjs: 'Tanmoy', cloud: 'Nahid'}
    //* Rest Parameter / Operator
    // NOTE: Rest Parameter ==> function এর কয়েকটি অথবা সবগুলো parameter কে rest operator এর মাধ্যমে capture করতে  পারি। এটি একটি Array ([]) রিটার্ন করে। Parameters গুলোকে capture করে Array এর মধ্যে রাখে।
    // Ex: 1
    const greetFriends = (...friends) => {
        // 'friends' is an array containing all the arguments passed to the function.
        console.log(friends);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('John', 'Alex', 'Moin', 'Bappy');
    // Ex: 2
    function exampleFunction(...args) {
        // 'args' is an array containing all the arguments passed to the function.
        console.log(args);
        for (const arg of args) {
            console.log(arg);
        }
    }
    exampleFunction(1, 2, 3, 'four', 5);
    //* Array and Object Destructuring
    // NOTE: Same as JavaScript
    // Array Destructing
    const myArray = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = myArray;
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); // [3, 4, 5]
    // Object Destruction
    const myObject = { fullName: 'John Doe', city: 'New York' };
    const { fullName, city } = myObject;
    console.log(fullName); // 'John Doe'
    console.log(city); // 'New York'
    const user = {
        id: 1,
        name: {
            firstName: 'Mezbaul',
            middleName: 'Abedin',
            lastName: 'Persian',
        },
        contactNo: '01700000',
        address: 'Uganda',
    };
    const { name: { middleName }, contactNo, } = user;
}
