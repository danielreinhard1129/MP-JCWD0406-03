import { registerAction } from '@/actions/users/registerAction';
import { uploadImageAction } from '@/actions/users/uploadImageAction';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async Register(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('tersebut');

      const register = await registerAction(req.body);
      return res.status(register.status).send(register);
    } catch (error) {
        console.log(error);
        
      next(error);
    }
  }

  async uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await uploadImageAction(
        parseInt(req.body.userId,10),
        req.file?.path as string,
      );
      res.status(data.status).send(data)
    } catch (error) {
        console.log(error);
        next(error)
    }
  }

  async SendOtp(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
        console.log(error);
        next(error)
    }
  }
}
