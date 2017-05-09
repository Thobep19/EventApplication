import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Services
import { EventService } from './events/events.service';

// Import Components
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'event/:id',   component: EventComponent },
 // { path: 'create',   component: BookCreateComponent }
];

// NgModule
@NgModule({

// Declarations
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
