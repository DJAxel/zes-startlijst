import { Injectable } from '@angular/core';
import { Plane } from '../_domain/plane';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  getAll(): Observable<Plane[]> {
    return this.http.get<Plane[]>('/api/planes');
  }

  constructor(private http: HttpClient) { }
}
