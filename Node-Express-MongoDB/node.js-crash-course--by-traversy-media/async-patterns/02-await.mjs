import { readFile, writeFile } from 'fs/promises';

// Follow this pattern for async operations
// Get `readFile`, `writeFile`, etc from `fs/promises`

const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf-8');
    const second = await readFile('../content/second.txt', 'utf-8');

    await writeFile(
      '../content/result-mind-grenade.txt',
      `This is awesome: ${first} ${second}`,
      { flag: 'a' }
    );

    const output = await readFile(
      '../content/result-mind-grenade.txt',
      'utf-8'
    );
    console.log(output);
  } catch (error) {
    console.error(error);
  }
};

start();
