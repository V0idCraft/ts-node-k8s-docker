export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IUserAllResponse {
  data: IUser[];
  status: string;
}
