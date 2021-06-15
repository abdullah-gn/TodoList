import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private uService:UsersService) { }

  users:any;

  ngOnInit(): void {
    this.uService.getAllUsers().subscribe({
      next:(response)=>{
        this.users = response.body
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }

}
