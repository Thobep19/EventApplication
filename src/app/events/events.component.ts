import { Component, OnInit } from '@angular/core';
import { EventService } from './events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events:Array<Object>;

  constructor(
    private eventService: EventService,
    private router: Router
) { 
  }

  ngOnInit() {
    this.getEvents().then((resp) => {
      this.events = resp;
    });
    console.log('events', this.events);
  }

  getEvents() {
    return this.eventService.getEvents();
  }

  getEventById(id) {
    return this.eventService.getEventById(id);
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['create']);
  }

  deleteEvent(id:string) {
    console.log(`deleting an event with id of : ${id}`);
    this.eventService.deleteEvent(id);
  }

}