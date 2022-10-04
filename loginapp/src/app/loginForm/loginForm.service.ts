import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoginFormService{

    private registerUrl = "https://developerjwt.herokuapp.com/api/auth/register";

    constructor(private http: HttpClient) {}

    loginUser(user:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.registerUrl,user)
    }
}