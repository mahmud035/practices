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
Object.defineProperty(exports, "__esModule", { value: true });
//* CREATE PROMISE INSIDE FUNCTION
// NOTE: throw an `Error` object inside the `reject` call to align with BEST PRACTICES.
// Mocking
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = 'Data have fetched';
        if (data)
            resolve(data);
        else
            reject(new Error(`Failed to fetch data`));
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data)
            resolve(data);
        else
            reject(new Error(`Failed to fetch data`));
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
        if (data)
            resolve(data);
        else
            reject(new Error(`Failed to fetch data`));
    });
};
// Promise<string>
// Promise<boolean>
// Promise<object>
//* GET THE PROMISE DATA
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const getPromiseDataBoolean = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    return data;
});
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
getPromiseData();
getPromiseDataBoolean();
getPromiseDataObject();
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = yield res.json();
    return data;
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getTodo();
    console.log(data);
});
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
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data loaded'), 1000);
    });
}
fetchData().then((data) => console.log(data)); // data is string
// ----------------------------------------
// Promise Rejection Typing
// ----------------------------------------
function mightFail() {
    return new Promise((resolve, reject) => {
        Math.random() > 0.5 ? resolve(42) : reject(new Error('Failed'));
    });
}
mightFail()
    .then((num) => console.log(num))
    .catch((err) => console.error(err));
//* ----------------------------------------
//* 2. Async/Await Typing
//* ----------------------------------------
// ----------------------------------------
// Basic Async Function
// ----------------------------------------
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`/api/v1/users/${id}`);
        return res.json(); // Automatically typed as Promise<{ name: string }>
    });
}
function displayUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUser(1); // user is { name: string }
        console.log(user.name);
    });
}
displayUser();
// ----------------------------------------
// Error Handling
// ----------------------------------------
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    });
}
loadData();
