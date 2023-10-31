import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import CarService from 'src/app/services/car.service';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.scss'],
  providers:[CarService]
})
export class ViewCarsComponent implements OnInit {
  public cars !: Observable<Car[]>

  public displayedColumns: string[] = ['client','plate' ,'colorName' ,'model', 'brand' ,'price', 'actions'];

  constructor(
    private readonly carService : CarService
    ) { }

  ngOnInit(): void {
    this.loadCars()
  }

  public confirmDeleteCar(id : string){
    this.carService.deleteCar(id)
    .subscribe(() => this.loadCars())

  }

  private loadCars(){
    this.cars = this.carService.getAllCars()
  }
}
