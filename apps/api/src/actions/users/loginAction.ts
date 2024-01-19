import { comparePasswords } from '@/helper/bcrypt';
import { excludeFields } from '@/helper/excludeFields';
import { createToken } from '@/helper/jwt';
import { findUserByEmail } from '@/repositories/users/findUserByEmail';
import { findUserByPhoneNumber } from '@/repositories/users/findUserByPhoneNumber';
import { ILogin } from '@/util/user.type';

export const loginAction = async (body: ILogin) => {
  try {
    let user;
    if (body.phoneNumberOrEmail.includes('@')) {
      user = await findUserByEmail(body.phoneNumberOrEmail);
      if (!user) return { status: 404, message: 'Email is not Found' };
    } else {
      user = await findUserByPhoneNumber(body.phoneNumberOrEmail);
      if (!user) return { status: 404, message: 'phoneNumber is not Found' };
    }

    if (user.isDeleted) {
      return {
        status: 404,
        message: 'Account has deleted',
      };
    }

    const isPasswordValid = await comparePasswords(
      body.password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
        status: 400,
        message: 'Invalid credentials',
      };
    }

    const token = createToken({ email: user.email });
    const data = excludeFields(user, ['password']);

    return {
      status: 200,
      message: 'Success Login',
      data,
      token,
    };
  } catch (error) {
    throw error;
  }
};
