import { checkReferralCodeAction } from '@/actions/reward/checkReferralCodeAction';
import { useReferralCodeAction } from '@/actions/reward/useReferralCodeAction';
import { NextFunction, Request, Response } from 'express';

export class RewardController {
  async checkReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const {  referralCode, userId } = req.body;
      const result = await checkReferralCodeAction(referralCode,userId);
      return res.status(result.status).send(result)
    } catch (error) {
      next(error);
    }
  }

  async useReferralCode(req: Request, res: Response, next: NextFunction){
    try {
      const {referralCode, userId} = req.body
      const result = await useReferralCodeAction(referralCode,userId)
      res.status(result.status).send(result)
    } catch (error) {
      
    }
  }
}
