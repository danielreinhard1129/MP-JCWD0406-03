import prisma from "@/prisma"
import { IPointsReferral } from "@/typeapi/reward.type"

export const createPointsReferral = async(data: IPointsReferral) => {
  try {
    const {userId,pointEarned,expiresOn} = data
    const result = await prisma.referralPoints.create({
      data: {
        userId,
        pointEarned,
        expiresOn
      }
    })
    return result
  } catch (error) {
    
  }
}
