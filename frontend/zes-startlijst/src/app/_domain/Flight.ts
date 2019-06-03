import { Plane } from './plane';
import { Pilot } from './pilot';
import { Startmethod } from './startmethod';

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
}