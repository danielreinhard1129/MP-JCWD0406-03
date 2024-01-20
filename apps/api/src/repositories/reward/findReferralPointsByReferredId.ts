import prisma from '@/prisma'

export const findReferralPointsByReferredId = async (userId:number) => {
  try {
    const result = await prisma.referralPoints.findUnique({
        where: {
            referredUserId : userId
        }
    })
    return result
  } catch (error) {
    
  }
}

