import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { UserService } from '../service/user-service.service';
import { IUserAdd } from '../users/user';

@Component({
  selector: 'app-add_user',
  templateUrl: './add_user.component.html',
  styleUrls: ['./add_user.component.css']
})
export class Add_userComponent {
  errorMessage:any;
   userAdd!:IUserAdd;
  formGroup:FormGroup=new FormGroup({

    name: new FormControl("",[Validators.required,Validators.pattern("^[ a-zA-Z][a-zA-Z ]*$")]),

    job: new FormControl("",[Validators.required,Validators.pattern("^[ a-zA-Z][a-zA-Z ]*$")])
  });

  constructor(private userService:UserService) { }


  onAdd(){
    if(this.formGroup.valid){
      this.userAdd=this.formGroup.value;
      this.userService.add(this.userAdd).subscribe(
       result=>
        {
         if(result.name)
         {
          alert("success");
         }
         else
         {
         alert("Erorr");
         }
         catchError((err=>{
          this.errorMessage=err;
          return  of([]);
         }))
        });

    }
    }

}
