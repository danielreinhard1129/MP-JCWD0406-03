import prisma from '@/prisma';
import React from 'react';

const getTransactionByEventIdRepo = async (eventId: number) => {
  try {
    const result = await prisma.transaction.findMany({
      where: {
        eventId,
      },
    });
    return result
  } catch (error) {}
};

export default getTransactionByEventIdRepo;
