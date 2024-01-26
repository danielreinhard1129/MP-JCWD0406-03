import { getByIdTransactionRepo } from '@/repositories/transactions/getByIdTransactionRepo';

export const getByIdTransactionAction = async (id: number) => {
  try {
    const data = await getByIdTransactionRepo(id);
    
    return {
      status: 200,
      message: 'success',
      data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
