import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car, CarRegister } from 'src/app/models/car.model';
import { Client } from 'src/app/models/client.model';
import { Color } from 'src/app/models/color.model';
import CarService from 'src/app/services/car.service';
import ClientService from 'src/app/services/client.service';
import ColorService from 'src/app/services/color.service';
import MessageService from 'src/app/services/message.service';

@Component({
  selector: 'app-form-car',
  templateUrl: './form-car.component.html',
  styleUrls: ['./form-car.component.scss'],
  providers: [CarService, ColorService, ClientService, MessageService]
})
export class FormCarComponent implements OnInit {

  public isEditing: boolean = false
  public colors: Color[] = []
  public clients?: Observable<Client[]>

  public formCar: FormGroup = new FormGroup({
    plate: new FormControl(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
    colorId: new FormControl(undefined, [Validators.required]),
    model: new FormControl(undefined, [Validators.required]),
    brand: new FormControl(undefined, [Validators.required]),
    price: new FormControl(undefined, [Validators.required]),
    clientId: new FormControl(undefined, [Validators.required])
  })

  private idEditing?: string

  constructor(
    private readonly carService: CarService,
    private readonly colorService: ColorService,
    private readonly clientService: ClientService,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.idEditing = params['id'])
    if (this.idEditing != undefined) {
      this.isEditing = true
      this.loadFormCarToEdit()
    } else {
      this.isEditing = false
    }
    this.colorService.getAllColors().subscribe((colors) => this.colors = colors)
  }

  public confirmRegisterCar() {
    const car: CarRegister = this.formCar.value
    this.carService.postCar(car).subscribe((car) => console.log(car));

  }

  public updateCar() {
    const car: Car = { carId: this.idEditing, ...this.formCar.value }
    this.carService.putCar(car).subscribe({
      next: _ => this.messageService.showMessage("Informações do carro atualizadas com sucesso",
        "success", true, "/view-cars"),
      error: _ => this.messageService.showMessage("Falha ao atualizar carro, verifique as informações", "error",false)
    })
  }

  public filterClientsByCpf(cpf: string) {
    this.clients = this.clientService.getClientFilteringByCpf(cpf)
  }

  private loadFormCarToEdit() {
    this.carService.getCarById(this.idEditing!).subscribe((car) => {
      this.filterClientsByCpf(car.client.cpf)
      this.formCar.patchValue({
        plate: car.plate,
        colorId: car.colorId,
        model: car.model,
        brand: car.brand,
        price: car.price,
        clientId: car.clientId
      })
    })
  }


}
