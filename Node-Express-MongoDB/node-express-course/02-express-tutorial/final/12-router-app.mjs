import express from 'express';
import auth from './routes/auth.js';
import people from './routes/people.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/people', people);
app.use('/login', auth);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
