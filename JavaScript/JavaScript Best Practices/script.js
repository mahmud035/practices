'use strict';

{
  //* Use proper variable names

  const assets = [
    { id: 1, title: 'V-1', type: 'video' },
    { id: 2, title: 'V-2', type: 'video' },
    { id: 3, title: 'V-3', type: 'audio' },
  ];

  const firstName = 'John';
  const lastName = 'Smith';
  const videos = assets.filter((asset) => asset.type === 'video');

  // NOTE:
  // 👉 Use the specific naming convention. Mostly used camel-case naming convention.
  // 👉 The variable name should be concise and descriptive.
  // 👉 It should explain the purpose.
  // 👉 It is easy to pronounce.
}

{
  //* Be careful with comparison using the loose equality operator

  // IMPORTANT:
  // 👉 Loose Equality Operator (==): This comparison operator transforms the operands having the same type before comparison. Be careful with unexpected output.
  // 👉 Strict Equality Operator (===): This comparison operator compares the value and the type.

  // TODO: Always use Strict Equality Operator (=== OR !==).

  [100] == 100; // true
  // [100] === 100; // false

  '100' == 100; // true
  '100' === 100; // false

  [] == 0; // true
  // [] === 0; // false

  '' == false; // true
  '' === false; // false

  '' == 0; // true
  '' === 0; // false

  false == 0; // true
  false === 0; // false

  null == undefined; // true
  null === undefined; // false

  // NOTE:
  // 👉 Loose Equality Operator (== OR !=) performs the automatic type conversion before comparison if needed.
  // Like in the above example, you can get unexpected output with Loose Equality Operator.
}

{
  //* Check property exists in an object

  //👉 Option-1: Using "in" operator
  //👉 Option-2: Using "hasOwnProperty" method

  const employee = {
    id: 1,
    name: 'John',
    salary: 5000,
  };

  const isSalaryExist = 'salary' in employee;
  const isSalaryExist2 = employee.hasOwnProperty('salary');

  // console.log(isSalaryExist); // true
  // console.log(isSalaryExist2); // true

  const isGenderExist = 'gender' in employee;
  const isGenderExist2 = employee.hasOwnProperty('gender');

  // console.log(isGenderExist); // false
  // console.log(isGenderExist2); // false

  // NOTE:
  // 👉 The "in" operator returns the boolean value true/false.
  // 👉 The "hasOwnProperty" method returns the boolean value true/false.
  // 👉 The "in" operator returns true if a property exists in the object or its prototype chain.
  // 👉 The "hasOwnProperty" method returns if a property exists in the object.
}

{
  //* Conditionally add a property to an object

  const includeSalary = true;

  const employee = {
    id: 1,
    name: 'John',
    ...(includeSalary && { salary: 5000 }),
  };

  // NOTE:
  // 👉 Use "spread operator (...)" to spread an object into another object conditionally.
  // 👉 Use condition with && operator to add a new property to an object. It will add a property to an object if the condition match.

  // Output:
  /* 
    {
      "id": 1,
      "name": "John",
      "salary": 5000
    }
  */
}

{
  //* Use includes() to check for multiple criteria

  const rgbColors = ['red', 'green', 'blue'];

  const isRGBColor = (color) => {
    return rgbColors.includes(color);
  };

  // console.log(isRGBColor('red')); // true
  // console.log(isRGBColor('green')); // true
  // console.log(isRGBColor('blue')); // true
  // console.log(isRGBColor('yellow')); // false
  // console.log(isRGBColor('orange')); // false

  // NOTE:
  // 👉 The includes() method determines weather an array includes a certain value among its entries. It returns true if a value exists, otherwise, it returns false.
}

