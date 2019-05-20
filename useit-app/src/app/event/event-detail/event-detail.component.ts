import {Component, Inject, OnInit} from '@angular/core';
import {EventService} from '../../event.service';
import {ActivatedRoute} from '@angular/router';
import {Event} from '../event';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  idx: number;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private dialogRef: MatDialogRef<EventDetailComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.idx = data.id;
  }

  ngOnInit() {
    this.eventService.getEvent(this.idx).subscribe(response => {
      this.event = response;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
