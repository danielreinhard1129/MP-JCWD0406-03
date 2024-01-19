import { getEventById } from "@/repositories/events/getEventById";

export const getEventByIdAction = async (id: number) => {
  try {
    const event = await getEventById(id);
    if (!event) {
      return {
        status: 400,
        message: "Event not found",
      };
    }
    return {
      status: 200,
      message: "success",
      data: event,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
