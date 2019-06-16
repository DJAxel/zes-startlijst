import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../_domain/viewmodels/incoming/loginResponse';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJheGVsazE5OTgiLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE1NjA3MDIyMzV9.fXp_6fYtJW7v6YR2Z-6jI10LGkir7KWm74pAd7bfi-c";

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
