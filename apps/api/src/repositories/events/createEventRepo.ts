import prisma from '@/prisma';
import { IEvent } from '@/typeapi/event.type';

export const createEventRepo = async (data: IEvent) => {
  try {
    const {
      title,
      price,
      userId,
      dateTime,
      location,
      description,
      availableSeat,
      banner,
      category,
      booked,
    } = data;
    const newEvent = await prisma.event.create({
      data: {
        title,
        userId,
        price,
        dateTime,
        location,
        description,
        availableSeat,
        banner,
        category,
        booked,
      },
    });

    return newEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
