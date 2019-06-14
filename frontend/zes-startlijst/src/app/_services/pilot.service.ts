import { Injectable } from '@angular/core';
import { Pilot } from '../_domain/pilot';
import { Pilotstatus } from '../_domain/pilotstatus';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private pilots: Pilot[] = [];

  getAll(): Observable<Pilot[]> {
    return of(this.pilots);
  }

  constructor() {
    this.pilots.push(
      new Pilot("Axel Köhler", Pilotstatus.Solist),
      new Pilot("Abraham Veldhuis", Pilotstatus.Instructeur),
      new Pilot("Stefan Brilmans", Pilotstatus.DBO),
    );
    console.dir( this.pilots );
  }
}
