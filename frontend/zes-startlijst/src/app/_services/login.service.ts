import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJheGVsazE5OTgiLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE1NjA3MDIyMzV9.fXp_6fYtJW7v6YR2Z-6jI10LGkir7KWm74pAd7bfi-c";

  getToken(): string {
    return this.token;
  }
}
