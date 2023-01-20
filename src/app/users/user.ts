export interface IUser{

  id:number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface IUserLogin{
  email: string,
  password: string,
}

export interface IUserAdd{
  name: string,
  job: string,
}
