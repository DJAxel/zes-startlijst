import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../_domain/viewmodels/incoming/loginResponse';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJheGVsazE5OTgiLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE1NjA3Njg4MjN9.F6kCZwvIk6UjBnRmdYZZSCkaF4ZDt4z-QIgi8blf-oU";

  constructor(private http: HttpClient) {
    this.refreshToken();
  }

  private refreshToken(): void {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const credentials = {
      username: "axelk1998",
      password: "hello"
    }
    this.http.post<LoginResponse>('/api/users/login', credentials, httpHeaders).subscribe(t => this.token = t);
  }

  getToken(): string {
    return this.token;
  }
}
