export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  nameOrganization: string;
  email: string;
  role: string,
  referralCode: string;
  phoneNumber: string;
  password: string;
}

export interface ILogin {
  phoneNumberOrEmail: string,
  password: string
}


