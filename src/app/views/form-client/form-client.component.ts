import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private readonly clientService : ClientService,
    private readonly messageService : MessageService
  ) { }

  ngOnInit(): void {
  }

  public confirmRegisterClient(){
    const client : Client = this.formClient.value 
    console.log(client);
    
    this.clientService.postClient(client).subscribe({
      next: _ => this.messageService.showMessage("Cliente registrador com sucesso",
      "success", true, "/view-clients"),
    error: _ => this.messageService.showMessage("Erro ao registrar o cliente", "error",false)
    })
  }

}