{
  //* Remove duplicates from an array using "Set"

  const numbers = [1, 2, 4, 5, 2, 4, 9, 11, 4, 11];
  const colors = ['red', 'pink', 'red', 'blue', 'black', 'pink'];

  const uniqueNumbers = [...new Set(numbers)];
  // [1, 2, 4, 5, 9, 11]

  const uniqueColor = [...new Set(colors)];
  // ['red', 'pink', 'blue', 'black']

  // NOTE:
  // 👉 Set is a new data structure introduced in ES6. Set only lets you store unique values of any type. When you pass an array to a new Set(array), it will remove duplicate values.
  // 👉 The spread syntax (...) is used to include all the items of the Set to a new array.
}

{
  //* Use the spread operator (...) to create a shallow copy of the array and object

  const scores = [10, 20, 40, 60];
  const employee = {
    id: 1,
    name: 'John',
  };

  const newScores = [...scores];
  const newEmployee = { ...employee };

  // NOTE:
  // 👉 Use the spread operator (...) to create a shallow copy of the array and object.
  // 👉 The spread operator (...) allow us to make copies of the original data (weather it is an array or object) and create a new copy of it.
  // 👉 It is an easy and clean way.
}

{
  //* Avoid delete keyword

  // TODO: Use the rest operator (...) to create a new copy without the given property name.
  const employee = {
    id: 1,
    name: 'John',
    salary: 5000,
  };

  const { salary, ...newEmployee } = employee;

  // console.log(newEmployee); // { id: 1, name: 'John' }

  // NOTE:
  // 👉 A better way to delete a property without mutating the original object is by using the rest operator (...).
  // 👉 Use the rest operator (...) to create a new copy without the given property name.
}

{
  //* Use Array.isArray() to determine if a variable is array or not

  const names = ['John', 'David', 'Mark'];
  // console.log(Array.isArray(names)); // true

  const user = { id: 1, name: 'David' };
  // console.log(Array.isArray(user)); // false

  const age = 18;
  // console.log(Array.isArray(age)); // false

  // NOTE:
  // 👉 The Array.isArray() method determines if the given argument is an Array or not.
  // 👉 Returns true if the value is Array.
  // 👉 Returns false if the value is not Array.
}

{
  //* Use of Falsy Bouncer

  // NOTE:
  // 👉 A falsy value is a value that is considered false when examined as a Boolean.
  //* 👉 Falsy Bouncer means removing all falsy values from an array.
  // 👉 Falsy values in JavaScript are: false, 0, '', null, NaN, undefined.
  // 👉 Pass the Boolean to Array.filter() as the first argument and it will serve as a falsy bouncer.

  const numbersWithFalsyValues = [7, null, 10, 17, false, NaN];
  const numbers = numbersWithFalsyValues.filter(Boolean);
  // console.log(numbers); // [7, 10, 17]

  const namesWithFalsyValues = ['Raj', '', 'Joy', undefined, false];
  const names = namesWithFalsyValues.filter(Boolean);
  // console.log(names); // ['Raj', 'Joy']

  const mixDataWithFalsyValues = [2, 0, '', 'Joy', null, undefined, false];
  const mixData = mixDataWithFalsyValues.filter(Boolean);
  // console.log(mixData); // [2, 'Joy']
}

{
  //* Use Array.some() to checks whether the specified callback function returns true for any element of an array

  const assets = [
    { id: 1, title: 'V-1', type: 'video' },
    { id: 2, title: 'V-2', type: 'video' },
    { id: 3, title: 'V-3', type: 'audio' },
  ];

  const hasVideoAsset = assets.some((asset) => asset.type === 'video');
  // console.log(hasVideoAsset); // true

  // NOTE:
  // 👉 The some() method checks if any array element pass a test implemented by the callback function. If the function returns true, some() returns true and stops.
  // 👉 The some() method does not change the original array.
}

{
  //* Readable numbers

  const largeNumber = 45_00_00_00_000;
  // console.log(largeNumber === 45000000000); // true

  // NOTE:
  // 👉 When working with large numbers it can be hard to read them out.
  // 👉 The Numeric Separators allow us to use underscore (_) as a separator in numeric literals, for example, you can write 50000 as 50_000.
  // 👉 This feature improves readability.
}

