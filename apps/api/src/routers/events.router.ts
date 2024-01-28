import { EventController } from '@/controllers/events.controller';
import { verifyToken } from '@/middlewares/jwtVerifyToken';
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
    this.router.post('/', verifyToken, this.eventController.createEvent);
    this.router.get('/:id', this.eventController.getEventById);
    this.router.get(
      '/filter/category',
      this.eventController.getEventsByCategory,
    );
    this.router.get('/filter/date', this.eventController.getEventsByDate);
    this.router.patch('/:id', verifyToken, this.eventController.updateEvent);
  }
  getRouter(): Router {
    return this.router;
  }
}
