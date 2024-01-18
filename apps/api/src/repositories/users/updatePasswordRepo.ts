import prisma from '@/prisma';

export const updatePasswordRepo = async (password: string, email: string) => {
  try {
    const result = await prisma.user.update({
      where: {
        email,
      },
      data:{
        password
      } 
    });
    return result;
  } catch (error) {
    throw error;
  }
};
