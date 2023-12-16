// link: https://dmitripavlutin.com/javascript-closure/

// link: https://dmitripavlutin.com/javascript-closures-interview-questions/#questions-1-closures-raise-your-hand

//* Questions 2: Lost in parameters

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

//* Questions 3: Who's who

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//* Questions 4: Tricky closure

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

//* Questions 5: Right or wrong message

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }

//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();

//* Does a function pickup latest changes?

// let name = 'John';

// function sayHi() {
//   alert('Hi, ' + name);
// }

// name = 'Pete';

// sayHi();

//* Which variables are available?

// function makeWorker() {
//   let name = 'Pete';

//   return function () {
//     alert(name);
//   };
// }

// let name = 'John';

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show?

//* Are counters independent?

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // ?
// alert(counter2()); // ?

//* Function in if

// let phrase = 'Hello';

// if (true) {
//   let user = 'John';

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();
