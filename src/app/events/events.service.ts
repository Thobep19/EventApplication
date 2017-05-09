import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class EventService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        this.apiUrl = 'http://localhost:8000/api'
    }
    // this is where the function goes..
    getEvents(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/events`).toPromise().then((resp) => {
            let events = resp.json();
            console.log('events', events);
            return events;
        });
    }

    getEventById(eventId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/events/id/${eventId}`).toPromise().then((resp) => {
            let event = resp.json();
            console.log('event', event);
            return event;
        });
    }

    addEvent(event): Promise<Object> {
        return this.http.post(`${this.apiUrl}/events`, event).toPromise().then((resp) => {
            let event = resp.json();
            console.log('event', event);
            return event;
        });
    }

    deleteEvent(id): Promise<Object> {
        console.log(`from event.service delete method......`);
        return this.http.delete(`${this.apiUrl}/events/id/${id}`).toPromise().then((resp) => {
            let status = resp.json();
            console.log('event', status);
            return status;
        });
    }

    updateEvent(id, event): Promise<Object> {
        return this.http.put(`${this.apiUrl}/events/id/${id}`, event).toPromise().then((resp) => {
            let event = resp.json();
            console.log('event', event);
            return event;
        });
    }
    

}