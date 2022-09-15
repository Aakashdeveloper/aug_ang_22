import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITop,ICloths,IMobile } from '../models/home.model';

@Injectable()

export class HomeService{
    private url = "https://devflipapi.herokuapp.com";

    constructor(private http: HttpClient){}

    getTopStrip():Observable<ITop[]>{
        return this.http.get<ITop[]>(`${this.url}/topstrip`)
    }

    getCloths():Observable<ICloths[]>{
        return this.http.get<ICloths[]>(`${this.url}/item/cloths?limit=5`)
    }

    getMobiles():Observable<IMobile[]>{
        return this.http.get<IMobile[]>(`${this.url}/item/mobile?limit=6`)
    }


}