{
  //* Pass function arguments as an object

  // IMPORTANT:
  //* 👉 সহজ কথায়, যদি একটা function অনেকগুলো parameters receive করে, তাহলে ঐ parameters গুলোকে একটা object এর মধ্যে রেখে - সেই object টা দিয়ে function কে call/invoke করবো।

  const createProduct = ({ name, price, categoryId, brandId }) => {
    // Code to create product
    const product = {
      name,
      price,
      categoryId,
      brandId,
    };
    // console.log(product);
  };

  const productData = {
    name: 'Product-1',
    price: 500,
    categoryId: 1,
    brandId: 1,
  };
  createProduct(productData);

  // NOTE:
  // 👉 Parameters are part of a function definition. A JavaScript function can have any number of parameters. When we invoke a function and pass some values to that function, these values are called function arguments.
  // 👉 If a function has more than 1 parameter, it is hard to figure out what these arguments mean when the function is called. When you pass the arguments, the order is important.
  // 👉 A better way is to crate a function with object (with properties) parameters like in the example. When we pass the argument contained in an object it is pretty much clear from the names of the properties. Also, the order of properties doesn't matter anymore.
}

{
  //* Array Destructuring & Skip values in array destructuring

  const colorCodes = ['#FFF', '#000', '#FF0000', '#808080', '#FFFF00'];

  const [firstColor, , , , lastColor] = colorCodes;
  // console.log(firstColor); // #FFF
  // console.log(lastColor); // #FFFF00

  const scores = [50, 40, 30, 80, 90];
  const [, , ...restScores] = scores;
  // console.log(restScores); // [30, 80, 90]

  // NOTE:
  // 👉 Use blank comma to skip over unwanted values.
}

{
  //* Format the output of JSON.stringify()

  const employee = {
    id: 1,
    nama: 'John',
    salary: 5000,
  };

  const format = JSON.stringify(employee, null, 2); // The 3rd parameter 2 format the output with 2 spaces of indentation.

  // console.log(format);

  /*
   {
    "id": 1,
    "nama": "John",
    "salary": 5000
   }
  */

  // NOTE:
  // 👉 The JSON.stringify() method converts a JavaScript object to a JSON string.
  // 👉 The 3rd parameter to JSON.stringify() is called spacer.
  // 👉 You can pass String or Number value to insert whitespace in the returned string.
  // 👉 If the 3rd parameter is a Number, it indicates the number of space for indenting purpose.
  // 👉 If the 3rd parameter is a String, the string is used as whitespace.
}

{
  //* Use of optional chaining on function call

  const employee = {
    id: 1,
    name: 'John',
    salary: 5000,
    someMethod: function () {},
  };

  // Using optional chaining (?.)
  employee?.someMethod?.();

  // NOTE:
  // 👉 The optional chaining operator (?.) is a safe and concise way to access properties that potentially null or undefined.
  // 👉 The chaining operator (.) throws an error if a reference is null or undefined.
  // 👉 The optional chaining operator (?.) will return undefined if a reference is null or undefined.
  //* 👉 Just like with properties, we can use the optional chaining operator (?.) with methods also.
  // 👉 Less code and clean way.
}

{
  //* Convert to a flat array using Array.flat()

  const numbers = [1, 2, [3, 4], [5, [6, 7]]];

  const flatWithoutDepth = numbers.flat(); //* default depth value is 1
  // [1, 2, 3, 4, 5, [6, 7]]

  const flatDepth1 = numbers.flat(1);
  // [1, 2, 3, 4, 5, [6, 7]]

  const flatDepth2 = numbers.flat(2);
  // [1, 2, 3, 4, 5, 6, 7]

  // NOTE:
  // 👉 Array.flat() returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
}

