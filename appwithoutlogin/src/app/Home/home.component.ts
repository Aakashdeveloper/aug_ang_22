import { Component, OnInit } from '@angular/core';
import { ITop } from '../models/home.model';
import { HomeService } from '../services/Home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // heading:string = "Top Strip";
  // price:number = 200;
  // opend = new Date()
  topData:ITop[]=[]

  constructor(private homeService:HomeService) {}

  ngOnInit():void{
    this.homeService.getTopStrip()
      .subscribe((data:ITop[]) => this.topData = data);
  }

}
