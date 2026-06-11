import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { applicationsRoutes } from './app/modules/applications/applications.route';
import { authRoutes } from './app/modules/auth/auth.route';
import { jobsRoutes } from './app/modules/jobs/jobs.route';

const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ statusCode: 200, success: true, message: 'OK', data: null });
});

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);

// 404 fallback for unmatched API routes.
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
