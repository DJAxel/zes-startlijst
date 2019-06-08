import { Injectable } from '@angular/core';
import { Flight } from '../_domain/Flight';
import { Plane } from '../_domain/Plane';
import { Pilot } from '../_domain/Pilot';
import { Pilotstatus } from '../_domain/Pilotstatus';
import { Startmethod } from '../_domain/Startmethod';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flights: Flight[] = [];

  getAll(): Observable<Flight[]> {
    return of(this.flights);
  }

  constructor() {
    this.flights.push(
      new Flight(
        new Plane("PH-421", "Ka8", 1),
        new Pilot("Axel Köhler", Pilotstatus.Solist),
        null,
        new Date("2019-06-03 10:33:00"),
        new Date("2019-06-03 10:45:00"),
        "EHDP",
        Startmethod.L,
        ""
      )
    );
    this.flights.push(
      new Flight(
        new Plane("PH-1606", "Ka8", 1),
        new Pilot("Stefan Brilmans", Pilotstatus.DBO),
        new Pilot("Abraham Veldhuis", Pilotstatus.Instructeur),
        new Date("2019-06-03 10:40:00"),
        new Date("2019-06-03 10:59:00"),
        "EHDP",
        Startmethod.L,
        ""
      )
    );
    this.flights.push(
      new Flight(
        new Plane("PH-1606", "Ka8", 1),
        new Pilot("Stefan Brilmans", Pilotstatus.DBO),
        new Pilot("Abraham Veldhuis", Pilotstatus.Instructeur),
        new Date("2019-06-03 10:40:00"),
        null,
        "EHDP",
        Startmethod.L,
        ""
      )
    );
    this.flights.push(
      new Flight(
        new Plane("PH-1016", "Ka8", 1),
        new Pilot("Axel Köhler", Pilotstatus.Solist),
        null,
        new Date("2019-06-03 11:06:00"),
        new Date("2019-06-03 11:07:00"),
        "EHDP",
        Startmethod.L,
        ""
      )
    );
    console.log( this.flights );
  }
}
