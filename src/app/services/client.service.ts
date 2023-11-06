import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../models/client.model";
import FilterQueryMount from "../utils/filterquery";
import PagedEntity from "../models/paged-entity,model";

@Injectable()
export default class ClientService {
  constructor(private readonly http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment().API}/Clients`)
  }
  public getClientsByState(state: boolean): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment().API}/Clients?$filter=${FilterQueryMount.filterEqual('State', state)}`)
  }

  public getClientsByStateCount(state: boolean): Observable<number> {
    return this.http.get<number>(`${environment().API}/Clients/count?state=${state}`)
  }

  public getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${environment().API}/Clients/${id}`)
  }

  public getClientFilteringByName(name: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment().API}/Clients?$filter=${FilterQueryMount.filterContains('FirstName', name)} or ${FilterQueryMount.filterContains('LastName', name)}`)
  }
  public getClientsPaged(pageNumber: number, pageSize: number): Observable<PagedEntity<Client>> {
    return this.http.get<PagedEntity<Client>>(`${environment("v2").API}/Clients`)
  }
  public postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment().API}/Clients`, client)
  }

  public putClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment().API}/Clients`, client)
  }
  public deactiveClient(clientId: string): Observable<void> {
    return this.http.patch<void>(`${environment().API}/Clients/deactiveClient/${clientId}`, {})
  }
  public activeClient(clientId: string): Observable<void> {
    return this.http.patch<void>(`${environment().API}/Clients/activeClient/${clientId}`, {})
  }

}
