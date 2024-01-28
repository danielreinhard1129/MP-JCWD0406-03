import getTransactionByUserIdRepo from '@/repositories/transactions/getTransactionByUserIdRepo';

const getTransactionByUserIdAction = async (userId: number) => {
  try {
    let transactions: any = [];
    const data = await getTransactionByUserIdRepo(userId);
    data.forEach((value) => {
      if (value.Transaction.length > 0) {
        transactions.push(value.Transaction);
      }
    });

    return {
      status: 200,
      message: 'Success get Data',
      transactions,
    };
  } catch (error) {
    throw error;
  }
};

export default getTransactionByUserIdAction;
