import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { PropertyTypeComponent } from './property-type/property-type.component';
import { LocationComponent } from './location/location.component';
import { DetailsComponent } from './details/details.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    PropertyTypeComponent,
    LocationComponent,
    DetailsComponent,
    PageTwoComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
