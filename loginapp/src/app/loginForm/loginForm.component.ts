import { Component } from '@angular/core';
import { ILogin } from './loginForm.model';
import { NgForm } from '@angular/forms';
import { LoginFormService } from './loginForm.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './loginForm.component.html'
})

export class LoginFormsComponent{

    constructor(
        private loginFormService:LoginFormService,
        private router: Router){}

    myEmployee = new ILogin('a@a.com','12345678');
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.loginFormService.loginUser(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})
        this.router.navigate(['/login'])
    }

}   