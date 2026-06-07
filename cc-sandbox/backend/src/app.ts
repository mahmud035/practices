import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRouter } from './app/modules/auth/auth.route';
import { notesRouter } from './app/modules/notes/notes.route';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.get('/health', (_req, res) => {
  res.json({ statusCode: 200, success: true, message: 'OK', data: null });
});

export default app;
