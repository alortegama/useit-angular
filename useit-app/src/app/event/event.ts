import {Resource} from 'angular4-hal';

export class Event extends Resource {
  id: number;
  description: string;
  location: string;
  date = new Date();
}
