import { RewardController } from '@/controllers/reward.controller';
import { verifyToken } from '@/middlewares/jwtVerifyToken';
import { Router } from 'express';

export class RewardRouter {
  private router: Router;
  private rewardController : RewardController

  constructor() {
    this.rewardController= new RewardController()
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/:userId",verifyToken,this.rewardController.getReferralPointsByUserId)
    this.router.patch("/:userId",verifyToken,this.rewardController.updateReferralPoints)
    this.router.post('/check-referral-code',this.rewardController.checkReferralCode)
    this.router.post('/use-referral-code',this.rewardController.useReferralCode)
  }

  getRouter(): Router {
    return this.router;
  }
}
