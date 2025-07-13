"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // Asynchronous Typescript (Promises)
    // NOTE: CREATE PROMISE INSIDE A FUNCTION
    // Ex: 1 (return string)
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = 'Data have fetched';
            if (data) {
                resolve(data);
            }
            else {
                reject('Failed to fetch data');
            }
        });
    };
    // Ex: 2 (return boolean)
    const createPromiseBoolean = () => {
        return new Promise((resolve, reject) => {
            const data = true;
            if (data) {
                resolve(data);
            }
            else {
                reject('Failed to fetch data');
            }
        });
    };
    // Ex: 3 (return object)
    const createPromiseObject = () => {
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
                reject('Failed to fetch data');
            }
        });
    };
    // NOTE: GET THE PROMISE DATA
    const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        console.log(data);
        return data;
    });
    getPromiseData();
    const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromiseBoolean();
        console.log(data);
        return data;
    });
    getPromiseDataBoolean();
    const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromiseObject();
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
    // NOTE: GET THE PROMISE DATA
    const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield getTodo();
        console.log(data);
    });
    getTodoData();
}
