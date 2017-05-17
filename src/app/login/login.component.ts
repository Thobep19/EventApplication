import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/events.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private router: Router) { }

  ngOnInit() {
  }
  
goToHome(){
  this.router.navigate(['']);
};
}
