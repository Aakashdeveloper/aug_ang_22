import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/Listing.service';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    itemType: string = ''
    catData:any[]=[];
    userInput:string = '';
    filterText:string = "Rating Filter"

    // any declarations
    constructor(private route:ActivatedRoute,
                private listingService: ListingService){}

    ngOnInit(): void {
        this.itemType = this.route.snapshot.params['item'];
        sessionStorage.setItem('catName',this.itemType);
        this.listingService.getDataWrtC(this.itemType)
            .subscribe((data:any[]) => this.catData = data)

    }

    dataReceive(ratingVal:string){
        console.log(">>>ratingVal",ratingVal)
        this.listingService.getDataWrtR(ratingVal,this.itemType)
            .subscribe((data:any[]) => {
                this.catData = data
            })
    }

    costDataReceive(cost:string){
        let lcost = Number(cost.split('-')[0])
        let hcost = Number(cost.split('-')[1])
        this.listingService.getDataWrtCost(lcost,hcost,this.itemType)
            .subscribe((data:any[]) => {
                this.catData = data
            })
    }

}