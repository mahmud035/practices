import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import ApplicationRoutes from './app/routes';
import { corsOptions } from './utils';

const app = express();

//* Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

//* Application Routes
app.use('/api/v1', ApplicationRoutes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to the Express Server!');
});

//* Global Error Handler

//* Handle Not Found Route

export default app;
