import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car, CarRegister } from "../models/car.model";
import { environment } from "src/environments/environment";

@Injectable()
export default class CarService{
    constructor(
        private readonly http : HttpClient
    ){}
    public getAllCars(): Observable<Car[]>{
        return this.http.get<Car[]>(`${environment().API}/Cars`)
    }
    public getCarById(id : string): Observable<Car>{
        return this.http.get<Car>(`${environment().API}/Cars/${id}`)
    }
    public postCar(car : CarRegister) : Observable<Car>{
        return this.http.post<Car>(`${environment().API}/Cars`, car)
    }
    public putCar(car : Car) : Observable<Car>{
        return this.http.put<Car>(`${environment().API}/Cars`, car)
    }
    public deleteCar(id : string) : Observable<void>{
        return this.http.delete<void>(`${environment().API}/Cars/${id}`)
    }
}