{
  //* Use console.time() to debug
  /*   
  const label = 'ForLoop';
  console.time(label);

  const list = [];
  for (let i = 0; i < 25_000; i++) {
    list.push(`Item-${i}`);
  }

  console.log(`list length = ${list.length}`);
  // 25_000

  console.timeEnd(label);
  // ForLoop: 3.840087890625 ms

  // NOTE:
  // 👉 The console object has time() and timeEnd() methods. These two methods help us to analyze the performance of our code.
  //* 👉 The console.time() method starts a timer to track how long an operation takes. You can give each timer a unique name. When you call console.timeEnd() with the same name, the browser will output the time in milliseconds.
  */
}

{
  //* Logging using console.group()
  /* 
  console.group('Video');

  console.log('Video uploaded.');
  console.log('Video validated.');
  console.log('Video published.');

  console.groupEnd();

  // NOTE:
  // 👉 The console object has group() and groupEnd() methods.
  //* 👉 The console.group() method starts a new inline group in the web console log. This method takes an optional argument label.
  // 👉 The console.groupEnd() method ends the group.
  // 👉 It organizes your messages and improves visibility. 
  */
}

{
  //* Conditionally log error message using console.assert()
  /* 
  const employee = { id: 1, name: 'John' };
  console.assert(employee.salary, 'Salary not defined.');
  // Assertion failed: Salary not defined.

  // NOTE:
  // 👉 The console object has an assert() method which helps to log an error message conditionally.
  //* 👉 The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
   */
}

{
  //* Display tabular data using console.table()
  /* 
  const employee = { id: 1, name: 'John', salary: 5000 };
  console.table(employee);

  const employees = [
    { id: 1, name: 'John', salary: 5000 },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Mark', salary: 3000 },
  ];

  console.table(employees);

  // NOTE:
  //* 👉 The console object has a table() method which allows you to display arrays and objects to the console in tabular form.
  // 👉 The console.table() method provides better data visualization.
   */
}

{
  //* Function parameters default value

  const isRequired = () => {
    throw new Error('Argument is required');
  };

  // NOTE: If argument is not provided, "it will not be reached to function body" and throw error.
  const setCurrentVideoCode = (videoCode = isRequired()) => {
    console.log(videoCode);
  };

  // setCurrentVideoCode('#VD098'); // #VD098
  // setCurrentVideoCode(''); //
  // setCurrentVideoCode(null); // null

  // setCurrentVideoCode(); // Error: Argument is required
  // setCurrentVideoCode(undefined); // Error: Argument is required

  // NOTE:
  //* 👉 If you don't provide the argument or provide undefined, it will use the default value isRequired() function which throws an error.
  // 👉 Note that null is considered a value, so passing null will not use the default value isRequired().
}

{
  //* Use of Object Destructuring

  const employee = { id: 1, name: 'John' };

  const { id, name } = employee;

  // console.log(id); // 1
  // console.log(name); // John

  // NOTE:
  // 👉 Object destructuring provides a unique way to neatly extract an object’s value into new variables.
}

{
  //* Property renaming in Object Destructuring (alias)

  const employee = { id: 1, name: 'John' };

  const { id: employeeId, name: firstName } = employee;

  // console.log(employeeId); // 1
  // console.log(firstName); // John
}

{
  //* Object nested destructuring

  const employee = {
    id: 1,
    name: 'John',
    address: {
      state: 'Dhaka',
      country: 'Bangladesh',
    },
  };

  const { address: { state, country } = {} } = employee || {};

  // console.log(state); // Dhaka
  // console.log(country); // Bangladesh

  // Nested properties into different variable names
  const { address: { state: stateName, country: countryName } = {} } =
    employee || {};

  // console.log(stateName); // Dhaka
  // console.log(countryName); // Bangladesh
}

