import { TransactionController } from '@/controllers/transaction.controller';
import { upload } from '@/helper/multer';
import { verifyToken } from '@/middlewares/jwtVerifyToken';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;
  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post(
      '/',
      verifyToken,
      this.transactionController.createTransaction,
    );
    this.router.post(
      '/:id',
      verifyToken,
      upload.single('image'),
      this.transactionController.sendProofOfPayment,
    );
    this.router.get(
      '/',
      verifyToken,
      this.transactionController.getAllTransaction,
    );
    this.router.get(
      '/:id',
      verifyToken,
      this.transactionController.getByIdTransaction,
    );
    this.router.patch(
      '/:id',
      verifyToken,
      this.transactionController.updateTransaction,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
