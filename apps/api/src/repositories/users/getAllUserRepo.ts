import prisma from '@/prisma';

export const getAllUserRepo = async () => {
  try {
    return await prisma.user.findMany({
      include: { role: true, cuponDiscount: true, points: true },
    });
  } catch (error) {
    throw error;
  }
};
