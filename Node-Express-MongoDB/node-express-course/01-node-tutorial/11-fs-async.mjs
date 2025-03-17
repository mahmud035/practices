import fs from 'fs';

console.log('Start');

fs.readFile('./content/first.txt', 'utf-8', (error, data) => {
  if (error) return console.error(error);
  const first = data;

  fs.readFile('./content/second.txt', 'utf-8', (error, data) => {
    if (error) return console.error(error);
    const second = data;

    fs.writeFile(
      './content/result-async.txt',
      `Here is the result: ${first} ${second}`,
      (error, data) => {
        if (error) return console.error(error);
        console.log('Done with this task');
      }
    );
  });
});

console.log('Starting the next task');

// Documentation 👇:
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

// https://nodejs.org/docs/latest-v22.x/api/fs.html
