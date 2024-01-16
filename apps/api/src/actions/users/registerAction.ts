import { hashPaswword } from '@/helper/bcrypt';
import { nanoid } from '@/helper/nanoid';
import { createUser } from '@/repositories/users/createUserRepo';
import { findUserByEmail } from '@/repositories/users/findUserByEmail';
import { findUserByPhoneNumber } from '@/repositories/users/findUserByPhoneNumber';

import { IUser } from '@/typeapi/user.type';

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
    body.codeReferral = nanoid()

    await createUser(body);

    return {
      status: 200,
      message: 'Success Register',
    };
  } catch (error) {
    throw error;
  }
};
