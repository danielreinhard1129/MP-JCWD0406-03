export interface IEvent {
  id: number;
  title: string;
  price: number;
  dateTime: Date;
  location: string;
  description: string;
  availableSeat: number;
  createdAt: Date;
  updatedAt: Date | null;
  category: string;
  banner: string;
  booked: number;
}
