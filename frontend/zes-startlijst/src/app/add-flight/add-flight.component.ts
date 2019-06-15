import { Component, OnInit } from '@angular/core';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Startmethod } from '../_domain/startmethod';
import { Flight } from '../_domain/flight';

import { PlaneService } from '../_services/plane.service';
import { PilotService } from '../_services/pilot.service';

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

  constructor(private planeService: PlaneService, private pilotService: PilotService) { }

  ngOnInit() {
    this.getAllPlanes();
    this.getAllPilots();
  }

  getAllPlanes() {
    this.planeService.getAll().subscribe(p => this.planes = p));
  }

  getAllPilots() {
    this.pilotService.getAll().subscribe(p => this.pilots = p));
  }

  setStarttimeNow() {
    var now = new Date();
    var string = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    string += ":";
    string += now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    this.starttimeValue = string;
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
      d.setHours(h);
      d.setMinutes(m);
      d.setSeconds(0);
      return d;
    }
    return null;
  }

  addFlight() {
    let starttime = new Date();
    starttime.setHours();
    let airfield = "EHDP";
    let flight: Flight = new Flight(
      this.plane,
      this.pilot,
      this.second_pilot,
      this.getTimeFromString(this.starttimeValue),
      null,
      airfield,
      this.startmethod,
      this.remarks
    );

    console.dir( flight );
  }
}
