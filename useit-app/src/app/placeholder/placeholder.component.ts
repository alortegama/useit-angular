import {Component, OnInit} from '@angular/core';
import {Placeholder} from './placeholder';
import {PlaceholderService} from '../placeholder.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  placeholders: Placeholder[];
  loading = true;
  termino: string;


  constructor(private placeholderService: PlaceholderService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.placeholderService.getAll().subscribe(data => {
      this.placeholders = data;
      this.loading = false;
    });
  }
}
