import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const eventById = await getEventByIdAction(req.body);
      return res.status(eventById.status).send(eventById);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
