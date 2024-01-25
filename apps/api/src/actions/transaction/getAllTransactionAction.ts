import { getAllTransactionRepo } from '@/repositories/transactions/getAllTransactionRepo';

export const allTransactionAction = async () => {
  try {
    const allTransaction = await getAllTransactionRepo();
    return {
      status: 200,
      message: 'success',
      data: allTransaction,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
