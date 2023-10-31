import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../models/client.model";
import FilterQueryMount from "../utils/filterquery";

@Injectable()
export default class ClientService{
    constructor(private readonly http : HttpClient){}

    public getClients() : Observable<Client[]>{
        return this.http.get<Client[]>(`${environment.API}/Clients`)
    }
    
    public getClientFilteringByCpf(cpf: string) : Observable<Client[]>{
        return this.http.get<Client[]>(`${environment.API}/Clients${FilterQueryMount.filterEqual('Cpf', cpf)}`)
    }

    public postClient(client : Client) : Observable<Client>{
        return this.http.post<Client>(`${environment.API}/Clients`, client)
    }
}