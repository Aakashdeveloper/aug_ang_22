import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { MyUpperPipe } from '../pipes/myupper.pipe';


@NgModule({
    declarations: [
        MyUpperPipe
    ],
    imports: [
        CommonModule,
        CarouselModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        CarouselModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        MyUpperPipe
    ]
})

export class SharedModule{}