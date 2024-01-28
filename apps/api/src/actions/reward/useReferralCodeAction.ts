import { createDiscontRepo } from '@/repositories/reward/createDiscontRepo';
import { findReferralCode } from '@/repositories/reward/findReferralCode';
import { findUserById } from '@/repositories/users/findUserById';
import { IDiscount, IPointsReferral } from '@/typeapi/reward.type';
import { addMonths, format } from 'date-fns';
import { createPointsReferral } from '../../repositories/reward/createPointsReferral';
import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointsByReferredId';
import { IUser } from '@/typeapi/user.type';
import updatePointReferralRepo from '@/repositories/reward/updatePointReferralRepo';

export const useReferralCodeAction = async (
  referralCode: string,
  userId: number,
) => {
  try {
    const userReferral = await findReferralCode(referralCode);
    const user = await findUserById(userId);
    if (!userReferral) return { status: 404, message: 'referral is not found' };
    if (userReferral.id === userId)
      return { status: 404, message: 'referral is not found' };
    if (!user) return { status: 404, message: 'user is not found' };
    const currentDate = new Date();

    const futureDate = addMonths(currentDate, 3);
    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

    const dataDiscount: IDiscount = {
      couponCode: `${referralCode}-Discount`,
      expiresOn: new Date(formattedDate),
      userId,
      discountPersentase: 10,
    };
    const userPoint = await findReferralPointsByReferredId(userReferral.id);
    if (!userPoint) {
      const dataPoints: IPointsReferral = {
        pointEarned: 10000,
        userId: userReferral.id,
        expiresOn: new Date(formattedDate),
      };
      await createPointsReferral(dataPoints);
    } else {
      console.log("11",userPoint.pointEarned);
      userPoint.pointEarned = userPoint.pointEarned + 10000;
      console.log("22",userPoint.pointEarned);

      await updatePointReferralRepo(userPoint, userPoint.userId);
    }
    await createDiscontRepo(dataDiscount);
    return {
      status: 200,
      message: 'Anda mendapatkan Discount 10%',
    };
  } catch (error) {
    throw error;
  }
};
