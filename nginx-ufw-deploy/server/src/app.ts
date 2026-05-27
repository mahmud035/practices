import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { router } from './app/routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'deploy-practice server is running' });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    statusCode: 404,
    success: false,
    message: 'Route not found',
    data: null,
  });
});

app.use(globalErrorHandler);

export default app;
