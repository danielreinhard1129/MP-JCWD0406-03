import { forgotPasswordAction } from '@/actions/users/forgotPasswordAction';
import { getAllUserAction } from '@/actions/users/getAllUserAction';
import { keepLoginAction } from '@/actions/users/keepLoginAction';
import { loginAction } from '@/actions/users/loginAction';
import { refreshTokenAction } from '@/actions/users/refreshTokenAction';
import { registerAction } from '@/actions/users/registerAction';
import { updatePasswordAction } from '@/actions/users/updatePasswordAction';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const register = await registerAction(req.body);
      return res.status(register.status).send(register);
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const login = await loginAction(req.body);
      return res.status(login.status).send(login);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const result = await refreshTokenAction(refreshToken);
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async isValid(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).send(true);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await keepLoginAction(req?.user);
      res.status(data.status).send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await getAllUserAction();
      res.send(data);
    } catch (error) {}
  }

  async updatePasswordUser(req: Request, res: Response, next: NextFunction) {
    try {
      const update = await updatePasswordAction(req.body);
      res.status(update.status).send(update);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('test');
      const result = await forgotPasswordAction(req.body.email);

      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
