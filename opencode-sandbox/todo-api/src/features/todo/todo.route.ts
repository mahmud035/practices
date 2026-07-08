import { NextFunction, Request, Response, Router } from 'express';
import { ZodSchema } from 'zod';
import { todoController } from './todo.controller.js';
import { createTodoSchema, updateTodoSchema } from './todo.validation.js';

const router = Router();

const validateRequest =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    if (!result.success) {
      res.status(400).json({
        statusCode: 400,
        success: false,
        message: 'Validation error',
        data: result.error,
      });
      return;
    }
    next();
  };

router.get('/', todoController.getAll);
router.post('/', validateRequest(createTodoSchema), todoController.create);
router.patch('/:id', validateRequest(updateTodoSchema), todoController.update);
router.delete('/:id', todoController.delete);

export const todoRouter = router;
