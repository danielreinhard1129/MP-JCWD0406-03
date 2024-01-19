import prisma from '@/prisma';

export const getEventById = async (id: number) => {
  try {
    const allEvent = await prisma.event.findMany({
      where: { id },
    });
    return allEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
