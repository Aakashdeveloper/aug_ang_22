import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './empForm.component.html'
})

export class EmpComponent implements OnInit {
    employeeForm:FormGroup;
    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName:['John',[Validators.required,Validators.minLength(3)]],
            lastName:['Adams',[Validators.required,Validators.maxLength(8)]],
            email:['a@a.com',[Validators.required,
                Validators.pattern("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")]]
        })
    }
}


