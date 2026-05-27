import { IItem, IItemDocument } from './item.interface';
import { Item } from './item.model';

/**
 * Returns all items, newest first.
 */
const getAllItems = async (): Promise<IItemDocument[]> => {
  return Item.find().sort({ createdAt: -1 });
};

/**
 * Creates a single item.
 * @param payload validated item data
 */
const createItem = async (payload: IItem): Promise<IItemDocument> => {
  return Item.create(payload);
};

export const itemService = {
  getAllItems,
  createItem,
};
