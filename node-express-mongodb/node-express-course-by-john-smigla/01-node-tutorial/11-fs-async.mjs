import { readFile, writeFile } from 'fs';

/**
 * NOTE:
 * Asynchronous file operations are `non-blocking`, meaning that the code execution will NOT stop until the operation is complete.
 * For most cases, it's recommended to use asynchronous operations to avoid blocking the main thread.
 *
 * The `readFile` function is used to read data from a file asynchronously.
 * The `writeFile` function is used to write data to a file asynchronously.
 */

console.log('Starting the task');

readFile('./content/first.txt', 'utf-8', (error, data) => {
  if (error) return console.error(error);
  const first = data;

  readFile('./content/second.txt', 'utf-8', (error, data) => {
    if (error) return console.error(error);
    const second = data;

    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first} ${second}`,

      (error) => {
        if (error) return console.error(error);
        console.log('Done with this task');
      }
    );
  });
});

console.log('Starting the NEXT task');

// Documentation 👇:
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

// https://nodejs.org/docs/latest-v22.x/api/fs.html
