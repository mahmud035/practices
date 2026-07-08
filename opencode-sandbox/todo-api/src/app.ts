import express from 'express';
import { todoRouter } from './features/todo/todo.route.js';

const app = express();
app.use(express.json());

app.use('/todos', todoRouter);

export default app;
