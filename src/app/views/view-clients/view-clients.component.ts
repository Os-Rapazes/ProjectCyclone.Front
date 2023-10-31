import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
  providers:[ClientService]
})
export class ViewClientsComponent implements OnInit {
  public clients ?: Observable<Client[]>
  
  public displayedColumns: string[] = ['name','cpf' ,'rg', 'actions']

  constructor(private readonly clientService : ClientService) { }

  ngOnInit(): void {
    this.loadInfoClients()
  }

  public confirmDeleteClient(clientId : string){
    this.loadInfoClients()
  }

  private loadInfoClients(){
    this.clients = this.clientService.getClients()
  }

}
