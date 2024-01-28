export interface IPointsReferral {
    id?: number;
    userId: number;
    pointEarned: number;
    dateEarned?: Date;
    expiresOn: Date;
  }