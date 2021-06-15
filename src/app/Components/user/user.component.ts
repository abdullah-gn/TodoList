import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/Model/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('userData') user:user={}

}
