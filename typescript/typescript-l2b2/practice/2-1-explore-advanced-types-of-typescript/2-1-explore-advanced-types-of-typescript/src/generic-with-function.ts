{
  //* Function with Generics

  // Basic
  const createArray = (param: string): string[] => {
    return [param];
  };

  const res = createArray('Bangladesh');

  // Ex: 1 (Array)
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<boolean>(true); // will return boolean[]
  const resGeneric2 = createArrayWithGeneric<string>('Bangladesh'); // will return string[]

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: 'Mr. X',
  }); // will return User[]

  // Ex: 2 (Tuple)
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res1 = createArrayWithTuple<string, number>('Bangladesh', 222); // will return [string, number]
  const res2 = createArrayWithTuple<string, string>('Dhaka', 'Khulna'); // will return [string, string]

  // IMPORTANT: Ex: 3
  const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Web Development';

    return {
      ...student,
      course,
    };
  };

  type IStudent = {
    name: string;
    email: string;
    devType?: string;
    watchType?: string;
  };

  const student1 = addCourseToStudent<IStudent>({
    name: 'Mr. X',
    email: 'a@gmail.com',
    devType: 'NLWD',
  });

  const student2 = addCourseToStudent<IStudent>({
    name: 'Mr. Y',
    email: 'a@gmail.com',
    watchType: 'AppleWatch',
  });

  // console.log(student1, student2);
}
