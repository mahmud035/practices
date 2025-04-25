// Create a Map
const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

// Set Map Values
fruits.set('dates', 500);
fruits.set('lemons', 300);

fruits.get('apples'); // Returns 500

typeof fruits; // Returns object
fruits instanceof Map; // Returns true

fruits.size; // Returns 5

fruits.delete('lemons'); // Deletes the key-value pair with key 'lemons'

fruits.has('apples'); // Returns true
