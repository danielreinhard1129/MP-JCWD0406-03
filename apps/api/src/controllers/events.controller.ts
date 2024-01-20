import { createEventAction } from '@/actions/events/createEventAction';
import { allEventsAction } from '@/actions/events/getAllEventAction';
import { getEventsByCategoryAction } from '@/actions/events/getEventByCategoryAction';
import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { getEventsByDateAction } from '@/actions/events/getEventsByDateAction';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await allEventsAction();
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const addResult = await createEventAction(data);
      res.status(addResult.status).send(addResult);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getEventById(req: Request, res: Response, next: NextFunction) {
    try {
      const eventId = parseInt(req.params.id, 10);
      const event = await getEventByIdAction(eventId);
      if (event) {
        res.status(200).send(event);
      } else {
        res.status(404).send({ message: 'Event not found' });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getEventsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.query;
      const result = await getEventsByCategoryAction(category as string);

      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const { start, end } = req.query;
      const result = await getEventsByDateAction(
        start as string,
        end as string
      );
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
