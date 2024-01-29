import getTransactionByUserIdRepo from '@/repositories/transactions/getTransactionByUserIdRepo';
import { ITransaction } from '@/typeapi/transaction.type';

const getTransactionByUserIdAction = async (userId: number) => {
  try {
    const data = (await getTransactionByUserIdRepo(userId)).flatMap((value) => value.Transaction);

    return {
      status: 200,
      message: 'Success get Data',
      data,
    };
  } catch (error) {
    throw error;
  }
};

export default getTransactionByUserIdAction;
