import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { IUser } from '../users/user';

@Component({
  selector: 'app-information_user',
  templateUrl: './information_user.component.html',
  styleUrls: ['./information_user.component.css']
})
export class Information_userComponent implements OnInit {
    user:IUser[]=[];
    id:any;
    numberPage:number=0;

  constructor(private activeRouter:ActivatedRoute,
               private userService:UserService) { }

  ngOnInit() {

   this.id=this.activeRouter.snapshot.paramMap.get('id');
   this.numberPage= Math.ceil(this.id/6);

   this.userService.getData(this.numberPage).subscribe({
    next:reslt=>{this.user=reslt.data;
    this.user=this.user.filter((u:IUser)=>
               u.id==this.id  );
    }});

  }


}
