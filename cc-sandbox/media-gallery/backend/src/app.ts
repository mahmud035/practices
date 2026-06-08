import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import mediaRouter from './app/modules/media/media.route';

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/media', mediaRouter);

// Global error handler
app.use((err: Error & { statusCode?: number }, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode ?? 500;
  res.status(statusCode).json({
    statusCode,
    success: false,
    message: err.message ?? 'Internal server error',
    data: null,
  });
});

export default app;
