import { createEventAction } from '@/actions/events/createEventAction';
import filterByLocationCategoryTitleAction from '@/actions/events/filterByLocationCategoryTitleAction';
import { allEventsAction } from '@/actions/events/getAllEventAction';
import { getEventsByCategoryAction } from '@/actions/events/getEventByCategoryAction';
import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { getEventsByDateAction } from '@/actions/events/getEventsByDateAction';
import { updateEventAction } from '@/actions/events/updateEventAction';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    const { category } = req.query;

    try {
      let result;
      if (category !== '') {
        result = await getEventsByCategoryAction(category as string);
      } else {
        result = await allEventsAction();
      }
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
        end as string,
      );
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const result = await updateEventAction(id, req.body);
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async debounceDiscovery(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('queryyyyyyy', req.query);

      // const page = Number((req.query.page as string) || 1);
      // const limit = Number((req.query.pageSize as string) || 4);

      const result = await filterByLocationCategoryTitleAction();

      res.status(result.status).send(result);
      res.status(200).send('success');
    } catch (error) {
      next(error);
    }
  }

  // async addNewImages(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { files } = req;

  //     if (!files?.length) throw new Error("No file uploaded");

  //     return res.status(200).send(`File successfully uploaded`);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
