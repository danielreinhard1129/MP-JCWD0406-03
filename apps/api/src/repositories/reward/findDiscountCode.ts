import prisma from '@/prisma';

export const findDiscountCode = async (couponCode: string) => {
  try {
    const result = await prisma.couponDiscount.findUnique({
      where: { couponCode },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
