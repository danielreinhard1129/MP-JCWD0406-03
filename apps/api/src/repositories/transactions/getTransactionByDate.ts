import prisma from '@/prisma';
import React from 'react';

const getTransactionByDate = async (startDate: Date, endDate: Date) => {
  try {
    const data = await prisma.transaction.findMany({
      where: {
        // eventId,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export default getTransactionByDate;
