import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import messageRouter from './app/modules/messages/message.route';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/messages', messageRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ statusCode: 200, success: true, message: 'OK', data: null });
});

// 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({ statusCode: 404, success: false, message: 'Route not found', data: null });
});

// Global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    statusCode: 500,
    success: false,
    message: err.message || 'Internal server error',
    data: null,
  });
});

export default app;
