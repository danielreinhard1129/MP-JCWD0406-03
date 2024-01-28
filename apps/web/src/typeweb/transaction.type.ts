import { IEvent } from './event.type';
import { IUser } from './user.type';

export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId?: number;
  qty: number;
  paymentProof?: string | null;
  total: number;
  pointsUsed: number;
  createdAt: Date;
  updatedAt: Date | null;
  status: IStatus;
  user: IUser;
  event: IEvent;
}

interface IStatus {
  id: number;
  title: string;
}
