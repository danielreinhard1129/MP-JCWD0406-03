import prisma from '@/prisma'
import React from 'react'

const getEventByUserIdRepo = async (userId: number) => {
  try {
    const data = await prisma.event.findMany({
        where:{
            userId
        }
    })
    return data
  } catch (error) {
    throw error
  }
}

export default getEventByUserIdRepo