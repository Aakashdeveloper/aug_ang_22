import { Component } from '@angular/core';
import { IRegister } from './registerForm.model';
import { NgForm } from '@angular/forms';
import { RegisterFormService } from './registerForm.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-form',
    templateUrl: './registerForm.component.html'
})

export class RegisterFormsComponent{

    constructor(
        private registerFormService:RegisterFormService,
        private router: Router){}

    myEmployee = new IRegister('Amit','a@a.com','12345678','964388888');
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.registerFormService.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})
        this.router.navigate(['/login'])
    }

}   