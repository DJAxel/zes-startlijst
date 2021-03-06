import { Component, OnInit } from '@angular/core';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Startmethod } from '../_domain/startmethod';
import { Flight } from '../_domain/flight';

import { PlaneService } from '../_services/plane.service';
import { PilotService } from '../_services/pilot.service';
import { SettingsService } from '../_services/settings.service';
import { FlightService } from '../_services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  plane: Plane;
  pilot: Pilot;
  second_pilot: Pilot;
  starttimeValue: string = "";
  startmethod: Startmethod = Startmethod.L;
  remarks: string = "";

  planes: Plane[];
  pilots: Pilot[];

  flight: Flight;

  constructor(
    private planeService: PlaneService,
    private pilotService: PilotService,
    private settingsService: SettingsService,
    private flightService: FlightService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getAllPlanes();
    this.getAllPilots();
  }

  getAllPlanes() {
    this.planeService.getAll().subscribe(p => this.planes = p);
  }

  getAllPilots() {
    this.pilotService.getAll().subscribe(p => this.pilots = p);
  }

  setStarttimeNow() {
    var now = new Date();
    var string = now.getHours() < 10 ? "0" + now.getHours() : String(now.getHours());
    string += ":";
    string += now.getMinutes() < 10 ? "0" + now.getMinutes() : String(now.getMinutes());
    this.starttimeValue = string;
  }

  isDoubleseaterSelected(): boolean {
    return this.plane != null && this.plane.seats == 2;
  }

  isEverythingFilledIn(): boolean {
    return this.plane != null
    && this.pilot != null
    && this.isValidTimestring( this.starttimeValue );
  }

  isValidTimestring(timeString: string) {
    return timeString.trim().match(/^\d\d:\d\d.*/) != null;
  }

  getTimeFromString(timeString: string) {
    if( this.isValidTimestring(timeString) ) {
      var colonPos: number = timeString.indexOf(":");
      var h = timeString.substring(colonPos-2, colonPos);
      var m = timeString.substring(colonPos+1, colonPos+3);
      var d = new Date();
      d.setHours( parseInt(h) );
      d.setMinutes( parseInt(m) );
      d.setSeconds(0);
      return d;
    }
    return null;
  }

  addFlight() {
    let flight: Flight = new Flight({
      plane: this.plane,
      pilot: this.pilot,
      second_pilot: this.second_pilot,
      starttime: this.getTimeFromString(this.starttimeValue),
      landtime: null,
      airfield: this.settingsService.getAirfield(),
      startmethod: this.startmethod,
      remarks: this.remarks
    });

    console.log( this.flightService.add( flight ).subscribe(f => this.flight = f) );
    this.router.navigate(['/']);
  }
}
