import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent } from './Components/user/user.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './services/users.service';
import { EditComponent } from './Components/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    RegisterComponent,
    UserDetailsComponent,
    EditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [/* services */UsersService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
