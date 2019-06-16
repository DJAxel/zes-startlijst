import { Component, OnInit } from '@angular/core';
import { Flight } from '../_domain/flight';
import { Pilot } from '../_domain/pilot';
import { Plane } from '../_domain/plane';
import { Startmethod } from '../_domain/startmethod';
import { Pilotstatus } from '../_domain/pilotstatus';
import { FlightService } from '../_services/flight.service';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-startlist',
  templateUrl: './startlist.component.html',
  styleUrls: ['./startlist.component.scss']
})
export class StartlistComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService, private loginService: LoginService) { }

  ngOnInit() {
    this.flightService.getAll().subscribe(flights => this.flights = flights);
  }

}
