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
}
