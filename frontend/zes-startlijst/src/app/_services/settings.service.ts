import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getAirfield(): string {
  	return "EHDP";
  }

}
