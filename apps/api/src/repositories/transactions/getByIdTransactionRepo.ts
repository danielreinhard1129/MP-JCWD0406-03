import prisma from '@/prisma';

export const getByIdTransactionRepo = async (id: number) => {
  try {
    const result = await prisma.transaction.findUnique({
      where: {
        id,
        
      },
    });    
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
