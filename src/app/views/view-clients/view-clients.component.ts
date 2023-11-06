import { Observable, forkJoin } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import MessageService from 'src/app/services/message.service';
import { Chart } from 'angular-highcharts';
import GraphicFactoryService from 'src/app/services/graphicfactory.service';


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
  providers: [ClientService, MessageService, GraphicFactoryService]
})
export class ViewClientsComponent implements OnInit {
  public clients?: Observable<Client[]>

  public stateSearchClients: boolean = true

  public displayedColumns: string[] = ['name', 'cpf', 'rg', 'actions']

  public pieChart?: Chart

  constructor(
    private readonly clientService: ClientService,
    private readonly messageService: MessageService,
    private readonly graphicService: GraphicFactoryService,
  ) { }

  ngOnInit(): void {
    this.loadInfoClients()
    this.loadGraphicInfo()
  }

  public loadInfoClients() {
    this.clients = this.clientService.getClientsByState(this.stateSearchClients)
    // this.clientService.getClientsPaged(1, 10).subscribe((result) => console.log(result.hasNextPage))
  }

  public deactviceClient(clientId: string) {
    this.messageService.showConfirmDialog("Cuidado!", "Você tem certeza que deseja desativar esse cliente? \n \
    os carros que ele possui no sistemas serão deletados, e não é possível reverter essa operação!")
      .then(resutl => {
        if (resutl.isConfirmed)
          this.clientService.deactiveClient(clientId).subscribe(_ => {
            this.loadInfoClients()
            this.loadGraphicInfo()
          })
      })

  }

  public activeClient(clientId: string) {
    this.clientService.activeClient(clientId).subscribe(_ => {
      this.loadInfoClients()
      this.loadGraphicInfo()
    })
  }

  private loadGraphicInfo() {
    forkJoin({
      activeClients: this.clientService.getClientsByStateCount(true),
      deactiveClients: this.clientService.getClientsByStateCount(false)
    }).subscribe(({ activeClients, deactiveClients }) => {

      this.pieChart = this.graphicService.generatePieGraphic("Numero de Clientes", [
        { name: "Clientes Ativos", y: activeClients, color: "#008000" },
        { name: "Clientes Inativos", y: deactiveClients, color: "#960E0E" }
      ])
    })
    
  }
}
