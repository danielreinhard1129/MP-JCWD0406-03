export interface IDiscount {
  id?: number;
  userId: number;
  couponCode: string;
  discountPersentase: number;
  dateReceived?: Date;
  expiresOn: Date;
}

export interface IPointsReferral {
  id?: number;
  referrerUserId: number;
  referredUserId: number;
  pointEarned: number;
  dateEarned?: Date;
  expiresOn: Date;
}
