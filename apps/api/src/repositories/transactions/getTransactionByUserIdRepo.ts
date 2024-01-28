import prisma from '@/prisma';

const getTransactionByUserIdRepo = async (userId: number) => {
  try {
    const data = await prisma.event.findMany({
      where: {
        userId,
      },
      include: {
        Transaction: { include: { user: true ,status:true} },
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export default getTransactionByUserIdRepo;
