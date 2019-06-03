import { Pilotstatus } from './pilotstatus';

export class Pilot {
	name: string;
	status: Pilotstatus;

	constructor(name: string, status: Pilotstatus) {
		this.name = name;
		this.status = status;
	}
}