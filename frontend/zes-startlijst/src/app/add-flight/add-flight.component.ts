import { Component, OnInit } from '@angular/core';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Startmethod } from '../_domain/startmethod';

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
  starttimeValue: string;
  startmethod: Startmethod;
  remarks: string;

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
}
