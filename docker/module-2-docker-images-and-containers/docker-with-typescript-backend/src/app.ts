import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Docker!!.',
  });
});

// Throwing error for testing purpose
app.get('/error', (req, res) => {
  throw new Error('This is a forced error');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
});

// Not found route handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
