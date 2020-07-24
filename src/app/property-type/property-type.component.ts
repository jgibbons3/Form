import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css']
})
export class PropertyTypeComponent implements OnInit {
  @Input('property_type') property_type: string;
  @Input('property_type_selected') property_type_selected: string;

  @Output() selected_property_type = new EventEmitter<string>();

  selectedPropertyType(value: string) {
    this.selected_property_type.emit(value)
    // this.type_selected
    // console.log("hola", this.property_type_selected)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
