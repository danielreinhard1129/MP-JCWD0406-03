import createTransactionRepo from '@/repositories/transactions/createTransactionRepo';
import { ITransaction } from '@/typeapi/transaction.type';

export const createTransactionAction = async (data: ITransaction) => {
  try {
    const result = await createTransactionRepo(data);

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
