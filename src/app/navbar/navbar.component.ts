import { Component, EventEmitter,  Output } from '@angular/core';
import { UserService } from '../service/user-service.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent  {
  title = 'ManageUser';
  isHome:boolean=true;
  numberPage:number=1;

  @Output() islogin:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService:AuthService) { }


exit(){
  this.authService.exit();
  this.islogin.emit(false);
}

}
