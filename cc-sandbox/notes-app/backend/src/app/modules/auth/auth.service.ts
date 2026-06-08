import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from './auth.model';

/**
 * Creates a new user account. Throws if the email is already registered.
 */
const register = async (name: string, email: string, password: string) => {
  const exists = await UserModel.findOne({ email });
  if (exists) throw new Error('Email already in use');

  const hashed = await bcrypt.hash(password, 12);
  const user = await UserModel.create({ name, email, password: hashed });

  return { _id: user._id, name: user.name, email: user.email };
};

/**
 * Validates credentials and returns a signed JWT + safe user payload.
 */
const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { _id: user._id.toString(), email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );

  return { token, user: { _id: user._id, name: user.name, email: user.email } };
};

export const authService = { register, login };
