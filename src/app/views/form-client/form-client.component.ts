import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import ClientService from 'src/app/services/client.service';
import MessageService from 'src/app/services/message.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
  providers:[ClientService, MessageService]
})
export class FormClientComponent implements OnInit {

  public formClient: FormGroup = new FormGroup({
    firstName : new FormControl(null, [Validators.required]),  
    lastName : new FormControl(null, [Validators.required]),     
    cpf : new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]), 
    rg : new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)])
  })

  public isEditing: boolean = false
  private idEditing?: string

  constructor(
    private readonly clientService : ClientService,
    private readonly messageService : MessageService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.idEditing = params['id'])
    if (this.idEditing != undefined) {
      this.isEditing = true
      this.loadFormClientToEdit()
    } else {
      this.isEditing = false
    }
  }

  public confirmRegisterClient(){
    const client : Client = this.formClient.value 

    this.clientService.postClient(client).subscribe({
      next: _ => this.messageService.showMessage("Cliente registrador com sucesso",
      "success", true, "/view-clients"),
    error: _ => this.messageService.showMessage("Erro ao registrar o cliente", "error",false)
    })
  }

  public updateClient(){
    const client : Client = {clientId:this.idEditing, ...this.formClient.value }
      
    this.clientService.putClient(client).subscribe({
      next: _ => this.messageService.showMessage("Cliente atualizado com sucesso",
      "success", true, "/view-clients"),
      error: _ => this.messageService.showMessage("Erro ao atualizar o cliente", "error",false)
    })
  }

  private loadFormClientToEdit(){
    this.clientService.getClientById(this.idEditing!).subscribe((client)=>{
      this.formClient.patchValue({
        firstName:client.firstName,
        lastName:client.lastName,
        cpf:client.cpf,
        rg:client.rg
      })

    })
  }
}
