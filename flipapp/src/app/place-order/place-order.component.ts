import { Component } from '@angular/core';
import { IOrder } from './form.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './place-order.component.html'
})

export class PlaceOrderComponent{

    constructor(private orderService: OrderService,
        private router: Router,
        private route:ActivatedRoute){}

    url:string = ''
    prodName:string = this.route.snapshot.params['itemName'];
    userInfo:string|null = sessionStorage.getItem('userResponse');
    id:number = Math.floor(Math.random() * 1000000)

    name = this.userInfo?this.userInfo.split(',')[1]:''
    email = this.userInfo?this.userInfo.split(',')[2]:''
    phone = this.userInfo?this.userInfo.split(',')[3]:''

    myOrder = new IOrder(this.name,this.email,'hmno 876 Delhi',Number(this.phone),733.55,this.id,this.prodName);


    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.orderService.postOrder(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})
        this.url='http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone
    }

}   