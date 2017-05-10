import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private router: Router
  ) { 
  }

  ngOnInit() {
  }

}
