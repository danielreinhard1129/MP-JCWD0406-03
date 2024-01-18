import { hashPaswword } from '@/helper/bcrypt';
import { findUserByEmail } from '@/repositories/users/findUserByEmail';
import { updatePasswordRepo } from '@/repositories/users/updatePasswordRepo';
import { IUser } from '@/typeapi/user.type';

export const updatePasswordAction = async (body: IUser) => {
  try {
    const isExist = await findUserByEmail(body.email);
    if (!isExist) return { status: 404, message: 'Email is not found' };
    body.password = await hashPaswword(body.password);
    await updatePasswordRepo(body.password, body.email);
    return {
      status: 201,
      message: 'Success Update Password',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