{
  //* Read property using optional chaining (?.)
  const response = {
    data: {
      employee: {
        id: 1,
        name: 'John',
      },
    },
  };

  const id = response?.data?.employee?.id;
  // console.log(id); // 1

  const salary = response?.data?.employee?.salary;
  // console.log(salary); // undefined

  // NOTE:
  // 👉 The optional chaining operator (?.) is a secure way to read nested object properties, even if an intermediate property doesn’t exist.
  // 👉 The optional chaining operator (?.) stops the evaluation if the value before ?. is nullish (null or undefined) and returns undefined.
}

{
  //* Lock an object using the Object.freeze()

  const employee = {
    id: 1,
    name: 'John',
  };

  Object.freeze(employee);

  // employee.name = 'Bob';
  // Uncaught TypeError: Cannot assign to read only property 'name' of object'

  // console.log(employee.name); // John

  // NOTE:
  // 👉 The Object.freeze() method freezes an object. A frozen object can no longer be changed.
  // 👉 This method prevents new properties from being added and modification of existing properties.
}

{
  //* Understanding of closures

  const outerFunction = () => {
    const message = `I am outside`;

    const innerFunction = () => {
      // console.log(message);
    };

    return innerFunction;
  };

  const innerFunc = outerFunction();
  innerFunc();

  // NOTE:
  // 👉 A closure is a mechanism that allows the inner function to remember the outer scope variables when it was defined, even after the outer function has returned.
  // 👉 innerFunction() is a closure because it can access the message outer-variable.

  // IMPORTANT:
  // 👉 The closure has three scope chains:
  // 👉 1. It can access its own scope means variables defined between its curly brackets ({ }).
  // 👉 2. It can access the outer function’s variables.
  // 👉 3. It can access the global variables.
}

{
  //* Smooth scroll to a specific element

  const element = document.getElementById('element-id');

  // element.scrollIntoView({
  //   behavior: 'smooth',
  // });

  // NOTE:
  // 👉 The scrollIntoView() method is used for scrolling the element on the viewport.
  // 👉 The element.scrollIntoView() method scrolls the specified element into the viewing portion of the window.
  // 👉 It provides the behavior option for smooth scrolling.
}

{
  //* Use Object.entries() to access key and value

  const employee = { id: 1, name: 'John' };

  Object.entries(employee).forEach(([key, value]) => {
    // console.log(`Key: ${key}, Value: ${value}`);
  });

  // Key: id, Value: 1
  // Key: name, Value: John

  // NOTE:
  // 👉 The Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs.
  // 👉 The order of the properties is the same as in an object.
}

{
  //* Use of nullish coalescing operator (??) with numbers

  let number1 = 0;
  let number2;

  const defaultNumber1 = number1 ?? 1; // 0
  const defaultNumber2 = number2 ?? 2; // 2

  // console.log({ defaultNumber1, defaultNumber2 });

  // NOTE:
  // 👉 A Nullish value is a value that is either null or undefined.
  //* 👉 The Nullish Coalescing Operator (??) is a logical operator that accepts two values and returns the second value if the first one is null or undefined and otherwise returns the first value.
}

{
  //* Use semicolons manually to avoid issues generated by ASI

  const getCountry = () => {
    return {
      name: 'Bangladesh',
    };
  };

  getCountry(); // {name: 'Bangladesh'}

  // NOTE:
  // 👉 ASI stands for Automatic Semicolon Insertion.
  // 👉 In JavaScript, semicolons are optional. JavaScript Engine automatically inserts a semicolon, where it is required.
  // 👉 If the code is not formatted correctly like in the above example, JavaScript Engine will add a semicolon to the end of the return statement and consider that no value is returned. So, it returns as undefined.
  // 👉 You should not depend on the ASI. If ASI fails and you are missing semicolons, the code will fail.
}

