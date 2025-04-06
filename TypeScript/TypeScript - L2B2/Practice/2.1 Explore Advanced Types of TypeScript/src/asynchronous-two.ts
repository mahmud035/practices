{
  // Asynchronous Typescript (Promises)

  // NOTE: CREATE PROMISE INSIDE A FUNCTION

  // NOTE: throw an `Error` object in the `reject` call to align with BEST PRACTICES.

  // Ex: 1 (return string)
  const createPromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      const data: string = 'Data have fetched';

      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Failed to fetch data`));
      }
    });
  };

  // Ex: 2 (return boolean)
  const createPromiseBoolean = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const data: boolean = true;

      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Failed to fetch data`));
      }
    });
  };

  type IDataType = {
    name: string;
    age: number;
    profession: string;
    salary: number;
  };

  // Ex: 3 (return object)
  const createPromiseObject = (): Promise<IDataType> => {
    return new Promise((resolve, reject) => {
      const data: IDataType = {
        name: 'John',
        age: 36,
        profession: 'Developer',
        salary: 100000,
      };

      if (data) {
        resolve(data);
      } else {
        reject(new Error(`Failed to fetch data`));
      }
    });
  };

  // NOTE: GET THE PROMISE DATA

  const getPromiseData = async (): Promise<string> => {
    const data = await createPromise();
    console.log(data);
    return data;
  };
  getPromiseData();

  const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await createPromiseBoolean();
    console.log(data);
    return data;
  };
  getPromiseDataBoolean();

  const getPromiseDataObject = async (): Promise<IDataType> => {
    const data = await createPromiseObject();
    console.log(data);
    return data;
  };
  getPromiseDataObject();

  // IMPORTANT: Example: 4 (Get Data From API Call)

  type ITodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<ITodo> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const data = await response.json();
    return data;
  };
  getTodo();

  // NOTE: GET THE PROMISE DATA

  const getTodoData = async (): Promise<void> => {
    const data = await getTodo();
    console.log(data);
  };
  getTodoData();
}
