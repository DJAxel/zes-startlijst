import { Component, OnInit } from '@angular/core';
import { Flight } from '../_domain/flight';
import { Pilot } from '../_domain/pilot';
import { Plane } from '../_domain/plane';
import { Startmethod } from '../_domain/startmethod';
import { Pilotstatus } from '../_domain/pilotstatus';

@Component({
  selector: 'app-startlist',
  templateUrl: './startlist.component.html',
  styleUrls: ['./startlist.component.scss']
})
export class StartlistComponent implements OnInit {

  flights: Flight[] = [];

  constructor() { }

  ngOnInit() {
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

    console.log(this.flights);
  }

}
