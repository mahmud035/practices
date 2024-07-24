'use strict';

//* Function Declaration
{
  function hello() {
    console.log('Hello World');
  }

  let msg = hello();
  console.log(msg);
}

//* Function Expression
{
  const hello = function () {
    console.log('Hello World');
  };
}

//* Named Function Expression
{
  const hello = function hello() {
    console.log('Hello World');
  };
}

//* Arrow Function
{
  const hello = () => console.log('Hello World');

  const add = (a, b) => a + b; // implicit return

  //* IMPORTANT: When we want to return something from the arrow function, there are Two ways to do it.
  //* Suppose we want to return an object like that:

  /* 
    {
      a: 5,
      b: 6
    }
  */

  //? First way: (use parenthesis or () first brackets)
  const returnSomething = () => ({
    a: 5,
    b: 6,
  });

  console.log(returnSomething()); // {a: 5, b: 6}

  //? Second way: use explicit return keyword
  const returnSomethingTwo = () => {
    return {
      a: 5,
      b: 6,
    };
  };

  console.log(returnSomethingTwo()); // {a: 5, b: 6}
}

//* Anonymous Function
// Ex: 1
{
  function hello() {
    return () => {
      console.log('Hello World');
    };
  }
}

// Ex: 2
{
  function hello() {
    return function () {
      console.log('Hello World');
    };
  }
}
