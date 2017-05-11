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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    const eventId = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(eventId).then((resp) => {
      console.log('resp from getEventById from event-edit compnennt', resp);
      this.event = resp;
    });
  }

}
