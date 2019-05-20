import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Placeholder} from './placeholder/placeholder';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  urlEndPoint = `${environment.placeholder}`;


  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(data => data as Placeholder[]));
  }
}
