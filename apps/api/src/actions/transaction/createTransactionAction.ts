import prisma from '@/prisma';
import { updateEventRepo } from '@/repositories/events/updateEventRepo';
import createTransactionRepo from '@/repositories/transactions/createTransactionRepo';
import { ITransaction } from '@/typeapi/transaction.type';

export const createTransactionAction = async (data: ITransaction) => {
  try {
    const result = await createTransactionRepo(data);

    await updateEventRepo(data.eventId, { booked: { increment: data.qty } });
    await prisma.event.update({
      where: { id: data.eventId },
      data: { booked: { increment: data.qty } },
    });

    return {
      data: result,
      status: 200,
      message: 'Create Transaction Success',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
