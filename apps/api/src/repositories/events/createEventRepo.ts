import prisma from '@/prisma';
import { IEvent } from '@/typeapi/event.type';

export const createEventRepo = async (data: IEvent) => {
  try {
    const {
      tittle,
      price,
      dateTime,
      location,
      description,
      availableSeat,
      banner,
      category,
    } = data;
    const newEvent = await prisma.event.create({
      data: {
        tittle,
        price,
        dateTime,
        location,
        description,
        availableSeat,
        banner,
        category,
      },
    });

    return newEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
