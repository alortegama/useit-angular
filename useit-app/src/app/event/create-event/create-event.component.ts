import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import {EventService} from '../../event.service';
import {Event} from '../event';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<CreateEventComponent>, private eventService: EventService) {
  }

  event: Event = new Event();

  ngOnInit() {
  }

  createEvent(createEventForm: NgForm) {
    if (createEventForm.invalid) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
      });

      Toast.fire({
        type: 'error',
        title: 'Don\'t touch my code'
      });
      return;
    }
    this.eventService.createEvent(this.event).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Event creat correctament',
      });
      this.closeDialog();
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
