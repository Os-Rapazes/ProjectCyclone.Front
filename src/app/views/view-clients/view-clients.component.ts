import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import MessageService from 'src/app/services/message.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
  providers:[ClientService, MessageService]
})
export class ViewClientsComponent implements OnInit {
  // public clients ?: Observable<Client[]>
  public clients ?: Observable<Client[]>
  
  public stateSearchClients : boolean = true

  public displayedColumns: string[] = ['name','cpf' ,'rg', 'actions']

  constructor(
    private readonly clientService : ClientService,
    private readonly messageService : MessageService
    ) { }

  ngOnInit(): void {
    this.loadInfoClients()
  }

  public confirmDeleteClient(clientId : string){
    this.loadInfoClients()
  }

  public loadInfoClients(){
    this.clients = this.clientService.getClientsByState(this.stateSearchClients)
  }

  public deactviceClient(clientId : string){
    this.messageService.showConfirmDialog("Cuidado!", "Você tem certeza que deseja desativar esse cliente? \n \
    os carros que ele possui no sistemas serão deletados, e não é possível reverter essa operação!")
    .then(resutl =>{
      if(resutl.isConfirmed)
      this.clientService.deactiveClient(clientId).subscribe(_ => this.loadInfoClients())
    })
    
  }
  
  public activeClient(clientId : string){
    this.clientService.activeClient(clientId).subscribe(_ => this.loadInfoClients())
  }

}
