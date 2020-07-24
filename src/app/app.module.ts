import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { PropertyTypeComponent } from './property-type/property-type.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    PropertyTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
