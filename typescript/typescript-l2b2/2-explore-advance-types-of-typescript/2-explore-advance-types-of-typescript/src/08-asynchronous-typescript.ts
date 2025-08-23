export {};

//* CREATE PROMISE INSIDE FUNCTION

// NOTE: throw an `Error` object inside the `reject` call to align with BEST PRACTICES.

// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Data have fetched';

    if (data) resolve(data);
    else reject(new Error(`Failed to fetch data`));
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;

    if (data) resolve(data);
    else reject(new Error(`Failed to fetch data`));
  });
};

interface DataType {
  name: string;
  age: number;
  profession: string;
  salary: number;
}

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = {
      name: 'John',
      age: 36,
      profession: 'Developer',
      salary: 100000,
    };

    if (data) resolve(data);
    else reject(new Error(`Failed to fetch data`));
  });
};

// Promise<string>
// Promise<boolean>
// Promise<object>

//* GET THE PROMISE DATA
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};

getPromiseData();
getPromiseDataBoolean();
getPromiseDataObject();

//* LOAD DATA FROM "JSON PLACEHOLDER"
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<Todo> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
};

const getTodoData = async (): Promise<void> => {
  const data = await getTodo();
  console.log(data);
};

getTodo();
getTodoData();

//* ====================================================

/**
 * TypeScript provides excellent support for asynchronous programming patterns, particularly with Promises and async/await.
 */

//* ----------------------------------------
//* 1. Basic Promise Typing
//* ----------------------------------------

// ----------------------------------------
// Typing Promises
// ----------------------------------------

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });
}

fetchData().then((data) => console.log(data)); // data is string

// ----------------------------------------
// Promise Rejection Typing
// ----------------------------------------

function mightFail(): Promise<number> {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve(42) : reject(new Error('Failed'));
  });
}

mightFail()
  .then((num) => console.log(num))
  .catch((err: Error) => console.error(err));

//* ----------------------------------------
//* 2. Async/Await Typing
//* ----------------------------------------

// ----------------------------------------
// Basic Async Function
// ----------------------------------------

async function getUser(id: number): Promise<{ name: string }> {
  const res = await fetch(`/api/v1/users/${id}`);
  return res.json(); // Automatically typed as Promise<{ name: string }>
}

async function displayUser() {
  const user = await getUser(1); // user is { name: string }
  console.log(user.name);
}

displayUser();

// ----------------------------------------
// Error Handling
// ----------------------------------------

async function loadData(): Promise<void> {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

loadData();
