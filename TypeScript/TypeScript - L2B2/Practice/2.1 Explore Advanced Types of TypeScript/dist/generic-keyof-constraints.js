"use strict";
{
    const person1 = 'bike';
    const person2 = 'bike';
    // IMPORTANT: Ex: 4 (Real life example)
    const getPropertyValue = (obj, key) => {
        //* Here: "Y extends keyof X" means
        // ==> when X = 'user' object, then "Y extends keyof X" means: 'name' | 'age' | 'address'
        // ==> when X = 'car' object, then "Y extends keyof X" means: 'model' | 'year'
        return obj[key];
    };
    const user = {
        name: 'Mr. Persian',
        age: 34,
        address: 'ctg',
    };
    const car = {
        model: 'Toyota 100',
        year: 2020,
    };
    const res1 = getPropertyValue(user, 'name');
    const res2 = getPropertyValue(user, 'age');
    const res3 = getPropertyValue(user, 'address');
    // const res4 = getPropertyValue(user, 'something else'); // Error Here
    const res5 = getPropertyValue(car, 'model');
    const res6 = getPropertyValue(car, 'year');
    // const res7 = getPropertyValue(car, 'something else') // Error Here
    //* Accessing Object Property Value
    // user['name'];
    // user['age'];
    // user['address'];
    // car['model']
    // car['year'];
}
