import { UserController } from '@/controllers/users.controller';
import { verifyToken } from '@/middlewares/jwtVerifyToken';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;
  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.post('/register', this.userController.register);
    this.router.post('/login', this.userController.login);
    this.router.get('/keep-login',verifyToken, this.userController.keepLogin);
    this.router.post('/forgot-password', this.userController.forgotPassword);
    this.router.get('/verify', verifyToken, this.userController.isValid);
    this.router.post('/reset-password', verifyToken, this.userController.updatePasswordUser);
  }
  getRouter(): Router {
    return this.router;
  }
}
