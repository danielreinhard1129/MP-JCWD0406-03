export interface IEvent {
  id: number;
  tittle: string;
  price: number;
  dateTime: Date;
  location: string;
  description: string;
  availableSeat: number;
  createdAt: Date;
  updatedAt: Date | null;
  category: string;
  banner: string;
}
