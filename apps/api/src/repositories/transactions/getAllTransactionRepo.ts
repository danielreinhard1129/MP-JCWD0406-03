import prisma from '@/prisma';

export const getAllTransactionRepo = async () => {
  try {
    const allTransaction = await prisma.event.findMany();
    return allTransaction;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
