import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import CarService from './services/car.service';
import { Car } from './models/car.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[CarService]
})
export class AppComponent {

  ngOnInit(){
  }

}
