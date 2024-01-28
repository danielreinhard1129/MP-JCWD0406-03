import prisma from '@/prisma'

export const findReferralPointsByReferredId = async (userId:number) => {
  try {
    const result = await prisma.referralPoints.findUnique({
        where: {
            userId
        }
    })
    return result
  } catch (error) {
    
  }
}

