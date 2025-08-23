import express from 'express';
import { people } from '../data.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/api/v1/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/v1/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
});

app.post('/api/v1/postman/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/api/v1/login', (req, res) => {
  const { name } = req.body;

  if (name) return res.status(200).send(`Welcome ${name}`);

  res.status(401).send('Please Provide Credentials');
});

app.put('/api/v1/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) person.name = name;
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/v1/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ success: true, data: newPeople });
});

// Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
