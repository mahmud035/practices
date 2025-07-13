// NOTE: Primitive Types:
/**
 * string,
 * number,
 * boolean,
 * null,
 * undefined
 */

let course: string = 'Next Level Web Developer';
let rollNumber: number = 123;
let isAdmin: boolean = true;

let myName: string;
myName = 'Mahmudul Hasan Pavel';

let noValue: null = null;
let undefinedValue: undefined = undefined;

// NOTE: TypeScript Provided Types:
/**
 * Array,
 * Object,
 * Tuple,
 * void,
 * any,
 * enum
 */

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'cherry'];

let person5: { name: string; age: number } = { name: 'Alice', age: 30 };

let employee: [string, number] = ['John', 35];

function logMessage(message: string): void {
  console.log(message);
}

let dynamicValue: any = 'This can be any type';
