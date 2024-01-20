import { hashPaswword } from '@/helper/bcrypt';
import { excludeFields } from '@/helper/excludeFields';
import { createToken } from '@/helper/jwt';
import { nanoid } from '@/helper/nanoid';
import { createUser } from '@/repositories/users/createUserRepo';
import { findUserByEmail } from '@/repositories/users/findUserByEmail';
import { findUserByPhoneNumber } from '@/repositories/users/findUserByPhoneNumber';
import { IUser } from '@/util/user.type';

interface PayloadToken {
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: PayloadToken;
    }
  }
}

export const registerAction = async (body: IUser) => {
  try {
    const checkPhoneNumber = await findUserByPhoneNumber(body.phoneNumber);
    const checkEmail = await findUserByEmail(body.email);

    if (checkPhoneNumber) {
      return {
        status: 409,
        message: 'phone number has used',
      };
    }

    if (checkEmail) {
      return {
        status: 409,
        message: 'Email has used',
      };
    }

    body.password = await hashPaswword(body.password);
    if (body.role !== 'promoter') {
      body.referralCode = nanoid();
    }

    const user = await createUser(body);

    const token = createToken({ email: body.email });

    const data = excludeFields(user, ['password']);

    return {
      status: 200,
      message: 'Success Register',
      data,
      token,
    };
  } catch (error) {
    throw error;
  }
};
