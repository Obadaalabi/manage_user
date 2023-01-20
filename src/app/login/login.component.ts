import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { IUserLogin } from '../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userLogin!:IUserLogin
  errorMessage:any;

  @Output() islogin:EventEmitter<boolean> = new EventEmitter<boolean>();

formGroup:FormGroup=new FormGroup({
  email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required])
});

  constructor(private authService:AuthService,private router:Router) { }

  onLogin(){
  if(this.formGroup.valid){
    this.userLogin=this.formGroup.value;
    this.authService.login(this.userLogin).subscribe(
     result=>
      {
        this.islogin.emit(true);
       this.router.navigate(['/users/',1]);
       catchError((err=>{
        this.errorMessage=err;
        return  of([]);
       }))
      });

  }}

}
