"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
const key = 'Pizza';
console.log(todaysTransactions.Pizza); // Dot notation access
console.log(todaysTransactions['Pizza']); // Bracket notation access
console.log(todaysTransactions[key]); // ✅ -10. Dynamic property access
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // Access via index signature
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // ✅ 35
console.log(todaysTransactions['Dave']); // Returns `undefined` but no TS error due to index signature
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test); // ❌ Error without index signature
// ✅ Type-safe iteration with `keyof` assertion
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // Assertion needed without index signature
}
Object.keys(student).map((key) => {
    console.log(student[key]); // Type assertion for array method
});
// Function using `keyof` for type safety
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name'); // ✅ Student name: Doug
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250,
};
// Type-safe iteration with Record type
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]); // Still needs assertion in for-in loop
}
