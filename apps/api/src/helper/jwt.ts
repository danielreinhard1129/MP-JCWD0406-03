import { PayloadToken } from '@/middlewares/jwtVerifyToken';
import jwt, { Secret, TokenExpiredError } from 'jsonwebtoken';

const secretKey: Secret = process.env.JWT_SECRET_KEY!;
const secretKeyRefreshToken: Secret = process.env.JWT_SECRET_REFRESH_TOKEN!;

export const createToken = (data: {}): string => {
  const expiresIn = '1h';
  return jwt.sign({ data }, secretKey, { expiresIn });
};

export const createRefreshToken = (data: {}) => {
  const expiresIn = '1d';
  return jwt.sign({ data }, secretKeyRefreshToken, { expiresIn });
};

interface IJwt {
  data: PayloadToken
}

export const verifyRefreshToken = (refreshToken: string) => {
  const result = jwt.verify(
    refreshToken,
    secretKeyRefreshToken,
    (err, payload) => {
      if (err) {
        if (err instanceof TokenExpiredError) {
          return { status: 401, message: 'Token expired' };
        } else {
          return { status: 401, message: 'Invalid token' };
        }
      }
      const {data} = payload as IJwt
      
      return  data.email
    },
  );
  return result;
};
