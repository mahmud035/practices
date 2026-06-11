import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { ApiError } from '../../utils/ApiError';
import { IAuthPayload, IUser, TUserRole } from './auth.interface';
import { User } from './auth.model';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: TUserRole;
}

interface LoginInput {
  email: string;
  password: string;
}

type SafeUser = Pick<IUser, 'name' | 'email' | 'role'> & { _id: string };

const toSafeUser = (user: IUser): SafeUser => ({
  _id: user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
});

/**
 * Signs a JWT carrying the minimal `{ _id, role }` claim used for RBAC.
 * Role lives in the token so authorization never needs a DB round-trip.
 */
const signToken = (payload: IAuthPayload): string => {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN ?? '7d') as SignOptions['expiresIn'],
  };
  return jwt.sign(payload, process.env.JWT_SECRET as string, options);
};

/**
 * Registers a new user with a hashed password. Rejects (409) when the email
 * is already taken. Returns the created user without the password hash.
 */
const register = async (input: RegisterInput): Promise<SafeUser> => {
  const existing = await User.findOne({ email: input.email });
  if (existing) {
    throw new ApiError(409, 'An account with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(input.password, 10);
  const user = await User.create({ ...input, password: hashedPassword });

  return toSafeUser(user);
};

/**
 * Verifies credentials and returns a signed token plus the safe user.
 * Uses a single generic "Invalid credentials" message for both unknown email
 * and wrong password to avoid user enumeration.
 */
const login = async (input: LoginInput): Promise<{ token: string; user: SafeUser }> => {
  const user = await User.findOne({ email: input.email }).select('+password');
  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const matches = await bcrypt.compare(input.password, user.password);
  if (!matches) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = signToken({ _id: user._id.toString(), role: user.role });
  return { token, user: toSafeUser(user) };
};

/**
 * Loads the current user by id (from the verified token). Rejects (404) if the
 * account no longer exists. Backs `GET /api/auth/me`.
 */
const getMe = async (userId: string): Promise<SafeUser> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return toSafeUser(user);
};

export const authService = {
  register,
  login,
  getMe,
};
