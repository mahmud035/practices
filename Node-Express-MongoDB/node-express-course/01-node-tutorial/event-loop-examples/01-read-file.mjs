import { readFile } from 'fs';

console.log('Starting first task');

readFile('../content/first.txt', 'utf-8', (error, data) => {
  if (error) return console.error(error);
  console.log(data);
  console.log('Completed first task');
});

console.log('Starting next task');

// Output:
// Starting first task
// Starting next task
// Hello this is first text file.
// Completed first task
