import { Component } from '@angular/core';
import { ILogin } from './loginForm.model';
import { NgForm } from '@angular/forms';
import { LoginFormService } from './loginForm.service';
import { Router } from '@angular/router';
import { LoginRes, UserRes} from './loginForm.model'

@Component({
    templateUrl: './loginForm.component.html'
})

export class LoginFormsComponent{

    loginError:string=''

    constructor(
        private loginFormService:LoginFormService,
        private router: Router){}

    myEmployee = new ILogin('a@a.com','12345678');
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.loginFormService.loginUser(Form.value)
            .subscribe((res:LoginRes) => {
                this.loginError = ''
                this.loginFormService.getUserInfo(res['token'])
                .subscribe((response:UserRes) => (this.validateUser(response['role'])))
            },
            (err:any[]) =>{
                this.loginError = "Please Enter Correct Details"
            }
            )
    
    }

    validateUser(roleType:string):void{
        localStorage.setItem('Role_Type',roleType)
        this.router.navigate(['/profile'])
    }

}   