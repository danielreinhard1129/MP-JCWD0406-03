import prisma from '@/prisma';
import { IUser } from '@/typeapi/user.type';

export const createUser = async (body: IUser) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      codeReferral,
      email,
      password,
      role,
    } = body;
    const result = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        codeReferral,
        phoneNumber,
        password,
        role: {
          create: {
            name: role,       
          },
        },
      },
      include: {
        role: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
