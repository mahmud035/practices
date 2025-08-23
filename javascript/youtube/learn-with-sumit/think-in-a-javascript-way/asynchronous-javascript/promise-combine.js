const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 5000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// Promise.all([promise1, promise2]).then((res) => console.log(res));

Promise.race([promise1, promise2]).then((res) => console.log(res));
