import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/Model/userModel';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  constructor(private Uservice:UsersService,private myactiveRoute:ActivatedRoute) { }

  user:user={}

  ngOnInit(): void {
    this.Uservice.getUserById(this.myactiveRoute.snapshot.params.id).subscribe({
      next:(Response)=>{
        this.user=Response
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }

  
 save(){
   const userrrr={
     name:this.user.name,
     city:this.user.city,
     email:this.user.email
   }
   this.Uservice.editUser(this.myactiveRoute.snapshot.params.id,userrrr).subscribe()
 }


}
