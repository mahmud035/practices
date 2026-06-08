import { Request, Response } from 'express';
import { authService } from './auth.service';
import { AuthRequest } from '../../middlewares/authenticate';

/**
 * Registers a new user. Returns safe user fields (no password).
 */
const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };
    const user = await authService.register(name, email, password);
    res
      .status(201)
      .json({ statusCode: 201, success: true, message: 'Registered successfully', data: user });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Registration failed';
    res.status(400).json({ statusCode: 400, success: false, message, data: null });
  }
};

/**
 * Authenticates a user and sets an HTTP-only JWT cookie.
 */
const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const { token, user } = await authService.login(email, password);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ statusCode: 200, success: true, message: 'Logged in', data: user });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Login failed';
    res.status(401).json({ statusCode: 401, success: false, message, data: null });
  }
};

/**
 * Clears the auth cookie, logging the user out.
 */
const logout = (_req: Request, res: Response): void => {
  res.clearCookie('token');
  res.json({ statusCode: 200, success: true, message: 'Logged out', data: null });
};

/**
 * Returns the currently authenticated user's decoded token payload.
 */
const me = (req: AuthRequest, res: Response): void => {
  res.json({ statusCode: 200, success: true, message: 'OK', data: req.user });
};

export const authController = { register, login, logout, me };
