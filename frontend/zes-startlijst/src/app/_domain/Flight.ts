import { Plane } from './plane';
import { Pilot } from './pilot';
import { Startmethod } from './startmethod';
import * as moment from 'moment';

export class Flight {
	plane: Plane;
	pilot: Pilot;
	second_pilot: Pilot;
	starttime: Date;
	landtime: Date;
	airfield: string;
	startmethod: Startmethod;
	remarks: string;

	constructor(plane: Plane, pilot: Pilot, second_pilot: Pilot, starttime: Date, landtime: Date, airfield: string, startmethod: Startmethod, remarks: string) {
		this.plane = plane;
		this.pilot = pilot;
		this.second_pilot = second_pilot;
		this.starttime = starttime;
		this.landtime = landtime;
		this.airfield = airfield;
		this.startmethod = startmethod;
		this.remarks = remarks;
	}

	getDuration() {
		var duration = 0;
		if( this.starttime == null ) {
			duration = 0;
		}
		else if( this.landtime == null ) {
			duration = moment().diff( moment(this.starttime) );
		}
		else {
			duration = moment(this.landtime).diff( moment(this.starttime) );
		}
		
		let hours: number = Math.floor(duration / 3600000);
		let minutes: number = Math.floor(duration%3600000 / 60000);
		return {
			time: hours+":"+(minutes<10 ? "0":"")+minutes,
			isOngoing: this.landtime == null
		}
	}
}