import prisma from '@/prisma';
import { IUser } from '@/typeapi/user.type';

export const uploadImageRepo = async (userId: number, pathImage:string) => {
  try {
    const result = await prisma.profile_Img.create({
      data:{
        userId,
        pathImage
      }
    })
    return result;
  } catch (error) {
    throw error;
  }
};
