export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
<<<<<<< HEAD
  role: string,
  codeReferral: string;
=======
  role: string;
  nameOrganization: string;
  referralCode: string;
>>>>>>> 7ab36c7055cf6312b30e672cce558beb519d64b6
  phoneNumber: string;
  password: string;
}

export interface ILogin {
<<<<<<< HEAD
  phoneNumberOrEmail: string,
  password: string
=======
  phoneNumberOrEmail: string;
  password: string;
>>>>>>> 7ab36c7055cf6312b30e672cce558beb519d64b6
}
