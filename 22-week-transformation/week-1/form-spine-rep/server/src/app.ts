import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { feedbackRoutes } from './modules/feedback/feedback.route';

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

// 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    statusCode: 404,
    success: false,
    message: 'Route not found',
    data: null,
  });
});

// Error handler (Express 5 auto-forwards async rejections here - 4 args signature required)
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    statusCode: 500,
    success: false,
    message: 'Internal server error',
    data: null,
  });
});

export default app;

// Teaches: cors({ credentials: true }) + the client's withCredentials is the exact cookie-ready config P1's httpOnly-JWT auth needs — warmed now. The 4-arg error handler is where Express 5's automatic async-rejection forwarding lands.
