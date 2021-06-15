import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from '@angular/router'
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { EditComponent } from './Components/edit/edit.component';

const routes:Routes =[
  {path:"", redirectTo:"users",pathMatch:"full"},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UserDetailsComponent},
  {path:"register",component:RegisterComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
