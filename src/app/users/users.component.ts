
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-form/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:Array<Object>;

  constructor(
    private userService: UserService,
    private router: Router
) { 
  }

  ngOnInit() {
    this.getUsers().then((resp) => {
      this.users = resp;
    });
    console.log('users', this.users);
  }

  getUsers() {
    return this.userService.getUsers();
  }

  getUserById(id) {
    return this.userService.getUserById(id);
  }

  deleteUser(id:string) {
    console.log(`deleting event with id of : ${id}`);
    this.userService.deleteUser(id);
    this.goToHome();
    location.reload(true);
  }
    goToHome() {
    this.router.navigate(['user']);
  };

}
