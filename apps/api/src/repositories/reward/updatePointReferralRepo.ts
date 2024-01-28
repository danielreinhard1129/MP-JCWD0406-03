import prisma from '@/prisma';
import { IPointsReferral } from '@/typeapi/reward.type';
import React from 'react';

const updatePointReferralRepo = async (data:IPointsReferral, userId: number) => {
  try {
    console.log(data);
    
    const result = await prisma.referralPoints.updateMany({
      where: {
        userId,
      },
      data
    });
    return result
  } catch (error) {
    throw error
  }
};

export default updatePointReferralRepo;
