import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { dbConnect, getDatabase } from './db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logStuff } from './middleware/logStuff.js';
import { logger } from './middleware/logger.js';
import { notFound } from './middleware/notFound.js';
import postsRoutes from './routes/posts.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

//* Middleware
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//* Initialize MongoDB
await dbConnect();

//* MongoDB Collections
export const posts = getDatabase().collection('posts');

//* Routes
app.use('/posts', postsRoutes);

app.get('/', logStuff, (req, res) => {
  res.send(`<h1>Hello world!</h1>`);
});

//* Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: Export the app for serverless deployment (vercel)
export default app;