{
  //* Use of template literals with expressions and function call

  // 1. Expression in Template Literals
  const num1 = 10;
  const num2 = 20;
  const sum = `Sum = ${num1 + num2}`;
  // console.log(sum); // Sum = 30

  // 2. Function call in Template Literals
  const getLanguage = () => {
    return 'English';
  };
  const template = `I can speak ${getLanguage()}.`;
  // console.log(template); // I can speak English.

  // 3. Conditional Expression in Template Literals
  const age = 20;
  const message = `Employee has ${age > 18 ? 'access' : 'no access'}.`;
  // console.log(message); // Employee has access.

  // NOTE:
  // 👉 Template Literals use back-ticks (``) instead of single ('') or double ("") quotes.
  // 👉 Template literals provide an easy way to interpolate variables and expressions into strings.
  // 👉 Template literals allow expressions and functions in strings.
  // 👉 Using template literal means not only less code but higher readability also.
}

{
  //* Use of template literals with variable substitutions and multiline string

  // 1. Variable Substitutions
  const firstName = 'John';
  const lastName = 'Doe';
  const fullName = `Welcome, ${firstName} ${lastName}`;
  // console.log(fullName); // Welcome, John Doe

  // 2. Multiline String
  const message = `
  First line. 
  Second line.`;

  // console.log(message);

  /*
    First line. 
    Second line.
  */

  // NOTE:
  // 👉 Template Literals use back-ticks (``) instead of single ('') or double ("") quotes.
  // 👉 Template literals provide an easy way to interpolate variables and expressions into strings. You can do it using the ${...} syntax.
  // 👉 Template literals make multiline strings much simpler.
}

{
  //* Get an array of keys using Object.keys()

  const employee = {
    id: 1,
    name: 'John',
    salary: 5000,
    isActive: true,
  };

  const keys = Object.keys(employee);
  // console.log(keys); // ['id', 'name', 'salary', 'isActive']

  // NOTE:
  // 👉 The Object.keys() returns an array of a given object's own enumerable property names.
  // 👉 The ordering of the properties is the same as that when looping over them manually.
}

{
  //* Ways of a function declaration

  // Function Declaration
  function getVideo(videoId) {
    return { id: videoId, title: `Video-${videoId}` };
  }

  // Function Expression
  const getVideo2 = function (videoId) {
    return { id: videoId, title: `Video-${videoId}` };
  };

  // Arrow Function
  const getVideo3 = (videoId) => {
    return { id: videoId, title: `Video-${videoId}` };
  };

  // Arrow Function without Curly Braces {}
  const getVideo4 = (videoId) => ({ id: videoId, title: `Video-${videoId}` });

  // NOTE:
  // 👉 Functions are one of the fundamental building blocks in JavaScript.

  // IMPORTANT:
  // 👉 Following are the different ways to write functions.
  // 👉 1. Function declaration
  // 👉 2. Function Expression
  // 👉 3. Arrow function
  // 👉 4. Arrow function without curly braces ({}) – (Use only for a single statement of code)
}

{
  //* Use of increment (++) and decrement (--)
  /* 
  // Increment
  let i = 0;

  // ++i return value after side effect means after incrementing.
  console.log(++i); // 1
  console.log(i); // 1

  i = 0;

  // i++ return value before side effect means before incrementing.
  console.log(i++); // 0
  console.log(i); // 1

  // Decrement

  // --i return value after side effect means after decrementing.
  console.log(--i); // 0
  console.log(i); // 0

  i = 1;

  // i-- return value before side effect means before decrementing.
  console.log(i--); // 1
  console.log(i); // 0

  // NOTE:
  // 👉 The increment operator (++) adds one (+1) to its operand and returns a value. The increment (++) operator can be used before or after the operand.
  // 👉 Increment Syntax: i++ or ++i
  // 👉 The decrement operator (--) subtracts one (-1) to its operand and returns a value. The decrement (--) operator can be used before or after the operand.
  // 👉 Decrement Syntax: i-- or --i
 */
}

