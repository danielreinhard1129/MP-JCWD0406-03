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
  userId: number;
  pointEarned: number;
  dateEarned?: Date;
  expiresOn: Date;
}
