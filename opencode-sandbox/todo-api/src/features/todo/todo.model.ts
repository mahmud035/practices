import mongoose, { Schema } from 'mongoose';
import { Todo } from './todo.interface.js';

const TodoSchema = new Schema<Todo>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const TodoModel = mongoose.model<Todo>('Todo', TodoSchema);
