import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/Model/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(private router:Router,private uService:UsersService,private myactiveRoute:ActivatedRoute) { }

user:user={}

  ngOnInit(): void {
    this.uService.getUserById(this.myactiveRoute.snapshot.params.id).subscribe({
      next:(response)=>{
       this.user=response
      },
      error:(er)=>{
        console.log(er)
      }
    })
  }


  delete(){
    if(window.confirm('are you sure you want to delete : '+ this.user.name)){
      this.uService.deleteUser(this.myactiveRoute.snapshot.params.id).subscribe()
      this.router.navigate(['']);
    }

    else{
      this.router.navigate(['users/'+this.myactiveRoute.snapshot.params.id]);
    }
  }

  edit(){
    this.router.navigate(['edit/'+this.myactiveRoute.snapshot.params.id]);
  }
}
