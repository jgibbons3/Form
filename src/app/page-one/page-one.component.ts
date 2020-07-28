import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  property_type_1 = 'House';
  property_type_2 = 'Apartment';
  property_type_selected = 'House';

  property_location: string;
  building_year: string;
  living_are: string;
  land_area: string;

  message = "";

  propertyTypeSelected(value: string) {
    this.property_type_selected = value
  }

  locationSelected(value:string) {
    this.property_location = value
  }

  buildingYearSelected(value:string) {
    this.building_year = value
  }

  livingAreaSelected(value:string) {
    this.living_are = value
  }

  landAreaSelected(value:string) {
    this.land_area = value
  }

  next_page_two(page_two: string) {
    if(this.property_location && this.building_year && this.living_are && this.land_area) {
    this.router.navigate([`${page_two}`]);
    } else {
      this.message = "Oops! You havent complete all the fields with *";
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
