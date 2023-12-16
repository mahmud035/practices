import { NextRequest } from 'next/server';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { jwtHelper } from './jwtHelper';

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const accessToken = request.cookies.get('accessToken')?.value || '';

    const user = jwtHelper.verifyToken(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET as Secret
    ) as JwtPayload;

    //* return userId from token
    return user.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
