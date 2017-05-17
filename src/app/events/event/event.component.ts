import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Object;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.eventService.getEventById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp event', resp);
        this.event = resp;
     });
  }
  deleteEvent(id:string) {
    console.log(`deleting event with id of : ${id}`);
    this.eventService.deleteEvent(id);
    this.router.navigate(['']);
  }
  goToEvent(eventId) {
    this.router.navigate(['/event-edit', eventId]);
  }

  
}