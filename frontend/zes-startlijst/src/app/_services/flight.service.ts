import { Injectable } from '@angular/core';
import { Flight } from '../_domain/flight';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Pilotstatus } from '../_domain/pilotstatus';
import { Startmethod } from '../_domain/startmethod';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

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

  add(flight: Flight): Observable<Flight> {
    console.log("POSTing flight!");
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    console.log(httpHeaders);
    return this.http.post<Flight>('/api/flights/', flight, httpHeaders).pipe(
      catchError(err => console.dir(err))
    );
  }

  constructor(private http: HttpClient) { }
}
