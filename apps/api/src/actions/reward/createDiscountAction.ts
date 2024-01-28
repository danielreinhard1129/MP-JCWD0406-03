// createDiscount.action.ts
import { createDiscontRepo } from '@/repositories/reward/createDiscontRepo';
import { IDiscount } from '@/typeapi/reward.type';

export const createDiscountAction = async (data: IDiscount) => {
  try {
    await createDiscontRepo(data);
    return {
      status: 200,
      message: 'Create discount success',
    };
  } catch (error) {
    throw error;
  }
};
