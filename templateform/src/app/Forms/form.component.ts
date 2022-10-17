import { Component } from '@angular/core';
import { IUser } from './form.model';
import { NgForm } from '@angular/forms';
import { FormService } from './form.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    templateUrl: './form.component.html'
})

export class FormsComponent{

    constructor(private formService: FormService,
        private router: Router){}


    language: string[] = ['Node','React','Angular','Javascript']
    myEmployee = new IUser('Amit','Sharma','a@a.com','12345678','Node');
    hasCodeLangError:boolean = false;

    firstToUpper(value:string):void{
        if(value.length>0){
            value = value.trim();
            this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }else{
            this.myEmployee.firstName = value;
        }
    }

    showPassword(event:Event):void{
        console.log((event.target as HTMLInputElement).type)
        let inputType = (event.target as HTMLInputElement).type;
        if(inputType === 'password'){
            (event.target as HTMLInputElement).type = 'text'
        }else{
            (event.target as HTMLInputElement).type = 'password'
        }
    }

    validateCodeLang():void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }

    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.formService.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})
        this.router.navigate(['/confirm'])
    }

}   