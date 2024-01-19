import { useReferralCodeAction } from '@/actions/reward/useReferralCodeAction';
import { NextFunction, Request, Response } from 'express';

export class RewardController {
  async useReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, referralCode } = req.body;
      const result = await useReferralCodeAction(userId, referralCode);
      return res.send(result)
    } catch (error) {
      next(error);
    }
  }
}
