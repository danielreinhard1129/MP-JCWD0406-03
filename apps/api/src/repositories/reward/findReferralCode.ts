import prisma from '@/prisma'
import React from 'react'

export const findReferralCode = async (referralCode:string) => {
  try {
    const result = await prisma.user.findUnique({
        where: {
            referralCode
        }
    })
    return result
  } catch (error) {
    
  }
}

