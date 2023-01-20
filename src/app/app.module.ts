import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {  NavBarComponent } from './navbar/navbar.component';
import { UserListComponent } from './users/user_list.component';
import { RouterModule } from '@angular/router';
import { Add_userComponent } from './add_user/add_user.component';
import { Information_userComponent } from './information_user/information_user.component';
import { ConcatPipe } from './service/concat.pipe';

@NgModule({
  declarations: [
     AppComponent,
      LoginComponent,
      NavBarComponent,
      UserListComponent,
      Add_userComponent,
      Information_userComponent,
      ConcatPipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'add',component:Add_userComponent},
      {path:'users/:page', component: UserListComponent},
      {path:'login',component:LoginComponent, },
      {path:'user/:id',component:Information_userComponent},

      {path:'',redirectTo:'users/1',pathMatch:"full"},
      {path:'**',redirectTo:'users/1',pathMatch:"full"},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
