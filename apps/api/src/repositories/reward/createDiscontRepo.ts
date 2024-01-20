import prisma from '@/prisma';
import { IDiscount } from '@/typeapi/reward.type';

export const createDiscontRepo = async (data: IDiscount) => {
  try {
    const { couponCode, userId, expiresOn, discountPersentase } = data;
    const result = await prisma.couponDiscount.create({
      data: {
        userId,
        couponCode,
        discountPersentase,
        expiresOn,
      },
    });
    return result;
  } catch (error) {}
};
