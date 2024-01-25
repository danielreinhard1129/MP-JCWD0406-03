import prisma from '@/prisma';
import { ITransaction } from '@/typeapi/transaction.type';

export const createTransactionRepo = async (data: ITransaction) => {
  try {
    const { userId, eventId, qty, total, pointsUsed } = data;
    const newTransaction = await prisma.transaction.create({
      data: {
        userId,
        eventId,
        qty,
        total,
        pointsUsed,
      },
    });

    return newTransaction;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default createTransactionRepo;