{
  //* Add dynamic property to an object

  // Ex: 1 (option-1)
  const dynamicProperty = 'age';

  const employee = { [dynamicProperty]: 28 };

  // console.log(employee); // { age: 28 }

  // Ex: 2 (option-2)
  const person = {};

  person[`${dynamicProperty}Value`] = 28;

  // console.log(person); // { ageValue: 28 }

  // NOTE:
  // 👉 ES6 provides an easy way to create a dynamic property in an object.
  // 👉 We can simply pass the property name in square brackets ([]) which we want to make property in the   object.
}

{
  //* Declare common variables outside of the loop

  const scores = [20, 35, 34, 70, 90, 100];
  const passingScore = 35;

  for (const score of scores) {
    // const passingScore = 35; // WARNING: passingScore should declare outside the loop.

    if (score >= passingScore) {
      // console.log(score);
    }
  }

  // NOTE:
  // 👉 "passingScore is common variable" so declare it outside the loop.
  //* 👉 Variables that are not going to reassign in the loop must be declared outside of the loop, otherwise, they will be created again & again and assigned the same value every time.
}

{
  //* Create an object from key-value pairs using Object.fromEntries()

  const videoEntries = [
    ['id', 1],
    ['title', 'Video-1'],
    ['size', '505 MB'],
    ['active', true],
  ];

  const videoObj = Object.fromEntries(videoEntries);
  // console.log(videoObj);
  // { id: 1, title: 'Video-1', size: '505 MB', active: true }

  // NOTE:
  // 👉 The Object.fromEntries() method transforms a list of key-value pairs into an object.
  // 👉 Object.fromEntries() performs the reverse of Object.entries().
}

{
  //* Tests every element of the array using Array.every()

  const employees = [
    { id: 1, name: 'Alex', active: true },
    { id: 2, name: 'John', active: false },
    { id: 3, name: 'Bob', active: true },
  ];

  const isAllActive = employees.every((employee) => employee.active === true);
  // console.log(isAllActive); // false

  // NOTE:
  // 👉 The Array every() method checks whether all the array elements pass the test implemented by the provided function.
  // 👉 It returns true if the function returns true for all elements.
  // 👉 It returns false if the function returns false for one element. When every() finds a false result, it will stop the loop and continue no more which improves the performance.
  // 👉 The every() method does not change the original array.
}

{
  //* Easy way to swap two variables

  let a = 10;
  let b = 20;

  [b, a] = [a, b]; // swap

  // console.log(a); // 20
  // console.log(b); // 10

  // NOTE:
  // 👉 Use destructuring assignment approach because it is short and expressive. Swapping is performed in just one line statement. It works with any data type like numbers, strings, booleans, or objects.
}

{
  //* Improve variable logging using console.log()

  const country = 'Bangladesh';
  // console.log({ country }); // { country: 'Bangladesh' }

  const age = 18;
  // console.log({ age }); // { age: 18 }

  // NOTE:
  // 👉 In JavaScript, we use console.log() to log the variables or messages. Sometimes it is difficult to understand what variable corresponds to a log in the console when too many variable logs.
  //* 👉 To log the variable, wrap the variable into a pair of curly brackets {variable-name}.
  //* 👉 It will improve readability.
}

{
  //* Mask numbers using slice() and padStart()

  const cardNumber = '70352034261199';
  const last4Digit = cardNumber.slice(-4);
  const maskNumber = last4Digit.padStart(cardNumber.length, '*');

  // console.log(maskNumber); // **********1199

  // NOTE:
  // 👉 The slice() method returns selected elements in an array, as a new array. Negative numbers select from the end of the array.
  // 👉 The padStart() method pads the current string with another string until the resulting string reaches the given length. The padding is applied from the start of the current string.
  // 👉 Masking is possible with less code.
}

{
  //* String to a number using the plus (+) operator

  const code = '404';

  // console.log(+code); // 404
  // console.log(typeof +code); // number

  // NOTE:
  // 👉 The unary plus operator (+) is the fastest and preferred way of converting something into a number.
}
