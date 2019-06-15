import { Injectable } from '@angular/core';
import { Pilot } from '../_domain/pilot';
import { Pilotstatus } from '../_domain/pilotstatus';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private pilots: Pilot[] = [];

  constructor(private http: HttpClient) {
    this.pilots.push(
      new Pilot("Axel Köhler", Pilotstatus.Solist),
      new Pilot("Abraham Veldhuis", Pilotstatus.Instructeur),
      new Pilot("Stefan Brilmans", Pilotstatus.DBO),
    );
  }

  getAll(): Observable<Pilot[]> {
    // return this.http.get<Pilot[]>(this.url);
    return this.http.get<Pilot[]>('/api/pilots');
  }
}
