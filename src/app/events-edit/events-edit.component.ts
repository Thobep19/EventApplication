import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'; 
import {EventService} from '../events/events.service';

@Component({
  selector: 'events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit {

  event:Object;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const eventId = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(eventId).then((resp) => {
      console.log('resp from getEventById from event-edit compnennt', resp);
      this.event = resp;
    });
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
      }
    });
  }

  goToHome() {
    this.router.navigate(['events']);
  };
}

