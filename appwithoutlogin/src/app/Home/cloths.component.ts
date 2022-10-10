import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICloths } from '../models/home.model';
import { HomeService } from '../services/Home.service'

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})
export class ClothsComponent implements OnInit {

  cloths:ICloths[]=[]

  constructor(private homeService:HomeService ){}

  ngOnInit(){
    this.homeService.getCloths()
      .subscribe((data:ICloths[])=> this.cloths = data)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
