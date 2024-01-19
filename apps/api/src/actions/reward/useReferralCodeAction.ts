import { findReferralCode } from '@/repositories/reward/findReferralCode';

export const useReferralCodeAction = async (
  userId: number,
  referralCode: string,
) => {
  try {
    let isExist = await findReferralCode(referralCode);
    if (!isExist) return { status: 404, message: 'Referral Code is not found' };
    return {
      status: 200,
      message: 'Referral Code is Valid',
    };
  } catch (error) {
    throw error;
  }
};
