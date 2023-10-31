import { AboutComponent } from './views/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCarComponent } from './views/form-car/form-car.component';
import { ViewCarsComponent } from './views/view-cars/view-cars.component';
import { FormClientComponent } from './views/form-client/form-client.component';
import { ViewClientsComponent } from './views/view-clients/view-clients.component';

const routes: Routes = [
  {path:'register-car', component:FormCarComponent},
  {path:'view-cars', component:ViewCarsComponent},
  {path:'edit-car/:id', component:FormCarComponent},
  {path:'register-client', component:FormClientComponent},
  {path:'view-clients', component:ViewClientsComponent},
  {path:'edit-client/:id', component:FormClientComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
