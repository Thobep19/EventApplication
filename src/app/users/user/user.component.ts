import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Object;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.userService.getUserById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('res user', resp);
        this.user = resp;
     });
  }
  
}