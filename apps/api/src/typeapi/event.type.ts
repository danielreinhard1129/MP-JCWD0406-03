export interface IEvent {
  id: number;
  event_name: string;
  price: string;
  dateTime: Date;
  location: string;
  description: string;
  availableSeat: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
}
