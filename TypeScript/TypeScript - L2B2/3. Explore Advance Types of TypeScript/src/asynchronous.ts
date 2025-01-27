//* CREATE PROMISE INSIDE FUNCTION
// Mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'Data have fetched';

    if (data) {
      resolve(data);
    } else {
      reject(`Failed to fetch data`);
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;

    if (data) {
      resolve(data);
    } else {
      reject(`Failed to fetch data`);
    }
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

    if (data) {
      resolve(data);
    } else {
      reject(`Failed to fetch data`);
    }
  });
};

// Promise<string>
// Promise<boolean>
// Promise<object>

//* GET THE PROMISE DATA
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  console.log(data);
  return data;
};
getPromiseData();

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  console.log(data);
  return data;
};
getPromiseDataBoolean();

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  console.log(data);
  return data;
};
getPromiseDataObject();

//* LOAD DATA FROM "JSON PLACEHOLDER"
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};
getTodo();

const getTodoData = async (): Promise<void> => {
  const data = await getTodo();
  console.log(data);
};
getTodoData();
