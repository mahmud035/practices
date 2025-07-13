"use strict";
//* CREATE PROMISE INSIDE FUNCTION
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// NOTE: throw an `Error` object in the `reject` call to align with BEST PRACTICES.
// Mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data have fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject(new Error(`Failed to fetch data`));
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject(new Error(`Failed to fetch data`));
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = {
            name: 'John',
            age: 36,
            profession: 'Developer',
            salary: 100000,
        };
        if (data) {
            resolve(data);
        }
        else {
            reject(new Error(`Failed to fetch data`));
        }
    });
};
// Promise<string>
// Promise<boolean>
// Promise<object>
//* GET THE PROMISE DATA
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
    return data;
});
getPromiseData();
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    console.log(data);
    return data;
});
getPromiseDataBoolean();
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    console.log(data);
    return data;
});
getPromiseDataObject();
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = yield response.json();
    return data;
});
getTodo();
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getTodo();
    console.log(data);
});
getTodoData();
