import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input('building_year') building_year: string;
  @Input('living_are') living_are: string;
  @Input('land_area') land_area: string;

  @Output() buildingYearValue = new EventEmitter<string>();
  @Output() livingAreaValue = new EventEmitter<string>();
  @Output() landAreaValue = new EventEmitter<string>();
  
  building_year_value(value: string) {
    this.buildingYearValue.emit(value)
  }

  living_are_value(value: string) {
    this.livingAreaValue.emit(value)
  }

  land_area_value(value: string) {
    this.landAreaValue.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
