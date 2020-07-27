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

  propertyTypeSelected(value: string) {
    this.property_type_selected = value
    
  }

  next_page_two(page_two: string) {
    this.router.navigate([`${page_two}`]);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
