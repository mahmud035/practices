// NOTE: Different ways to create and consume JS Promise.

// Promise One
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task such as: DB calls, cryptography, network calls

  setTimeout(function (params) {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Promise consumed');
});

// Promise Two
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Async 2 resolved');
});

// Promise Three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: 'Chai', email: 'chai@gmail.com' });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise Four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: 'mahmud', password: '123' });
    } else {
      reject({ message: 'promiseFour: Something went wrong' });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log('The promise is either resolved or rejected');
  });

// Promise Five (async ... await)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ username: 'Pavel', password: '123' });
    } else {
      reject({ message: 'promiseFive: Something went wrong' });
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

consumePromiseFive();

// IMPORTANT:

// NOTE: Get user data using Async...Await
const getAllUsers = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

getAllUsers();

// NOTE: Same task using fetch.then.then.catch
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => console.log('Users:', data))
  .catch((error) => console.log(error.message));
