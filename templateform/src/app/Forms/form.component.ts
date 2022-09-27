import { Component } from '@angular/core';
import { IUser } from './form.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './form.component.html'
})

export class FormsComponent{

    myEmployee = new IUser('','','','','')

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

}