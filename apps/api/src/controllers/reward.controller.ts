import { checkReferralCodeAction } from '@/actions/reward/checkReferralCodeAction';
import { createDiscountAction } from '@/actions/reward/createDiscountAction';
import getPointsByUserIdAction from '@/actions/reward/getPointsByUserIdAction';
import updateReferralPointsAction from '@/actions/reward/updateReferralPointsAction';
import { useReferralCodeAction } from '@/actions/reward/useReferralCodeAction';
import updatePointReferralRepo from '@/repositories/reward/updatePointReferralRepo';
import { NextFunction, Request, Response } from 'express';

export class RewardController {
  async checkReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { referralCode, userId } = req.body;
      const result = await checkReferralCodeAction(referralCode, userId);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async useReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { referralCode, userId } = req.body;
      const result = await useReferralCodeAction(referralCode, userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createDiscount(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const addResult = await createDiscountAction(data);
      res.status(addResult.status).send(addResult);
    } catch (error) {
      console.log(error);
    } 
  }
  
  async getReferralPointsByUserId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { userId } = req.params;
      const result = await getPointsByUserIdAction(parseInt(userId, 0));
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
  
  async updateReferralPoints(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const result = await updateReferralPointsAction(
        parseInt(userId, 0),
        req.body,
      );
      res.status(result.status).send(result);
    } catch (error) {}
  }
}
