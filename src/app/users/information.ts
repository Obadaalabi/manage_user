import { IUser } from "./user";

export interface IInformation{
  page:number,
  per_page:number,
  total:number,
  total_pages:number,
  data:IUser[] ,
  support:Isupport,

}

export interface Isupport{
  url:string,
  text:string,
}
