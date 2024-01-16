import { UserController } from '@/controllers/users.controller';
import { uploadImage } from '@/helper/uploadimage';
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
    this.router.post('/register', this.userController.Register)
    this.router.post('/upload-image', uploadImage.single('image'),this.userController.uploadImage)
  }
  getRouter(): Router {
    return this.router;
  }

}
