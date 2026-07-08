import { Request, Response } from 'express';
import { todoService } from './todo.service.js';

export const todoController = {
  getAll: (req: Request, res: Response) => {
    const todos = todoService.findAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Todos retrieved',
      data: todos,
    });
  },
  create: (req: Request, res: Response) => {
    const { title } = req.body;
    const todo = todoService.create(title);
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Todo created',
      data: todo,
    });
  },
  update: (req: Request, res: Response) => {
    const id = req.params.id as string;
    const updatedTodo = todoService.update(id, req.body);
    if (!updatedTodo) {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Todo not found',
        data: null,
      });
      return;
    }
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Todo updated',
      data: updatedTodo,
    });
  },
  delete: (req: Request, res: Response) => {
    const id = req.params.id as string;
    const success = todoService.delete(id);
    if (!success) {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Todo not found',
        data: null,
      });
      return;
    }
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Todo deleted',
      data: null,
    });
  },
};
