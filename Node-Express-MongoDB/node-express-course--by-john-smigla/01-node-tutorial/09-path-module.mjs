import path from 'path';
import { fileURLToPath } from 'url';

{
  // Drive __dirname equivalent in ES modules
  // Get current path
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  console.log(path.sep); // \ (separator - Windows)

  const filePath = path.join('/content', 'subfolder', 'test.txt');
  console.log(filePath); // \content\subfolder\test.txt

  const base = path.basename(filePath);
  console.log(base); // test.txt

  const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
  console.log(absolute);
  // D:\Practice\Node-Express-MongoDB\node-express-course\01-node-tutorial\content\subfolder\test.txt

  // Documentation 👇:
  // https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths
  // https://nodejs.org/docs/latest-v22.x/api/path.html#pathsep
}

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath)); // test.txt

// dirname()
console.log(path.dirname(filePath)); // ./dir1/dir2

// extname()
console.log(path.extname(filePath)); // .txt

// parse()
console.log(path.parse(filePath));

/* 
  {
    root: '',
    dir: './dir1/dir2',
    base: 'test.txt',
    ext: '.txt',
    name: 'test'
 }
*/

// Drive __dirname equivalent in ES modules
// Get current path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);
// D:\Practice\Node-Express-MongoDB\node.js-crash-course--by-traversy-media\dir1\dir2\test.txt

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
// D:\Practice\Node-Express-MongoDB\node.js-crash-course--by-traversy-media\dir1\dir2\test.txt
