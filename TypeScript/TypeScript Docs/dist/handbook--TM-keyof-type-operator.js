// Equivalent to: "name" | "age" | "location"
// ----------------------------------------
// Key Use Cases
// ----------------------------------------
// 1. Accessing Object Properties Safely
// Ensure a key exists in an object type:
function getValue(obj, key) {
    return obj[key];
}
const person = { name: 'Alice', age: 30, location: 'NYC' };
getValue(person, 'age'); // ✅ OK (returns `number`)
// Equivalent to: { name?: string; age?: number; location?: string; }
// 3. Combining with `typeof` for Runtime Objects
// Extract keys from a concrete object:
const config = { theme: 'dark', fontSize: 14 };
export {};
// { onClick: () => void; onHover: () => void; }
