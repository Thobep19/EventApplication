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
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'event/:id',   component: EventComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'event-form/:id', component: EventFormComponent }
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
    UsersComponent,
    UserFormComponent,
    UserComponent,
    EventFormComponent,
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
