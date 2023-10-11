import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car, CarRegister } from 'src/app/models/car.model';
import { Color } from 'src/app/models/color.model';
import CarService from 'src/app/services/car.service';
import ColorService from 'src/app/services/color.service';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.scss'],
  providers:[CarService, ColorService]
})
export class FormCarComponent implements OnInit {

  public isEditing : boolean = false
  public colors : Color[] = []
  
  public formCar : FormGroup = new FormGroup({
    plate : new FormControl(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
    colorId : new FormControl(undefined, [Validators.required]),
    model : new FormControl(undefined, [Validators.required]),
    brand : new FormControl(undefined, [Validators.required]),
    price : new FormControl(undefined, [Validators.required]),
  }) 
  
  private idEditing ?: string

  constructor(
    private readonly carService : CarService,
    private readonly colorService : ColorService,
    private readonly route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => this.idEditing = params['id'])
    if (this.idEditing != undefined) {
      this.isEditing = true
      this.loadFormCarToEdit()
    }else{
      this.isEditing = false
    }
    this.colorService.getAllColors().subscribe((colors) => this.colors = colors)
  }

  public confirmRegisterCar(){
    const car : CarRegister = this.formCar.value
    this.carService.postCar(car).subscribe((car) => console.log(car));
    
  }

  public updateCar(){
    const car : Car = {carId: this.idEditing , ...this.formCar.value}
    this.carService.putCar(car).subscribe()
  }

  private loadFormCarToEdit(){
    this.carService.getCarById(this.idEditing!).subscribe((car) => {      
      this.formCar.patchValue({
        plate : car.plate,
        colorId : car.colorId,
        model : car.model,
        brand : car.brand,
        price : car.price
      })
    })
  }


}
