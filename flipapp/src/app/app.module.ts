import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { ClothsComponent } from './Home/cloths.component';
import { MobileComponent } from './Home/mobile.component';
import { MyUpperPipe } from './pipes/myupper.pipe';

//decorator
@NgModule({

  // All the components and pipe 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClothsComponent,
    MobileComponent,
    MyUpperPipe
  ],

  // All the modules
  imports: [
    BrowserModule,
    CarouselModule
  ],

  // All the services
  providers: [],

  //only and only main components
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}