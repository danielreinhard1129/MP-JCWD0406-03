import { findReferralCode } from '@/repositories/reward/findReferralCode';
import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointsByReferredId';
import { findUserById } from '@/repositories/users/findUserById';

export const checkReferralCodeAction = async (
  referralCode: string,
  userId: number,
) => {
  try {
    
    const userReferral = await findReferralCode(referralCode);
    const isHasUse = await findReferralPointsByReferredId(userId);
    const user = await findUserById(userId);
    if (!userReferral) return { status: 404, message: 'referral is not found' };
    
    if(userReferral.id === userId) return {status:404, message: 'referral is not found'}
    if (!user) return { status: 404, message: 'user is not found' };
    if (isHasUse) return { status: 409, message: 'code referal has used' };

    return {
      status: 200,
      message: 'Referral Code is Valid',
    };
  } catch (error) {
    throw error;
  }
};
