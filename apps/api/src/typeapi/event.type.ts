export interface IEvent {
  id: number;
  title: string;
  userId: number;
  price: number;
  dateTime: Date;
  location: string;
  description: string;
  availableSeat: number;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  banner: string;
  booked: number;
}
