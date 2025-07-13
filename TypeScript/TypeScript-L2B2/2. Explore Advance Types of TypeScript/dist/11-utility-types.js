"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateUser = (user) => {
    // Now you can update one or more properties without providing the whole object
};
updateUser({ name: 'Alice' }); // ✅ Ok
const defaultSettings = {
    theme: 'dark',
    language: 'en',
};
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};
const person = {
    name: 'Alice',
    age: 30,
};
const product = {
    id: 1,
    name: 'Laptop',
    price: 999,
};
const rolePermissions = {
    admin: { canEdit: true, canDelete: true },
    user: { canEdit: true, canDelete: false },
    guest: { canEdit: false, canDelete: false },
};
function getUser() {
    return {
        id: 1,
        name: 'Alice',
    };
}
// User is { id: number; name: string; }
/**
 * Explanation:
  
 * `ReturnType<typeof getUser>` extracts the return type of the `getUser` function.
 */
//* ----------------------------------------
//* Advanced Utility Types
//* ----------------------------------------
// ----------------------------------------------
// 11. Parameters<T> and ConstructorParameters<T>
// ----------------------------------------------
/**
 * Parameters<T> : Get tuple of function parameters' types.
 * ConstructorParameters<T> : Get tuple of constructor parameters' types.
 *
 * Purpose:
 * - `Parameters<T>` extracts a tuple type of the parameters of a function type `T`.
 * - `ConstructorParameters<T>` extracts a tuple type of the parameters of a constructor function type `T`.
 */
function sum(a, b) {
    return a + b;
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// [number, number]
/**
 * Explanation:
  
 * `Parameters<typeof sum>` extracts the tuple `[number, number]` representing the parameters of the `sum` function.
 * `ConstructorParameters<typeof Point>` extracts the tuple `[number, number]` representing the constructor parameters of the `Point` class.
 */
// ----------------------------------------
// 12. InstanceType<T>
// ----------------------------------------
/**
 * Get instance type of a class constructor.
 *
 * Purpose:
 * - Extracts the instance type of a constructor function type `T`. This can be helpful when working with classes and constructors.
 */
class UserAccount {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// UserAccount
/**
 * Explanation:
  
 * `InstanceType<typeof UserAccount>` extracts the instance type of the `UserAccount` class.
 */
// ----------------------------------------
// 13. ThisParameterType<T>
// ----------------------------------------
/**
 * Extract `this` parameter type from function.
 */
function print() {
    console.log(this.value);
}
// Use with Generics:
function updateEntity(payload) { }
const cats = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
};
console.log(cats);
