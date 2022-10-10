import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { ProdSearchPipe } from '../pipes/search.pipe';
import { RatingFilterComponent } from '../filters/ratingFilter';
import { CostFilterComponent } from '../filters/costFilter.component';
import { ListingService } from '../services/Listing.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        ListingComponent,
        ProdSearchPipe,
        RatingFilterComponent,
        CostFilterComponent
       
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ListingService,
    ]
})

export class ListingModule{}