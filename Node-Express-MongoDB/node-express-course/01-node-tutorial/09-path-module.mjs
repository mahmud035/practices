import path from 'path';
import { fileURLToPath } from 'url';

// Drive __dirname equivalent in ES modules
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
