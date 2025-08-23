import express from 'express';
import { PeopleRoutes } from './routes/13-people-route.mjs';
import { AuthRoutes } from './routes/14-auth-route.mjs';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/v1/people', PeopleRoutes);
app.use('/api/v1/login', AuthRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
