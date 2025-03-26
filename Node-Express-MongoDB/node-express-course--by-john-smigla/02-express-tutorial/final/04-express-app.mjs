import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5000;

// Drive __dirname equivalent in ES modules
// Get current path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup static and middleware
app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
