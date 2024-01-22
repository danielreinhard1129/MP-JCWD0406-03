import { createEventRepo } from '@/repositories/events/createEventRepo';
import { IEvent } from '@/typeapi/event.type';

export const createEventAction = async (data: IEvent) => {
  try {
    await createEventRepo(data);

    return {
      status: 200,
      message: 'Create event success',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
