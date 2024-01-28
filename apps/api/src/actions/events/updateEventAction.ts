import { updateEventRepo } from '@/repositories/events/updateEventRepo';
import { IEvent } from '@/typeapi/event.type';

export const updateEventAction = async (id: number, body: IEvent) => {
  try {
    const event = await updateEventRepo(id, body);
    return {
      status: 200,
      message: 'Success Update',
      data: event,
    };
  } catch (error) {
    throw error;
  }
};
