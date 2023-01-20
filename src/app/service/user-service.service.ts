import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IInformation } from '../users/information';
import { IUserAdd } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl='https://reqres.in/api/users?page=';
  private addUrl='https://reqres.in/api/users';

constructor(private http :HttpClient) { }



getData(page:number):Observable<IInformation>{
  return  this.http.get<IInformation>(this.userUrl+page);
}


add(data:IUserAdd):Observable<IUserAdd>{
  return  this.http.post<IUserAdd>(this.addUrl,data).pipe(
    catchError(err=>{
      let message='';
      if(err.error instanceof ErrorEvent){
        message=`Clientside Error happend: ${err.error.message}`;
      }
      else{
        message=`Name or job Error
        Please confirm the information before trying again`;
      }
      alert(message);
      return throwError(()=>message);
    })
  );
}


}
