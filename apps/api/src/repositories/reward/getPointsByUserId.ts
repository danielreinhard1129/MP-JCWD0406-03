import prisma from '@/prisma'
import React from 'react'

const getPointsByUserId = async (userId:number) => {
  try {
    const data = await prisma.referralPoints.findUnique({
    where:{
        userId
    }
    })
    return data
  } catch (error) {
    
  }
}

export default getPointsByUserId