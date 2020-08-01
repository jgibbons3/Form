import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { StepsProgressService } from './../steps-progress.service';


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

  constructor(
    private router: Router,
    private stepsProgressService: StepsProgressService
  ) { }

  ngOnInit(): void {
  }

  propertyTypeSelected(value: string) {
    this.property_type_selected = value
  }

  locationSelected(value:string) {
    this.property_location = value;
    if(this.property_location.length === 1) {
      this.stepsProgressService.incrementStep(20)
    }
  }

  buildingYearSelected(value:string) {
    this.building_year = value
    if(this.building_year.length === 1) {
      this.stepsProgressService.incrementStep(20)
    }
  }

  livingAreaSelected(value:string) {
    this.living_are = value
    if(this.living_are.length === 1) {
      this.stepsProgressService.incrementStep(20)
    }
  }

  landAreaSelected(value:string) {
    this.land_area = value
    if(this.land_area.length === 1) {
      this.stepsProgressService.incrementStep(20)
    }
  }

  next_page_two(page_two: string) {
    if(this.property_location && this.building_year && this.living_are && this.land_area) {
    this.router.navigate([`${page_two}`]);
    } else {
      this.message = "Oops! You havent complete all the fields with *";
    }
  }

}
