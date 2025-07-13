import jwt, { Secret } from 'jsonwebtoken';

const createToken = (
  tokenData: object,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(tokenData, secret, {
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret);
};

export const jwtHelper = {
  createToken,
  verifyToken,
};
