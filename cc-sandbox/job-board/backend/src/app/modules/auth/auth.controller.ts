import { CookieOptions, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

/** Shared cookie config for the auth token (HTTP-only, 7-day life). */
const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

/**
 * POST /api/auth/register — creates an account with the selected role and
 * returns the safe user. Does not log the user in (no cookie set).
 */
const register = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.register(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'Registration successful',
    data: user,
  });
});

/**
 * POST /api/auth/login — verifies credentials, sets the HTTP-only token cookie,
 * and returns the safe user (role included for the frontend to derive UI).
 */
const login = catchAsync(async (req: Request, res: Response) => {
  const { token, user } = await authService.login(req.body);
  res.cookie('token', token, cookieOptions);
  sendResponse(res, {
    statusCode: 200,
    message: 'Login successful',
    data: user,
  });
});

/**
 * POST /api/auth/logout — clears the auth cookie. Idempotent.
 */
const logout = catchAsync(async (_req: Request, res: Response) => {
  res.clearCookie('token', { ...cookieOptions, maxAge: undefined });
  sendResponse(res, {
    statusCode: 200,
    message: 'Logout successful',
    data: null,
  });
});

/**
 * GET /api/auth/me — returns the authenticated user (from the verified token).
 */
const me = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.getMe(req.user!._id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Current user fetched',
    data: user,
  });
});

export const authController = {
  register,
  login,
  logout,
  me,
};
