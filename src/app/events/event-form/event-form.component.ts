import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { FormsModule, FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

event:any;

constructor(private eventService: EventService, private router: Router){}

ngOnInit() {

    this.event = {};
  
  }
  addEvent(event:any) {
    console.log('event',event);
    this.eventService.addEvent(event).then((resp) => {
      console.log('response from adding an event....', resp);
      this.goToHome();
    });
  }
goToHome(){
  this.router.navigate(['']);
};
}

