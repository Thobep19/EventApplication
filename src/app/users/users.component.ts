import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { Router } from '@angular/router';

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
    return this.UserService.getUsers();
  }

  getUserById(id) {
    return this.UsersService.getUserById(id);
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['create']);
  }

  deleteUser(id:string) {
    console.log(`deleting an user with id of : ${id}`);
    this.userService.deleteuser(id);
  }

}