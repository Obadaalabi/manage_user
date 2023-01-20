import { Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import { IInformation } from './information';
import { IUser } from './user';
import { UserService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user_list.component.html',

})
export class UserListComponent implements OnInit   {

  userList:IUser[]=[];
  dataList: IInformation|undefined;
  currentPage:number=1;




  constructor(private userService:UserService,private router:Router) { }


  ngOnInit() :void{

   this.userService.getData(this.currentPage).subscribe({
    next:reslt=>{this.userList=reslt.data;
      this.dataList=reslt ;
       }});
  }

  pageChange(numberPage:number){
    this.currentPage=numberPage;
    this.router.navigate(['/users/',this.currentPage]);
    this.userService.getData(this.currentPage).subscribe({
      next:reslt=>{this.userList=reslt.data;
        this.dataList=reslt ;}});
  }


}
