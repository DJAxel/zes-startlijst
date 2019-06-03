import { Pilotstatus } from './';

class Pilot {
	name: string;
	status: Pilotstatus;

	constructor(name: string, status: Pilotstatus) {
		this.name = name;
		this.status = status;
	}
}