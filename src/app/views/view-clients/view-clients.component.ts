import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import ClientService from 'src/app/services/client.service';
import { Client } from 'src/app/models/client.model';
import MessageService from 'src/app/services/message.service';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
  providers: [ClientService, MessageService]
})
export class ViewClientsComponent implements OnInit {
  public clients?: Observable<Client[]>

  public stateSearchClients: boolean = true

  public displayedColumns: string[] = ['name', 'cpf', 'rg', 'actions']

  public updateCharFlag : boolean = false
  public pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      floating: false,
      text: '',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name:"Número de clientes",
        type: 'pie',
        data: [
          { name: 'Clientes Ativos', y: 1, color: '#008000' },
          { name: 'Clientes Inativos', y: 2, color: '#960E0E' }
        ],
      },
    ],
  })

  constructor(
    private readonly clientService: ClientService,
    private readonly messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadInfoClients()
  }

  public loadInfoClients() {
    this.clients = this.clientService.getClientsByState(this.stateSearchClients)
    this.clientService.getClientsPaged(1, 10).subscribe((result) => console.log(result.hasNextPage))
  }

  public deactviceClient(clientId: string) {
    this.messageService.showConfirmDialog("Cuidado!", "Você tem certeza que deseja desativar esse cliente? \n \
    os carros que ele possui no sistemas serão deletados, e não é possível reverter essa operação!")
      .then(resutl => {
        if (resutl.isConfirmed)
          this.clientService.deactiveClient(clientId).subscribe(_ => this.loadInfoClients())
      })

  }

  public activeClient(clientId: string) {
    this.clientService.activeClient(clientId).subscribe(_ => this.loadInfoClients())
  }

}
