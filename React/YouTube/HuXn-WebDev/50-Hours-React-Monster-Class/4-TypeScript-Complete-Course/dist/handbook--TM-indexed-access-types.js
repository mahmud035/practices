// 5. Generic Type Safety
// Enforce relationships between parameters and return types in functions:
function getProperty(obj, key) {
    return obj[key]; // Return type matches the property's type
}
const person = { name: 'Alice', age: 30, address: { city: 'NYC' } };
const age = getProperty(person, 'age'); // ✅
const city = getProperty(person, 'address')['city']; // ✅
export {};
