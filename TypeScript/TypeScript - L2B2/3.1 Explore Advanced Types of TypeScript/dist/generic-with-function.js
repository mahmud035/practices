"use strict";
{
    //* Function with Generics
    // Basic
    const createArray = (param) => {
        return [param];
    };
    const res = createArray('Bangladesh');
    // Ex: 1 (Array)
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric(true); // will return boolean[]
    const resGeneric2 = createArrayWithGeneric('Bangladesh'); // will return string[]
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: 'Mr. X',
    }); // will return User[]
    // Ex: 2 (Tuple)
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createArrayWithTuple('Bangladesh', 222); // will return [string, number]
    const res2 = createArrayWithTuple('Dhaka', 'Khulna'); // will return [string, string]
    // IMPORTANT: Ex: 3
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: 'Mr. X',
        email: 'a@gmail.com',
        devType: 'NLWD',
    });
    const student2 = addCourseToStudent({
        name: 'Mr. Y',
        email: 'a@gmail.com',
        watchType: 'AppleWatch',
    });
    // console.log(student1, student2);
}
