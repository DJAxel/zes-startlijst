import { Plane, Pilot, Startmethod } from './';

class Flight {
	plane: Plane;
	pilot: Pilot;
	second_pilot: Pilot;
	starttime: Date;
	landtime: Date;
	airfield: string;
	startmethod: Startmethod;
	remarks: string;

	constructor(plane: Plane, pilot: Pilot, second_pilot: Pilot, starttime: Date, landtime: Date, airfield: string, startmethode: Startmethod, remarks: string) {
		this.plane = plane;
		this.pilot = pilot;
		this.second_pilot = second_pilot;
		this.starttime = starttime;
		this.landtime = landtime;
		this.airfield = airfield;
		this.startmethode = startmethode;
		this.remarks = remarks;
	}
}