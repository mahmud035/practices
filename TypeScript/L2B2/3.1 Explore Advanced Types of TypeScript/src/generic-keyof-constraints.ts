{
  //* Generic constraint with "keyof" operator

  /**
   * NOTE: keyof operator একটা object type কে নেয় এবং এর key গুলো দিয়ে একটা union type তৈরি করে।
   * NOTE: The keyof operator takes an object type and produces a string or numeric literal (fixed values) union of its keys.
   */

  // Ex: 1
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = 'bike' | 'car' | 'ship'; // manually

  type Owner2 = keyof Vehicle; // Output: 'bike' | 'car' | 'ship';

  const person1: Owner = 'bike';
  const person2: Owner2 = 'bike';

  // Ex: 2
  type ExampleType = {
    foo: string;
    bar: number;
    baz: boolean;
  };

  // Using keyof to get the union type of all keys in ExampleType
  type ExampleKeys = keyof ExampleType; // Output: 'foo' | 'bar' | 'baz'

  // Ex: 3
  type Staff = {
    name: string;
    salary: number;
  };

  type staffKeys = keyof Staff; // Output: "name" | "salary"

  // IMPORTANT: Ex: 4 (Real life example)

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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
