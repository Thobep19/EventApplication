import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule, FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

user:any;
users:Array<Object>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user={};
  }
  addUser(user:any) {
    console.log('user',user);
    this.userService.addUser(user).then((resp) => {
      console.log('response from adding a user....', resp);
    });
  }

}

