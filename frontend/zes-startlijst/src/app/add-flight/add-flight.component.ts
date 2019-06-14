import { Component, OnInit } from '@angular/core';
import { Plane } from '../_domain/plane';
import { Pilot } from '../_domain/pilot';
import { Startmethod } from '../_domain/startmethod';

import { PlaneService } from '../_services/plane.service';

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
  selectedPlane: any;

  planes: Plane[];

  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.getAllPlanes();
  }

  getAllPlanes() {
    this.planeService.getAll().subscribe(p => this.planes = p;));
  }
}
