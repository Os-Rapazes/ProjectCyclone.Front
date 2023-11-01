import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import MaterialModule from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormCarComponent } from './views/form-car/form-car.component';
import { ViewCarsComponent } from './views/view-cars/view-cars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './views/about/about.component';
import { FormClientComponent } from './views/form-client/form-client.component';
import { ViewClientsComponent } from './views/view-clients/view-clients.component';
import { CustomMessageComponent } from './components/custom-message/custom-message.component';
import { CpfPipe } from './utils/pipes/cpf.pipe';
import { RgPipe } from './utils/pipes/rg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormCarComponent,
    ViewCarsComponent,
    AboutComponent,
    FormClientComponent,
    ViewClientsComponent,
    CustomMessageComponent,
    CpfPipe,
    RgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
