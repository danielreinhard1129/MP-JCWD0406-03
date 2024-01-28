import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointsByReferredId'
import updatePointReferralRepo from '@/repositories/reward/updatePointReferralRepo'
import { IPointsReferral } from '@/typeapi/reward.type'

const updateReferralPointsAction = async (userId: number,data:IPointsReferral) => {
const user = await findReferralPointsByReferredId(userId)
if(!user) return {status:404, message:" Not found Point Referral"}
  await updatePointReferralRepo(data,userId)
  return {
    status: 200,
    message: "Success update data"
  }
}

export default updateReferralPointsAction