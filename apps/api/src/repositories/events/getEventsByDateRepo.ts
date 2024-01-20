import prisma from "@/prisma";

export const getEventsByDateRepo = async (start: string, end: string) => {
  try {
    const expenses = await prisma.event.findMany({
      where: {
        createdAt: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
    });

    return expenses;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
