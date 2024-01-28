import prisma from '@/prisma';

export const getAllTransactionRepo = async () => {
  try {
    const allTransaction = await prisma.transaction.findMany({
      include: {
        event: true,
        user: true,
        status: true,
      },
    });
    return allTransaction;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
