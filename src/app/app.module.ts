import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder,FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

// Services
import { EventService } from './events/events.service';

// Import Components
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EventsEditComponent } from './events-edit/events-edit.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'event/:id',   component: EventComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'event-form/:id', component: EventFormComponent },
  { path: 'event-edit/:id', component: EventsEditComponent },
  { path: 'events', component: EventsComponent },
  { path: 'app-root', component: AppComponent},
  { path: 'user-form/:id', component: UserFormComponent }
];

// NgModule
@NgModule({

// Declarations
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    MainNavigationComponent,
    AboutusComponent,
    UserFormComponent,
    EventFormComponent,
    EventsEditComponent,
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
