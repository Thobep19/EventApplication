import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

user:any;
users:Array<Object>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user={};
  }
  addUser(user:any) {
    console.log('user',user);
    this.userService.addUser(user).then((resp) => {
      console.log('response from adding a user....', resp);
      this.goToHome();
    });
  }

  goToHome() {
    this.router.navigate(['users']);
  };
}


