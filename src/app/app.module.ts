import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import MaterialModule from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormCarComponent } from './views/form-car/form-car.component';
import { ViewCarsComponent } from './views/view-cars/view-cars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './views/about/about.component';
import { DetailsComponent } from './views/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCarComponent,
    ViewCarsComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
