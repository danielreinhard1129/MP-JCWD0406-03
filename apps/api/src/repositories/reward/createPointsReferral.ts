import prisma from "@/prisma"
import { IPointsReferral } from "@/typeapi/reward.type"

export const createPointsReferral = async(data: IPointsReferral) => {
  try {
    const {referredUserId,referrerUserId,pointEarned,expiresOn} = data
    const result = await prisma.referralPoints.create({
      data: {
        referredUserId,
        referrerUserId,
        pointEarned,
        expiresOn
      }
    })
  } catch (error) {
    
  }
}
