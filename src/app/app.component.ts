import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ManageUser';
  isAuth:boolean=false;


  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.isAuth=this.authService.loginAuto();
  }

  islogin(islogin:boolean){
    this.isAuth=islogin;
  }


}
