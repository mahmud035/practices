import { NextFunction, Request, Response } from 'express';
import { itemService } from './item.service';

/**
 * GET /api/items
 * Returns all items in the standard envelope.
 */
const getAllItems = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await itemService.getAllItems();

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Items retrieved successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/items
 * Creates an item from the validated body.
 */
const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await itemService.createItem(req.body);

    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Item created successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const itemController = {
  getAllItems,
  createItem,
};
