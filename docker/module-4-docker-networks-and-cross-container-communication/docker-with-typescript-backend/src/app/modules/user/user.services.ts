import type { TUser } from './user.interface.js';
import { User } from './user.model.js';

const createUser = async (payload: TUser) => {
  const user = await User.create(payload);
  return user;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = await User.find(query);
  return users;
};

const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const UserServices = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
