import {Authority} from './authority';
import {Resource} from 'angular4-hal';

export class User extends Resource {
  username = '';
  authorities: Authority[] = [];
  authorization = '';
  password = '';
  enabled: boolean;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
