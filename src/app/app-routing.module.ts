import { AboutComponent } from './views/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCarComponent } from './views/form-car/form-car.component';
import { ViewCarsComponent } from './views/view-cars/view-cars.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  {path:'register', component:FormCarComponent},
  {path:'view-cars', component:ViewCarsComponent},
  {path:'edit/:id', component:FormCarComponent},
  {path:'about', component:AboutComponent},
  {path:'details', component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
