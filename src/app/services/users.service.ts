import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../Model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private uClient:HttpClient) { }
  readonly baseUrl:string="http://localhost:3002/users"
  user:user[]=[]


  getAllUsers(){
    return this.uClient.get(this.baseUrl,{
      observe:'response'
    });
  }

  getUserById(id:number){
    return this.uClient.get(`${this.baseUrl}/${id}`)
  }

  addUser(userrr:user){
   return this.uClient.post(this.baseUrl,userrr)
  }

  deleteUser(id:number){
    return this.uClient.delete(`${this.baseUrl}/${id}`)
  }

  editUser(id:number,usr:user){
    return this.uClient.put(`${this.baseUrl}/${id}`,usr)
  }
}
