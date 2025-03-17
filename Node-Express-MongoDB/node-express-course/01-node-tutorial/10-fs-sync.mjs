import fs, { writeFileSync } from 'fs';

try {
  // Read files synchronously
  const first = fs.readFileSync('./content/first.txt', 'utf-8');
  const second = fs.readFileSync('./content/second.txt', 'utf-8');
  console.log(first, '\n', second);

  // Write files synchronously
  writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`
  );
} catch (error) {
  console.error(error);
}

console.log('Done with this task');
console.log('Starting the next task');

// Documentation 👇:
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

// https://nodejs.org/docs/latest-v22.x/api/fs.html
