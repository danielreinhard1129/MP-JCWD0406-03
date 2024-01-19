import { excludeFields } from '@/helper/excludeFields';
import { findUserByEmail } from '@/repositories/users/findUserByEmail';
import { findUserById } from '@/repositories/users/findUserById';

export const keepLoginAction = async (req: any) => {
  try {
    const email = req.data.email;

    const user = await findUserByEmail(email);
    if (!user) throw new Error('User Tidak ditemukan');
    const data = excludeFields(user, ['password']);
    return {
      status: 200,
      message: 'Succes Keep Login',
      data,
    };
  } catch (error) {
    throw error;
  }
};
