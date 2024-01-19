import prisma from '@/prisma';

export const getAllUserRepo = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw error;
  }
};
