import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    itemType: string = ''


    // any declarations
    constructor(private route:ActivatedRoute){}

    ngOnInit(): void {
        this.itemType = this.route.snapshot.params['item']
    }

}