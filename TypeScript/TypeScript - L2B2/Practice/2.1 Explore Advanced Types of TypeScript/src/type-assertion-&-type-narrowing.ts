{
  /**
   *  IMPORTANT:
   * Type assertion: কোন একটা variable এর type কি হবে, সেটা যদি আমি typescript থেকে বেশি sure থাকি, তাহলে  type-assertion ব্যবহার করবো। type assertion লেখার জন্য `as` keyword টা ব্যবহার করতে হয়।
   * */

  // Example: 1
  // type-assertion
  let anything: any;

  anything = 'Next level web development';

  const anythingLength = (anything as string).length;

  console.log(anythingLength);

  // Example: 2
  const kgToGram = (param: string | number): string | number | undefined => {
    // type-narrowing
    if (typeof param === 'number') {
      const value = param * 1000;
      return value;
    }

    if (typeof param === 'string') {
      const value = parseFloat(param) * 1000;
      return `The converted result is ${value} gram`;
    }
  };

  // type-assertion
  const resultToBeNumber = kgToGram(100) as number;
  const resultToBeString = kgToGram('100') as string;

  console.log(resultToBeNumber, resultToBeString);

  // Example: 3
  type CustomErrorType = {
    message: string;
  };

  try {
    // some code that might throw an error
    const fetchTodo = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      return data;
    };

    fetchTodo();
  } catch (error) {
    // type-assertion
    console.log((error as CustomErrorType).message);
  }
}
