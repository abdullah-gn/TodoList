import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private uService:UsersService) { }

  name:string = ""
  city:string = ""
  email:string = ""

  register(){
    const user2={
      name:this.name,
      city:this.city,
      email:this.email
    }
    this.uService.addUser(user2).subscribe()
   
  }
  ngOnInit(): void {
   
  }
  
  
}
