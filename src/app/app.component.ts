import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Free property valuation';
  property_type_1 = 'House';
  property_type_2 = 'Apartment';
  property_type_selected = 'House';

  propertyTypeSelected(value: string) {
    this.property_type_selected = value
    
  }

}

