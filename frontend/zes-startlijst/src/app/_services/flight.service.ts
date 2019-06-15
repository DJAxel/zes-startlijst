import { Injectable } from '@angular/core';
import { Flight } from '../_domain/flight';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Pilotstatus } from '../_domain/pilotstatus';
import { Startmethod } from '../_domain/startmethod';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>('/api/flights/').pipe(
      map(
        (flights: Flight[]) => flights.map(flight => new Flight(flight))
      )
    );
  }

  constructor(private http: HttpClient) { }
}
