import prisma from '@/prisma';

export const getAllUserRepo = async () => {
  try {
    return await prisma.user.findMany({
      include: { role: true, cuponDiscount: true, referrerUser: true },
    });
  } catch (error) {
    throw error;
  }
};
