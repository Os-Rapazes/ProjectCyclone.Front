import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Color } from "../models/color.model";

@Injectable()
export default class ColorService{
    constructor(
        private readonly http : HttpClient
    ){}
    public getAllColors(): Observable<Color[]>{
        return this.http.get<Color[]>(`${environment.API}/Colors`)
    }
}
