import { EventController } from '@/controllers/events.controller';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;
  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEvents);
    this.router.post('/', this.eventController.createEvent);
    this.router.get('/:id', this.eventController.getEventById);
    this.router.get(
      '/filter/category',
      this.eventController.getEventsByCategory,
    );
    this.router.get('/filter/date', this.eventController.getEventsByDate);
  }
  getRouter(): Router {
    return this.router;
  }
}
