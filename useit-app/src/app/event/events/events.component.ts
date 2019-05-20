import {Component, OnInit} from '@angular/core';
import {EventService} from '../../event.service';
import {Event} from '../event';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CreateEventComponent} from '../create-event/create-event.component';
import {EventDetailComponent} from '../event-detail/event-detail.component';
import {AuthenticationBasicService} from '../../login/authentication-basic.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  loading = true;


  constructor(private router: Router,
              private eventService: EventService,
              private authenticationService: AuthenticationBasicService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.eventService.getAll().subscribe(event => {
      this.events = event;
      this.loading = false;
    });
  }

  details(idx: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: idx
    };

    this.dialog.open(EventDetailComponent, dialogConfig);
  }

  performSearch(text: string) {
    this.eventService.findByDescriptionContaining(text)
      .subscribe(
        (events) => {
          this.events = events;
        });

  }

  openDialog() {
    const dialog = this.dialog.open(CreateEventComponent);
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();

  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();

  }
}
