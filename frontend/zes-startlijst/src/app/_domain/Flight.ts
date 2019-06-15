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

	constructor(obj?: any) {
		Object.assign(this, obj);
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