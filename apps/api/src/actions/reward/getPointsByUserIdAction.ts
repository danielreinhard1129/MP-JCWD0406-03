import getPointsByUserId from '@/repositories/reward/getPointsByUserId';

const getPointsByUserIdAction = async (userId: number) => {
  try {
    const data = await getPointsByUserId(userId);
    if (!data) return { status: 404, message: 'userId is not found' };
    return {
      status: 200,
      message: 'Success get data',
      data,
    };
  } catch (error) {
    throw error;
  }
};

export default getPointsByUserIdAction;
