import { getEventsByDateRepo } from '@/repositories/events/getEventsByDateRepo';

export const getEventsByDateAction = async (start: string, end: string) => {
  try {
    const events = await getEventsByDateRepo(start, end);
    return {
      status: 200,
      message: 'Sucsses',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
