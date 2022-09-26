import { Component } from '@angular/core';
import { IUser } from './form.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './form.component.html'
})

export class FormsComponent{

    myEmployee = new IUser('Amit','','','','')
    
}