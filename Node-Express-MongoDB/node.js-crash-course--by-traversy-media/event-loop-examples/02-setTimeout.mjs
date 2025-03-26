console.log('First task');

setTimeout(() => {
  console.log('Second task');
}, 0);

console.log('Third task');

// Output:
// First task
// Third task
// Second task
