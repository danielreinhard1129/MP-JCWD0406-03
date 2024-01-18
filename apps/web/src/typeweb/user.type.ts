export interface IUser {
    id:number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string
}

export type IUserRole = 'customer' | 'promoter'