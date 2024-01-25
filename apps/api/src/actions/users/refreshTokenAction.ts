import { createRefreshToken, createToken, verifyRefreshToken } from '@/helper/jwt';
import { PayloadToken, verifyToken } from '@/middlewares/jwtVerifyToken';

export const refreshTokenAction = async (refreshToken: any) => {
  try {
    const isValid = verifyRefreshToken(refreshToken);    
    const newToken = createToken({email: isValid})
    const newRefreshToken = createRefreshToken({email:isValid})
    return {
        status: 200,
        token: newToken,
        refreshToken: newRefreshToken
    }
  } catch (error) {
    throw error;
  }
};
