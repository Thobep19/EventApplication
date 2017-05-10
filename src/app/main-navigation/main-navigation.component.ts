import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  goToAbout() {
    console.log('go to aboutus....;');
    this.router.navigate(['aboutus']);
  }

    goToNewEventForm() {
    console.log('go to new event from....;');
    this.router.navigate(['event-form']);
  }

}
