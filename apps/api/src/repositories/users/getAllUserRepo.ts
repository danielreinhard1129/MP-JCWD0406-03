import prisma from '@/prisma';

export const getAllUserRepo = async () => {
  try {
    return await prisma.user.findMany({include:{role:true}});
  } catch (error) {
    throw error;
  }
};
