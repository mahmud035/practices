import fs, { writeFileSync } from 'fs';

/**
 * NOTE:
 * Synchronous file operations are `blocking`, meaning that the code execution will stop until the operation is complete.
 * This can lead to performance issues if not handled properly, especially in a server environment.
 * For most cases, it's recommended to use asynchronous operations to avoid blocking the main thread.
 *
 * The `readFileSync` function is used to read data from a file synchronously.
 * The `writeFileSync` function is used to write data to a file synchronously.
 */

try {
  const first = fs.readFileSync('./content/first.txt', 'utf-8');
  const second = fs.readFileSync('./content/second.txt', 'utf-8');
  console.log(first, '\n', second);

  writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`,
    { flag: 'a' } // Append to the file. If the file does not exist, it will be created.
  );
} catch (error) {
  console.error(error);
}

console.log('Done with this task');
console.log('Starting the NEXT task');

// Documentation 👇:
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

// https://nodejs.org/docs/latest-v22.x/api/fs.html
