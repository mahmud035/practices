"use strict";
/**
 * Generic in Interface
 *
 * NOTE: ekta "interface" define korbo jar moddhe kichu property er type thakbe 'fixed' abong kichu property er type thakbe 'DYNAMIC'
 *  */
const crush1 = {
    name: 'Kate',
    husband: true,
    wife: 'Chokina',
};
console.log(crush1);
const crush2 = { name: 'Kate', husband: 'Persian Vai' };
console.log(crush2);
const crush3 = {
    name: 'Kate',
    husband: {
        name: 'Persian Vai',
        salary: 1000,
    },
};
console.log(crush3);
const crush4 = {
    name: 'Kate',
    husband: {
        name: 'Persian Vai',
        age: 32,
        profession: 'Developer',
    },
    wife: {
        name: 'Chokina',
        age: 30,
    },
};
console.log(crush4);
