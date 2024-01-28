import prisma from '@/prisma';
import { IEvent } from '@/typeapi/event.type';

export const updateEventRepo = async (id: number, body: any) => {
  try {
    const result = await prisma.event.update({
      where: { id },
      data: body,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
