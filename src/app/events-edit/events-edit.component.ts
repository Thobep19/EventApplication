import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'; 
import {EventService} from '../events/events.service';

@Component({
  selector: 'events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {

  event:any;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    let eventId = this.activatedRoute.snapshot.params['id'];
    console.log('eventId', eventId);
    this.eventService.getEventById(eventId).then((resp) => {
      this.event = resp;
      console.log('resp from getEventbyId from edit event component', resp);
    });
  }

  getEventById(id) {
    return this.eventService.getEventById(id);
  }
  
 editEvent(event) {
    let id = event['_id'];
    delete event['_id'];
    delete event['__v'];
    console.log('id', id);
    this.eventService.updateEvent(id, event).then((resp) => {
      console.log('resp from edit book component', resp);
      if(resp) {
        this.event = resp;
        this.goToHome();
        location.reload(true);
      }
    });
  }

  goToHome() {
    this.router.navigate(['']);
  };
}

