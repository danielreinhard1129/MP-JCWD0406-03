export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string,
  codeReferral: string;
  phoneNumber: string;
  password: string;
}

export interface ILogin {
  phoneNumberOrEmail: string,
  password: string
}
