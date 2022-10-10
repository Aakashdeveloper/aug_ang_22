import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeService } from '../services/Home.service';
import { ClothsComponent } from './cloths.component';
import { HomeComponent } from './home.component';
import { MobileComponent } from './mobile.component';



@NgModule({
    declarations: [
        HomeComponent,
        ClothsComponent,
        MobileComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HomeService,
    ]
})

export class HomeModule{}