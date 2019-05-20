import {Injectable} from '@angular/core';
import {Event} from './event/event';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class EventService {
  urlEndPoint = `${environment.spring}`;


  private httpHeaders = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  );


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Event[]> {
    return this.httpClient.get(this.urlEndPoint + '/agenda')
      .pipe(
        map(respone => respone as Event[])
      );

  }

  createEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.urlEndPoint + '/crear-agenda', event, {headers: this.httpHeaders});

  }

  getEvent(id): Observable<Event> {
    return this.httpClient.get<Event>(`${this.urlEndPoint}/agenda/${id}`, {headers: this.httpHeaders});
  }

  findByDescriptionContaining(text: string): Observable<Event[]> {
    return this.httpClient.get(`${this.urlEndPoint}/agenda/search/findByDescriptionContaining?text=${text}`).pipe(
      map((res: any) => res as Event[])
    );
  }
}
