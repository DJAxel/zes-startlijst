import { Injectable } from '@angular/core';
import { Plane } from '../_domain/plane';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private planes: Plane[] = [];

  getAll(): Observable<Plane[]> {
    return of(this.planes);
  }

  constructor() {
    this.planes.push(
      new Plane("PH-1016", "LS-4b", 1),
      new Plane("PH-1134", "Twin III Acro", 2),
      new Plane("PH-1259", "HPH 304C", 1),
      new Plane("PH-421", "Ka8", 1),
      new Plane("PH-1606", "ASK21", 2),
      new Plane("PH-980", "SZD Junior", 1)
    );
  }
}
