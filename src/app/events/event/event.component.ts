import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  book: Object;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.eventService.getEventById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp book', resp);
        this.book = resp;
     });
  }
  
}