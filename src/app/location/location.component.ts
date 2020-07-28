import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input('property_location') property_location: string;

  @Output() locationValue = new EventEmitter<string>();

  location_value(value: string) {
    this.locationValue.emit(value)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
